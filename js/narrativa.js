/* ============================================================
   narrativa.js
   Sprint 2 + Sprint 3 (motor híbrido):
   - Renderiza as 3 cartas de vertente narrativa
   - Grava a escolha (avatar + narrativa) nas variáveis de estado
   - Monta o Cenário de Abertura correspondente à narrativa
     escolhida, em DUAS camadas:

       1) H5P Standalone "de verdade", SE o build local existir
          (h5p/dist/main.bundle.js) E o pacote .h5p da narrativa
          escolhida existir (h5p/branching-narrativa/<id>/h5p.json).
          Isso é 100% opcional — ver README.md § 6.

       2) Motor nativo (fallback silencioso) — reaproveita o MESMO
          padrão de tela já validado em js/licoes-engine.js
          (renderBranching da Lição 18): bolha de diálogo da Líder
          de Arena + bloco de decisão com opções e feedback.
          Não depende de npm, CDN ou autoria externa: os textos
          vêm de data/narrativas.js.

   Nenhuma das duas camadas trava o teste local: se a camada 1
   falhar por qualquer motivo (script ausente, pacote .h5p não
   encontrado, CORS ao rodar em file://), o código cai para a
   camada 2 sem mostrar nenhum aviso técnico ao estudante.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("narrative-grid");
  if(!grid) return;

  // Exige etapas anteriores concluídas
  CRState.requireStudent("index.html");
  CRState.requireAvatar("avatares.html");

  let selecionada = CRState.getNarrative();
  const btnConfirmar = document.getElementById("btn-confirmar-narrativa");
  const wrapper = document.getElementById("h5p-branching-wrapper");
  const container = document.getElementById("h5p-branching-container");
  const btnTrocar = document.getElementById("btn-trocar-narrativa");

  renderCartas();
  btnConfirmar.disabled = !selecionada;

  btnConfirmar.addEventListener("click", () => {
    if(!selecionada) return;

    // Programa as variáveis de estado: Avatar + Narrativa selecionados,
    // conforme tarefa do Sprint 2 ("Programar as variáveis JavaScript
    // para armazenar o Avatar escolhido e a narrativa selecionada").
    CRState.saveNarrative(selecionada);

    abrirCenario(selecionada);
  });

  if(btnTrocar){
    btnTrocar.addEventListener("click", () => {
      wrapper.style.display = "none";
      document.getElementById("narrative-selection-panel").scrollIntoView({ behavior: "smooth" });
    });
  }

  function renderCartas(){
    grid.innerHTML = "";
    CR_NARRATIVES.forEach(narr => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "narrative-card" + (narr.id === selecionada ? " is-selected" : "");
      card.setAttribute("role", "listitem");
      card.setAttribute("aria-pressed", narr.id === selecionada ? "true" : "false");

      card.innerHTML = `
        <div class="narrative-card__image">
          <img src="${narr.imagem}" alt="Ilustração da narrativa ${narr.titulo}" loading="lazy"
               onerror="this.parentElement.innerHTML='<span aria-hidden=\\'true\\'>${narr.icone}</span>'">
        </div>
        <span class="narrative-card__focus">${narr.foco}</span>
        <span class="narrative-card__title">${narr.titulo}</span>
        <p class="narrative-card__desc">${narr.resumo}</p>
      `;

      card.addEventListener("click", () => {
        selecionada = narr.id;
        btnConfirmar.disabled = false;
        renderCartas();
      });

      grid.appendChild(card);
    });
  }

  /* ============================================================
     CAMADA 0 — Orquestração: tenta H5P real, cai pro motor nativo
     ============================================================ */
  function abrirCenario(narrativeId){
    wrapper.style.display = "block";
    wrapper.scrollIntoView({ behavior: "smooth", block: "start" });
    container.innerHTML = `<p class="panel__subtitle">Preparando sua cena…</p>`;

    montarCenarioH5P(narrativeId)
      .then((montado) => {
        if(!montado) renderCenarioNativo(narrativeId);
      })
      .catch(() => {
        // Qualquer falha na camada H5P (script ausente, .h5p não
        // encontrado, bloqueio de CORS em file://) cai aqui.
        // Fallback silencioso — o estudante nunca vê esse motivo.
        renderCenarioNativo(narrativeId);
      });
  }

  /* ============================================================
     CAMADA 1 — H5P Standalone "de verdade" (opcional)
     Só é usada se:
       a) h5p/dist/main.bundle.js existir e carregar (npm install
          h5p-standalone + cópia do build, conforme README.md §6);
       b) o pacote h5p/branching-narrativa/<narrativeId>/h5p.json
          também existir (conteúdo autorado no Lumi/H5P.org).
     Resolve `true` se conseguiu montar o player, `false`/reject
     em qualquer outro caso — para o chamador decidir o fallback.
     ============================================================ */
  function montarCenarioH5P(narrativeId){
    return new Promise((resolve, reject) => {
      // 1) Pacote de conteúdo precisa existir antes de tentar carregar
      //    o player inteiro (evita baixar o bundle à toa).
      fetch(`h5p/branching-narrativa/${narrativeId}/h5p.json`, { method: "HEAD" })
        .then((resp) => {
          if(!resp.ok) return reject(new Error("Pacote .h5p não encontrado"));
          return carregarBibliotecaH5P();
        })
        .then(() => {
          const avatarId = CRState.getAvatar();
          const avatar = CR_AVATARS.find(a => a.id === avatarId);

          new H5PStandalone.H5P(container, {
            h5pJsonPath: `h5p/branching-narrativa/${narrativeId}`,
            frameJs: "h5p/dist/frame.bundle.js",
            frameCss: "h5p/dist/styles/h5p.css",
            contentJsonPath: `h5p/branching-narrativa/${narrativeId}/content`
          }).then(() => {
            console.info("[Chemical Royale] Branching Scenario H5P carregado:", narrativeId, "| Avatar:", avatar?.nome);
            resolve(true);
          }).catch(reject);
        })
        .catch(reject);
    });
  }

  // Injeta dinamicamente o script + CSS do h5p-standalone (só quando
  // este caminho é de fato tentado — narrativa.html não carrega isso
  // de cara, então não há 404 no console quando a pasta h5p/dist está
  // vazia, que é o estado padrão de um clone novo do repositório).
  function carregarBibliotecaH5P(){
    if(typeof H5PStandalone !== "undefined") return Promise.resolve();

    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "h5p/dist/styles/h5p.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "h5p/dist/main.bundle.js";
      script.onload = () => {
        if(typeof H5PStandalone !== "undefined") resolve();
        else reject(new Error("main.bundle.js carregou mas não expôs H5PStandalone"));
      };
      script.onerror = () => reject(new Error("h5p/dist/main.bundle.js não encontrado"));
      document.body.appendChild(script);

      // Não deixa a tentativa travar o fallback por muito tempo
      // caso o navegador demore a disparar onerror (raro, mas evita
      // qualquer sensação de "travou" no teste local).
      setTimeout(() => reject(new Error("timeout ao carregar h5p-standalone")), 2500);
    });
  }

  /* ============================================================
     CAMADA 2 — Motor nativo (fallback), sem dependências externas
     Reaproveita o mesmo padrão visual de renderBranching (Lição 18):
     bolha de diálogo da Líder de Arena + bloco de decisão.
     ============================================================ */
  function renderCenarioNativo(narrativeId){
    const cena = CR_NARRATIVE_SCENES[narrativeId];
    const avatarId = CRState.getAvatar();
    const avatar = CR_AVATARS.find(a => a.id === avatarId) || CR_AVATARS[0];

    renderStartScreen(cena, avatar);
  }

  function aplicarPlaceholders(texto, avatar){
    return texto
      .replace(/{{avatarNome}}/g, avatar.nome)
      .replace(/{{avatarPassiva}}/g, avatar.especialidade);
  }

  function renderStartScreen(cena, avatar){
    const s = cena.startScreen;
    container.innerHTML = `
      <div class="avatar-dialogue">
        <div class="avatar-dialogue__portrait">
          <img src="${avatar.foto}" alt="${avatar.nome}" onerror="this.parentElement.textContent='${avatar.simbolo}'">
        </div>
        <div class="avatar-dialogue__bubble">
          <p class="avatar-dialogue__name">${s.titulo}</p>
          <p>${aplicarPlaceholders(s.texto, avatar)}</p>
        </div>
      </div>
      <div class="form-actions" style="justify-content:flex-end; margin-top:18px;">
        <button type="button" class="btn btn--primary" id="btn-cena-iniciar">${s.startButtonText} →</button>
      </div>
    `;

    document.getElementById("btn-cena-iniciar").addEventListener("click", () => {
      renderRamificacao(cena, avatar);
    });
  }

  function renderRamificacao(cena, avatar){
    const r = cena.primeiraRamificacao;
    container.innerHTML = `
      <div class="quiz-block">
        <span class="quiz-block__tag tag-cenario">Cenário de Abertura</span>
        <p class="quiz-block__enunciado">${r.pergunta}</p>
        <div class="quiz-options">
          ${r.caminhos.map((c, i) => `
            <button type="button" class="quiz-option" data-index="${i}">
              <span class="quiz-option__letter">${String.fromCharCode(65 + i)}</span>
              <span>${c.texto}</span>
            </button>
          `).join("")}
        </div>
        <div class="quiz-feedback" id="cena-feedback"></div>
      </div>
    `;

    container.querySelectorAll(".quiz-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.index);
        const caminho = r.caminhos[idx];

        container.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);
        btn.classList.add("is-correct");

        const feedback = container.querySelector("#cena-feedback");
        feedback.classList.add("is-visible", "feedback-correta");
        feedback.textContent = caminho.resultado;

        renderDesfecho(caminho.destino);
      });
    });
  }

  function renderDesfecho(destino){
    const acoesWrapper = document.createElement("div");
    acoesWrapper.className = "form-actions";
    acoesWrapper.style.marginTop = "18px";

    if(destino === "revisao-rapida"){
      const box = document.createElement("div");
      box.className = "quiz-block";
      box.style.marginTop = "16px";
      box.innerHTML = `
        <p class="avatar-dialogue__name">${CR_REVISAO_RAPIDA.titulo}</p>
        <ul style="margin:8px 0 0 18px; color:var(--text-muted); font-size:0.88rem; line-height:1.7;">
          ${CR_REVISAO_RAPIDA.pontos.map(p => `<li>${p}</li>`).join("")}
        </ul>
      `;
      container.appendChild(box);
      acoesWrapper.innerHTML = `<a href="licao-17.html" class="btn btn--primary">Ir para a Lição 17 →</a>`;
      container.appendChild(acoesWrapper);
      return;
    }

    const rota = CR_LESSON_ROUTES[destino];

    if(rota){
      acoesWrapper.innerHTML = `<a href="${rota}" class="btn btn--primary">Entrar na ${rotuloLicao(destino)} →</a>`;
    }else{
      // Lição referenciada ainda não tem página própria no repositório
      // (ex.: Lição 19 — Sprint 3 em andamento). Em vez de um link
      // quebrado, avisa com transparência e oferece uma alternativa
      // já disponível.
      const aviso = document.createElement("div");
      aviso.className = "quiz-block";
      aviso.style.marginTop = "16px";
      aviso.innerHTML = `
        <span class="badge">🚧 ${rotuloLicao(destino)} em produção</span>
        <p style="margin-top:10px; color:var(--text-muted); font-size:0.88rem;">
          Esta trilha ainda está sendo finalizada pela equipe pedagógica.
          Enquanto isso, você pode seguir pela Lição 17, já disponível.
        </p>
      `;
      container.appendChild(aviso);
      acoesWrapper.innerHTML = `<a href="licao-17.html" class="btn btn--primary">Entrar na Lição 17 →</a>`;
    }

    container.appendChild(acoesWrapper);
  }

  function rotuloLicao(destino){
    const nomes = {
      "licao-17": "Lição 17",
      "licao-18": "Lição 18",
      "licao-19": "Lição 19"
    };
    return nomes[destino] || destino;
  }
});
