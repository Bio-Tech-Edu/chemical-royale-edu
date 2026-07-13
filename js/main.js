/* ============================================================
   main.js
   Lógica de interface do Sprint 1:
   - Painel de Identificação do Estudante (index.html)
   - Galeria de seleção de Avatares (avatares.html)
   Depende de state.js (CRState, CR_AVATARS) já carregado antes.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initFormularioIdentificacao();
  initGaleriaAvatares();
});

/* ---------------------------------------------------------
   PAINEL DE IDENTIFICAÇÃO DO ESTUDANTE (index.html)
--------------------------------------------------------- */
function initFormularioIdentificacao(){
  const form = document.getElementById("form-identificacao");
  if(!form) return; // esta página não é a index.html

  // Pré-preenche caso o aluno já tenha começado antes (retomar sessão)
  const saved = CRState.getStudent();
  if(saved){
    form.nome.value = saved.nome || "";
    form.email.value = saved.email || "";
    form.cidade.value = saved.cidade || "";
    form.escola.value = saved.escola || "";
    form.turma.value = saved.turma || "";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dados = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      cidade: form.cidade.value.trim(),
      escola: form.escola.value.trim(),
      turma: form.turma.value.trim()
    };

    const valido = validarFormularioIdentificacao(dados);
    if(!valido) return;

    CRState.saveStudent(dados);
    window.location.href = "avatares.html";
  });

  // Limpa o erro assim que o usuário corrige o campo
  form.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
      input.closest(".field")?.classList.remove("has-error");
    });
  });
}

function validarFormularioIdentificacao(dados){
  let ok = true;

  ok = validarCampo("nome", dados.nome.length >= 3) && ok;
  ok = validarCampo("cidade", dados.cidade.length >= 2) && ok;
  ok = validarCampo("escola", dados.escola.length >= 2) && ok;
  ok = validarCampo("turma", dados.turma.length >= 1) && ok;

  // E-mail: formato válido + domínio institucional edu.mt.gov.br
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dominioValido = dados.email.toLowerCase().endsWith("@edu.mt.gov.br");
  ok = validarCampo("email", emailRegex.test(dados.email) && dominioValido) && ok;

  return ok;
}

function validarCampo(nomeCampo, condicaoValida){
  const field = document.getElementById(`field-${nomeCampo}`);
  if(!field) return true;
  field.classList.toggle("has-error", !condicaoValida);
  return condicaoValida;
}

/* ---------------------------------------------------------
   GALERIA DE AVATARES (avatares.html)
--------------------------------------------------------- */
function initGaleriaAvatares(){
  const grid = document.getElementById("avatar-grid");
  if(!grid) return; // esta página não é a avatares.html

  // Exige que o aluno já tenha se identificado (Etapa 1)
  CRState.requireStudent("index.html");

  let selecionado = CRState.getAvatar();

  renderCartas();

  const btnConfirmar = document.getElementById("btn-confirmar-avatar");
  btnConfirmar.disabled = !selecionado;

  btnConfirmar.addEventListener("click", () => {
    if(!selecionado) return;
    CRState.saveAvatar(selecionado);
    // Próxima etapa (Sprint 2): Apresentação inicial / alinhamento pedagógico
    window.location.href = "apresentacao.html";
  });

  function renderCartas(){
    grid.innerHTML = "";
    CR_AVATARS.forEach(avatar => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "element-card" + (avatar.id === selecionado ? " is-selected" : "");
      card.setAttribute("role", "listitem");
      card.setAttribute("aria-pressed", avatar.id === selecionado ? "true" : "false");
      card.setAttribute("aria-label", `Selecionar ${avatar.nome} — ${avatar.papel}`);

      card.innerHTML = `
        <div class="element-card__top">
          <span class="element-card__cost">Nº ${avatar.numero}</span>
          <span>${avatar.simbolo}</span>
        </div>
        <div class="element-card__photo">
          <img src="${avatar.foto}" alt="${avatar.nome}"
               onerror="this.parentElement.innerHTML='<span class=\\'placeholder-icon\\'>⚛️</span>'">
        </div>
        <p class="element-card__name">${avatar.nome}</p>
        <p class="element-card__role">${avatar.papel}</p>
        <p class="element-card__ability">${avatar.especialidade}</p>
      `;

      card.addEventListener("click", () => {
        selecionado = avatar.id;
        mostrarDetalhe(avatar);
        btnConfirmar.disabled = false;
        renderCartas(); // reaplica estado "is-selected"
      });

      grid.appendChild(card);
    });
  }

  function mostrarDetalhe(avatar){
    const detalhe = document.getElementById("avatar-detail");
    document.getElementById("avatar-detail-title").textContent = `${avatar.nome} — ${avatar.papel}`;
    document.getElementById("avatar-detail-role").textContent = avatar.especialidade;
    document.getElementById("avatar-detail-text").textContent = avatar.passiva;
    detalhe.classList.add("is-visible");
  }

  // Se o aluno já tinha escolhido antes (retomando sessão), mostra o detalhe
  if(selecionado){
    const avatarSalvo = CR_AVATARS.find(a => a.id === selecionado);
    if(avatarSalvo) mostrarDetalhe(avatarSalvo);
  }
}
