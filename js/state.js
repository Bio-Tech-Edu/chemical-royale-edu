/* ============================================================
   state.js
   Módulo central de estado do jogador — "Chemical Royale".
   Usa localStorage porque o projeto é 100% estático (GitHub
   Pages, sem backend), então cada página lê/grava o mesmo
   "save file" do jogador conforme ele avança nas etapas.
   Sprint 1: Identificação + Avatar.
   Sprint 2: acrescenta a Narrativa escolhida.
   Sprint 4: acrescenta PEQ (Pontos de Energia Química), a moeda
   interna do jogo, e o suporte a habilidades passivas dos avatares.
   ============================================================ */

const CR_STORAGE_KEY = "chemicalRoyale.playerState.v1";

/**
 * Formato do estado salvo:
 * {
 *   student: { nome, email, cidade, escola, turma },
 *   apelido: "como o jogador quer ser chamado(a) na arena",
 *   avatarId: "marie-curie" | "rosalind-franklin" | ...,
 *   narrativeId: "jornada-heroi" | "in-media-res" | "investigativo",
 *   score: { pontos, acertos, erros },
 *   peq: number,  // Pontos de Energia Química — moeda interna (Sprint 4)
 *   licoesConcluidas: { licao17: bool, licao18: bool, licao19: bool },
 *   updatedAt: ISOString
 * }
 */

const CRState = {

  _read(){
    try{
      const raw = localStorage.getItem(CR_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    }catch(err){
      console.error("[CRState] Falha ao ler o estado salvo:", err);
      return {};
    }
  },

  _write(partial){
    const current = this._read();
    const next = { ...current, ...partial, updatedAt: new Date().toISOString() };
    try{
      localStorage.setItem(CR_STORAGE_KEY, JSON.stringify(next));
    }catch(err){
      console.error("[CRState] Falha ao salvar o estado:", err);
    }
    return next;
  },

  getAll(){ return this._read(); },

  // ---------- Painel de Identificação do Estudante ----------
  saveStudent(student){
    return this._write({ student });
  },
  getStudent(){
    return this._read().student || null;
  },

  // ---------- Avatar (Líder de Arena) ----------
  saveAvatar(avatarId){
    return this._write({ avatarId });
  },
  getAvatar(){
    return this._read().avatarId || null;
  },

  // ---------- Vertente Narrativa (Sprint 2) ----------
  saveNarrative(narrativeId){
    return this._write({ narrativeId });
  },
  getNarrative(){
    return this._read().narrativeId || null;
  },

  // ---------- Apelido / como o jogador quer ser chamado (Sprint 3) ----------
  saveApelido(apelido){
    return this._write({ apelido });
  },
  getApelido(){
    const s = this._read();
    return s.apelido || (s.student && s.student.nome ? s.student.nome.split(" ")[0] : "Cientista");
  },

  // ---------- Placar global (Sprint 3+) ----------
  getScore(){
    return this._read().score || { pontos: 0, acertos: 0, erros: 0 };
  },
  /**
   * Registra a resposta de UMA questão (Dialog Cards / Single Choice Set / Question Set).
   * @param {boolean} correta
   * @param {number} pontosBase - pontos concedidos se a resposta estiver correta (varia por dificuldade)
   * @param {string|null} [dificuldade] - "facil" | "media" | "dificil" — usado para calcular o ganho de PEQ
   * @param {boolean} [contarComoErro=true] - false quando uma habilidade passiva (ex.: escudo da
   *        Stephanie Kwolek) absorve o erro; nesse caso o erro não entra na estatística do placar.
   */
  registrarResposta(correta, pontosBase = 10, dificuldade = null, contarComoErro = true){
    const score = this.getScore();
    if(correta){
      score.pontos += pontosBase;
      score.acertos += 1;

      // PEQ (Pontos de Energia Química) — moeda interna do jogo (Sprint 4).
      // Ganho proporcional à dificuldade: fácil = 1, média = 2, difícil = 3.
      const peqPorDificuldade = { facil: 1, media: 2, dificil: 3 };
      if(dificuldade && peqPorDificuldade[dificuldade]){
        this.atualizarPEQ(peqPorDificuldade[dificuldade]);
      }
    }else if(contarComoErro){
      score.erros += 1;
    }
    return this._write({ score });
  },

  // ---------- PEQ — Pontos de Energia Química (Sprint 4) ----------
  getPEQ(){
    return this._read().peq || 0;
  },
  /**
   * Soma (ou subtrai, se negativo) PEQ ao saldo do jogador. O saldo nunca fica negativo.
   * @param {number} quantidade
   */
  atualizarPEQ(quantidade){
    const novo = Math.max(0, this.getPEQ() + quantidade);
    this._write({ peq: novo });
    return novo;
  },

  // ---------- Progresso das lições ----------
  marcarLicaoConcluida(licaoId){
    const atual = this._read().licoesConcluidas || {};
    atual[licaoId] = true;
    return this._write({ licoesConcluidas: atual });
  },
  getLicoesConcluidas(){
    return this._read().licoesConcluidas || {};
  },

  // ---------- Guarda de rota: redireciona se etapa anterior faltar ----------
  requireStudent(redirectTo = "index.html"){
    if(!this.getStudent()){ window.location.href = redirectTo; }
  },
  requireAvatar(redirectTo = "avatares.html"){
    if(!this.getAvatar()){ window.location.href = redirectTo; }
  },

  reset(){
    localStorage.removeItem(CR_STORAGE_KEY);
  }
};

// Catálogo das 5 Líderes de Arena — fonte única de verdade,
// usado pela galeria (avatares.html) e por qualquer outra tela
// que precise exibir nome/habilidade (ex.: HUD do jogo no Sprint 4).
const CR_AVATARS = [
  {
    id: "marie-curie",
    nome: "Marie Curie",
    simbolo: "Mc",
    numero: "01",
    papel: "O Poder do Núcleo",
    especialidade: "Ataque de Alta Energia (Decaimento Alfa)",
    passiva: "Seus feitiços geram faíscas radioativas que causam dano contínuo aos reatores inimigos.",
    foto: "assets/avatares/marie-curie.png"
  },
  {
    id: "rosalind-franklin",
    nome: "Rosalind Franklin",
    simbolo: "Rf",
    numero: "02",
    papel: "A Visão de Raio-X",
    especialidade: "Estratégia de Contragolpe (Análise de Dupla Hélice)",
    passiva: "Suas tropas ganham bônus de precisão e encontram pontos fracos na defesa adversária.",
    foto: "assets/avatares/rosalind-franklin.png"
  },
  {
    id: "dorothy-hodgkin",
    nome: "Dorothy Hodgkin",
    simbolo: "Dh",
    numero: "03",
    papel: "A Arquiteta Molecular",
    especialidade: "Regeneração de Emergência (Cristalização de Insulina)",
    passiva: "A cada 30 segundos, reconstrói parte da vida do seu Reator Principal usando síntese tridimensional.",
    foto: "assets/avatares/dorothy-hodgkin.png"
  },
  {
    id: "stephanie-kwolek",
    nome: "Stephanie Kwolek",
    simbolo: "Sk",
    numero: "04",
    papel: "A Fibra Impenetrável",
    especialidade: "Defesa Absoluta (Blindagem de Kevlar)",
    passiva: "Suas unidades terrestres recebem 20% menos dano de impactos diretos.",
    foto: "assets/avatares/stephanie-kwolek.png"
  },
  {
    id: "ada-yonath",
    nome: "Ada Yonath",
    simbolo: "Ay",
    numero: "05",
    papel: "A Fábrica de Proteínas",
    especialidade: "Multiplicação Rápida (Código Ribossômico)",
    passiva: "Reduz o custo de reagentes (elixir) para cartas de invocação de criaturas/microrganismos.",
    foto: "assets/avatares/ada-yonath.png"
  }
];

// Catálogo das 3 vertentes narrativas (Sprint 2 — Branching Scenario)
const CR_NARRATIVES = [
  {
    id: "jornada-heroi",
    titulo: "A Jornada do Herói",
    foco: "Épico e inspiracional",
    icone: "⚡",
    imagem: "assets/cards/card_a_jornada_do_heroi.png",
    resumo: "A Entropia está desfazendo as ligações químicas do universo. Você é convocado à Arena dos Elementos para restaurar o equilíbrio, guiado por uma titã da química."
  },
  {
    id: "in-media-res",
    titulo: "In Media Res",
    foco: "Ação imediata, alta pressão",
    icone: "🚨",
    imagem: "assets/cards/card_in_media_res.png",
    resumo: "Alerta vermelho: reação em cadeia descontrolada no Reator Central. Sem tempo para tutoriais — a Diretora de Pesquisa precisa assumir o controle agora."
  },
  {
    id: "investigativo",
    titulo: "Storytelling Investigativo",
    foco: "Mistério e descoberta",
    icone: "🕵",
    imagem: "assets/cards/card_investigacao.png",
    resumo: "Um artefato criogênico revela a Arena Molecular, um simulador com segredos criptografados em batalhas de cartas — decifráveis por quem sintonizar a mente certa."
  }
];
