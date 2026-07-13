/* ============================================================
   licoes-engine.js
   Motor genérico de "Course Presentation" caseiro, usado para
   renderizar qualquer lição a partir de um objeto de dados
   (ver data/licao-17.js, data/licao-18.js). Implementa 5 tipos
   de recurso H5P:
     - Slide de diálogo com a Líder de Arena (com captura de apelido)
     - Slide de teoria (Course Presentation)
     - Bloco de quiz progressivo (Single Choice Set) — 3 questões
       fácil/médio/difícil, com distratores e feedback
     - Dialog Cards (flashcards de autorregulação — texto ou imagem)
     - Branching Scenario (cenário ramificado em nós de decisão)
     - Placar final da lição
   Regra de gamificação: o aluno só avança de slide se concluir
   a interação obrigatória do slide atual (responder o bloco de
   quiz, completar o cenário ramificado, ou informar o apelido
   no diálogo inicial).
   ============================================================ */

function CRLessonEngine(rootEl, lessonData){
  let slideIndex = 0;
  let canAdvance = true; // controla o gate de avanço do slide atual

  const avatarId = CRState.getAvatar();
  const avatar = CR_AVATARS.find(a => a.id === avatarId) || CR_AVATARS[0];

  rootEl.innerHTML = `
    <div class="lesson-shell">
      <div class="lesson-shell__meta">
        <span>${lessonData.titulo}</span>
        <span>Apostila pág. ${lessonData.paginaApostila}</span>
      </div>
      <div class="lesson-shell__progress" id="lesson-progress"></div>
      <div class="lesson-slide" id="lesson-slide-content" aria-live="polite"></div>
      <div class="lesson-nav">
        <button type="button" class="btn btn--ghost" id="lesson-btn-prev">← Anterior</button>
        <span class="lesson-nav__hint" id="lesson-nav-hint"></span>
        <button type="button" class="btn btn--primary" id="lesson-btn-next">Avançar →</button>
      </div>
    </div>
  `;

  const elProgress = rootEl.querySelector("#lesson-progress");
  const elContent = rootEl.querySelector("#lesson-slide-content");
  const elHint = rootEl.querySelector("#lesson-nav-hint");
  const btnPrev = rootEl.querySelector("#lesson-btn-prev");
  const btnNext = rootEl.querySelector("#lesson-btn-next");

  renderProgress();
  renderSlide();

  btnPrev.addEventListener("click", () => {
    if(slideIndex > 0){ slideIndex--; renderProgress(); renderSlide(); }
  });
  btnNext.addEventListener("click", () => {
    if(!canAdvance) return;
    if(slideIndex < lessonData.slides.length - 1){
      slideIndex++;
      renderProgress();
      renderSlide();
    }else if(typeof lessonData.onFinish === "function"){
      lessonData.onFinish();
    }
  });

  function renderProgress(){
    elProgress.innerHTML = lessonData.slides.map((_, i) => {
      const cls = i < slideIndex ? "is-done" : (i === slideIndex ? "is-current" : "");
      return `<span class="step ${cls}"></span>`;
    }).join("");
  }

  function setGate(locked, hintText){
    canAdvance = !locked;
    btnNext.disabled = locked;
    elHint.textContent = hintText || "";
  }

  function renderSlide(){
    const slide = lessonData.slides[slideIndex];
    btnPrev.style.visibility = slideIndex === 0 ? "hidden" : "visible";
    btnNext.textContent = slideIndex === lessonData.slides.length - 1 ? "Concluir lição →" : "Avançar →";

    if(slide.type === "dialogo") renderDialogo(slide);
    else if(slide.type === "teoria") renderTeoria(slide);
    else if(slide.type === "dialog-cards") renderDialogCards(slide);
    else if(slide.type === "branching") renderBranching(slide);
    else if(slide.type === "quiz") renderQuiz(slide);
    else if(slide.type === "final-score") renderFinalScore(slide);
  }

  /* ---------------- Slide: diálogo com a Líder de Arena ---------------- */
  function renderDialogo(slide){
    const apelidoAtual = CRState.getApelido();
    elContent.innerHTML = `
      <div class="avatar-dialogue">
        <div class="avatar-dialogue__portrait">
          <img src="${avatar.foto}" alt="${avatar.nome}" onerror="this.parentElement.textContent='${avatar.simbolo}'">
        </div>
        <div class="avatar-dialogue__bubble">
          <p class="avatar-dialogue__name">${avatar.nome}</p>
          <p>${slide.texto.replace("{{apelido}}", apelidoAtual)}</p>
          ${slide.askApelido ? `
            <div class="apelido-field">
              <label for="input-apelido" class="visually-hidden">Como você quer ser chamado(a)?</label>
              <input type="text" id="input-apelido" placeholder="Digite um apelido ou nome de arena (opcional)" value="${CRState.getAll().apelido || ""}">
              <button type="button" class="btn btn--primary" id="btn-confirmar-apelido">Confirmar</button>
            </div>
          ` : ""}
        </div>
      </div>
    `;

    if(slide.askApelido){
      const input = elContent.querySelector("#input-apelido");
      const btn = elContent.querySelector("#btn-confirmar-apelido");
      const jaTemApelido = !!CRState.getAll().apelido;
      setGate(!jaTemApelido, "Diga como prefere ser chamado(a) para continuar.");

      btn.addEventListener("click", () => {
        const valor = input.value.trim();
        // Se o aluno deixar em branco, respeitamos e usamos o primeiro nome (sem forçar apelido)
        CRState.saveApelido(valor || CRState.getStudent()?.nome?.split(" ")[0] || "Cientista");
        setGate(false);
      });
    }else{
      setGate(false);
    }
  }

  /* ---------------- Slide: teoria (Course Presentation) ---------------- */
  function renderTeoria(slide){
    // Aceita tanto uma figura única (slide.figura) quanto uma lista (slide.figuras),
    // mantendo compatibilidade com os slides já existentes (Tópico 1).
    const figuras = slide.figuras || (slide.figura ? [slide.figura] : []);
    const figurasHtml = figuras.map(fig => `
      <figure class="theory-figure">
        <img src="${fig.src}" alt="${fig.alt}" loading="lazy">
        <figcaption>${fig.caption}</figcaption>
      </figure>
    `).join("");

    elContent.innerHTML = `
      <div class="theory-block">
        <h2>${slide.titulo}</h2>
        ${slide.paragrafos.map(p => `<p>${p}</p>`).join("")}
        ${figuras.length > 1 ? `<div class="theory-figure-grid">${figurasHtml}</div>` : figurasHtml}
      </div>
    `;
    setGate(false);
  }

  /* ---------------- Slide: Dialog Cards ---------------- */
  function renderDialogCards(slide){
    // Detecta se este é um conjunto ilustrado (cartas com imagem própria de
    // frente/verso, ex.: Forças Intermoleculares da Lição 18) para aplicar
    // um tamanho de carta maior — texto pequeno em card de 150px ficaria ilegível.
    const ilustrado = slide.cards.some(c => c.frenteImg);

    elContent.innerHTML = `
      <div class="theory-block">
        <h2>${slide.titulo}</h2>
        ${slide.instrucao ? `<p>${slide.instrucao}</p>` : ""}
      </div>
      <div class="dialog-cards ${ilustrado ? "dialog-cards--large" : ""}"></div>
    `;
    const grid = elContent.querySelector(".dialog-cards");

    slide.cards.forEach(card => {
      const temImagem = !!card.frenteImg;
      const frenteConteudo = temImagem
        ? `<img src="${card.frenteImg}" alt="${card.frenteAlt || slide.titulo}" loading="lazy">`
        : card.frente;
      const versoConteudo = temImagem
        ? `<img src="${card.versoImg}" alt="${card.versoAlt || (card.frenteAlt || slide.titulo) + ' — verso'}" loading="lazy">`
        : card.verso;

      const el = document.createElement("div");
      el.className = "dialog-card" + (ilustrado ? " dialog-card--large" : "");
      el.innerHTML = `
        <div class="dialog-card__inner">
          <div class="dialog-card__face dialog-card__face--front${temImagem ? " dialog-card__face--media" : ""}">${frenteConteudo}</div>
          <div class="dialog-card__face dialog-card__face--back${temImagem ? " dialog-card__face--media" : ""}">${versoConteudo}</div>
        </div>
      `;
      el.addEventListener("click", () => el.classList.toggle("is-flipped"));
      grid.appendChild(el);
    });

    setGate(false); // autorregulação: não bloqueia o avanço
  }

  /* ---------------- Slide: Branching Scenario (cenário ramificado) ---------------- */
  function renderBranching(slide){
    let noAtualId = slide.noInicial;
    setGate(true, "Complete o cenário para avançar.");
    renderNo();

    function renderNo(){
      const no = slide.nodes[noAtualId];
      elContent.innerHTML = `
        <div class="quiz-block">
          <span class="quiz-block__tag tag-cenario">${no.rotulo || slide.titulo}</span>
          <p class="quiz-block__enunciado">${no.situacao}</p>
          <div class="quiz-options">
            ${no.opcoes.map((op, i) => `
              <button type="button" class="quiz-option" data-index="${i}">
                <span class="quiz-option__letter">${String.fromCharCode(65 + i)}</span>
                <span>${op.texto}</span>
              </button>
            `).join("")}
          </div>
          <div class="quiz-feedback" id="branching-feedback"></div>
        </div>
      `;
      elContent.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => onEscolher(btn, no));
      });
    }

    function onEscolher(btnClicado, no){
      const idx = Number(btnClicado.dataset.index);
      const opcao = no.opcoes[idx];

      elContent.querySelectorAll(".quiz-option").forEach(btn => {
        btn.disabled = true;
        if(Number(btn.dataset.index) === idx) btn.classList.add(opcao.correta ? "is-correct" : "is-wrong");
      });

      const feedback = elContent.querySelector("#branching-feedback");
      feedback.classList.add("is-visible", opcao.correta ? "feedback-correta" : "feedback-errada");
      feedback.textContent = (opcao.correta ? "✔ " : "✘ ") + opcao.feedback;

      const acao = document.createElement("button");
      acao.type = "button";
      acao.className = "btn btn--primary mt-24";

      if(opcao.correta){
        acao.textContent = opcao.proximo ? "Continuar →" : "Concluir cenário →";
        acao.addEventListener("click", () => {
          if(opcao.proximo){ noAtualId = opcao.proximo; renderNo(); }
          else renderFinalCenario();
        });
      }else{
        // Resposta incorreta: explica o porquê e deixa tentar de novo no mesmo nó,
        // sem penalizar o avanço da lição (o cenário é prática exploratória, não avaliação).
        acao.textContent = "Tentar novamente";
        acao.addEventListener("click", renderNo);
      }
      elContent.querySelector(".quiz-block").appendChild(acao);
    }

    function renderFinalCenario(){
      elContent.innerHTML = `
        <div class="score-panel">
          <p class="avatar-dialogue__name" style="justify-content:center;">${slide.titulo}</p>
          <p style="color:var(--text-muted); max-width:48ch; margin:0 auto;">${slide.mensagemFinal}</p>
        </div>
      `;
      setGate(false, "Cenário concluído — pode avançar.");
    }
  }

  /* ---------------- Slide: quiz progressivo (Single Choice Set) ---------------- */
  function renderQuiz(slide){
    let qIndex = 0;
    const respondidas = new Array(slide.questoes.length).fill(false);
    setGate(true, "Responda as questões abaixo para avançar.");
    renderPergunta();

    function renderPergunta(){
      const q = slide.questoes[qIndex];
      elContent.innerHTML = `
        <div class="quiz-block">
          <div class="quiz-progress-dots">
            ${slide.questoes.map((_, i) => `<span class="${i < qIndex ? "is-done" : (i === qIndex ? "is-current" : "")}"></span>`).join("")}
          </div>
          <span class="quiz-block__tag dificuldade-${q.dificuldade}">${rotuloDificuldade(q.dificuldade)}</span>
          <p class="quiz-block__enunciado">${q.enunciado}</p>
          <div class="quiz-options">
            ${q.alternativas.map((alt, i) => `
              <button type="button" class="quiz-option" data-index="${i}">
                <span class="quiz-option__letter">${String.fromCharCode(65 + i)}</span>
                <span>${alt}</span>
              </button>
            `).join("")}
          </div>
          <div class="quiz-feedback" id="quiz-feedback"></div>
        </div>
      `;

      elContent.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => onResponder(btn, q));
      });
    }

    function onResponder(btnClicado, q){
      const idx = Number(btnClicado.dataset.index);
      const correta = idx === q.corretaIndex;
      const pontosPorDificuldade = { facil: 10, media: 15, dificil: 20 };

      elContent.querySelectorAll(".quiz-option").forEach(btn => {
        btn.disabled = true;
        const i = Number(btn.dataset.index);
        if(i === q.corretaIndex) btn.classList.add("is-correct");
        else if(i === idx) btn.classList.add("is-wrong");
      });

      CRState.registrarResposta(correta, pontosPorDificuldade[q.dificuldade] || 10);

      const feedback = elContent.querySelector("#quiz-feedback");
      feedback.classList.add("is-visible", correta ? "feedback-correta" : "feedback-errada");
      feedback.textContent = correta
        ? `✔ Correto! ${q.feedbackCorreta}`
        : `✘ ${q.feedbackErrada}`;

      respondidas[qIndex] = true;

      // botão "próxima pergunta" ou libera avanço do slide se for a última
      const acao = document.createElement("button");
      acao.type = "button";
      acao.className = "btn btn--primary mt-24";
      const ultima = qIndex === slide.questoes.length - 1;
      acao.textContent = ultima ? "Concluir bloco →" : "Próxima pergunta →";
      acao.addEventListener("click", () => {
        if(ultima){
          setGate(false);
          elHint.textContent = "Bloco concluído — pode avançar.";
        }else{
          qIndex++;
          renderPergunta();
        }
      });
      elContent.querySelector(".quiz-block").appendChild(acao);
    }

    function rotuloDificuldade(d){
      return { facil: "Fácil", media: "Médio", dificil: "Difícil" }[d] || d;
    }
  }

  /* ---------------- Slide: placar final ---------------- */
  function renderFinalScore(slide){
    const score = CRState.getScore();
    CRState.marcarLicaoConcluida(lessonData.id);

    elContent.innerHTML = `
      <div class="score-panel">
        <p class="avatar-dialogue__name" style="justify-content:center;">${avatar.nome} — ${avatar.papel}</p>
        <p style="color:var(--text-muted); max-width:44ch; margin:0 auto 10px;">${slide.mensagemFinal.replace("{{apelido}}", CRState.getApelido())}</p>
        <div class="score-panel__value">${score.pontos} pts</div>
        <div class="score-panel__label">Pontuação acumulada na Arena</div>
        <div class="score-panel__breakdown">
          <span class="ok">✔ ${score.acertos} acertos</span>
          <span class="fail">✘ ${score.erros} erros</span>
        </div>
      </div>
    `;
    setGate(false);
  }
}
