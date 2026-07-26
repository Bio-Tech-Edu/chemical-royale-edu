/* ============================================================
   data/eventos-surpresa.js
   Sprint 5 — Tarefa 1: Gerador de Eventos Surpresa ("É fato ou fake?")

   Banco de eventos curtos que interrompem a lição, de forma
   orgânica, para testar a capacidade do aluno de distinguir uma
   afirmação científica real de um mito/desinformação comum sobre
   Química — alinhado ao combate à desinformação e ao negacionismo
   científico (ver .github/plano_desenvolvimento_chemical_royale_v3.md,
   Sprint 5, Tarefa 1).

   Cada evento tem:
   - id: identificador único, usado para não repetir o mesmo evento
     na mesma jornada do jogador (persistido via CRState).
   - impacto: texto de impacto da Líder de Arena, uma versão por
     vertente narrativa (jornada-heroi / in-media-res / investigativo),
     com o placeholder {{apelido}} para personalização dinâmica.
   - afirmacao: a frase que o jogador precisa classificar.
   - correta: "fato" | "fake".
   - explicacao: nota científica breve mostrada após a resposta,
     sempre com a informação correta (o objetivo é aprender mesmo
     ao errar).
   - tempoLimiteSegundos: contagem regressiva do desafio rápido.
   - recompensaPEQ: PEQ concedido se o jogador acertar dentro do tempo.
   ============================================================ */

const EVENTOS_SURPRESA = [
  {
    id: "efk-01-isotopos-gosto",
    impacto: {
      "jornada-heroi": "{{apelido}}, A Entropia sussurra uma distorção no ar — um mito tentando se passar por verdade científica! Prove que seu conhecimento resiste ao caos:",
      "in-media-res": "Alerta, {{apelido}}! Um sensor do Reator captou uma afirmação suspeita circulando pela rede. Classifique antes que ela se espalhe:",
      "investigativo": "{{apelido}}, o artefato criptografou uma pista disfarçada de fato científico. Sua missão: decifrar se é real ou uma armadilha."
    },
    afirmacao: "É possível sentir a diferença de sabor entre isótopos do mesmo elemento, como o hidrogênio comum e o deutério, só de beber a água.",
    correta: "fake",
    explicacao: "Isótopos têm o mesmo número de prótons e propriedades químicas praticamente idênticas — a diferença de nêutrons altera a massa, não o comportamento químico percebido pelos sentidos. A \"água pesada\" (com deutério) é levemente mais densa, mas não é distinguível ao paladar sem instrumentos de laboratório.",
    tempoLimiteSegundos: 12,
    recompensaPEQ: 5
  },
  {
    id: "efk-02-tabela-alfabetica",
    impacto: {
      "jornada-heroi": "{{apelido}}, a Tábua Periódica da Arena está sob ataque de uma teoria falsa sobre sua própria organização. Defenda a ordem verdadeira:",
      "in-media-res": "{{apelido}}, o painel de controle mostra um boato se espalhando entre os cadetes. Confirme ou desminta agora:",
      "investigativo": "Uma anotação misteriosa no artefato afirma algo sobre a organização da tabela periódica, {{apelido}}. Investigue se é verdade:"
    },
    afirmacao: "Os elementos químicos são organizados na tabela periódica em ordem alfabética pelo nome.",
    correta: "fake",
    explicacao: "A tabela periódica organiza os elementos em ordem crescente de número atômico (quantidade de prótons), não por ordem alfabética — por isso o Hidrogênio (Z=1) vem antes do Hélio (Z=2), mesmo \"H\" vindo depois de \"He\" no alfabeto.",
    tempoLimiteSegundos: 10,
    recompensaPEQ: 5
  },
  {
    id: "efk-03-ouro-densidade",
    impacto: {
      "jornada-heroi": "{{apelido}}, um rumor dourado percorre a Arena — será que resiste à prova da ciência?",
      "in-media-res": "{{apelido}}, checagem rápida antes que o rumor vire pânico no laboratório:",
      "investigativo": "O artefato guarda uma afirmação brilhante sobre metais, {{apelido}}. Ela é ouro de verdade ou só brilha?"
    },
    afirmacao: "O ouro é o elemento químico mais denso de toda a tabela periódica.",
    correta: "fake",
    explicacao: "O ouro é muito denso (cerca de 19,3 g/cm³), mas não é o campeão: o ósmio e o irídio são ainda mais densos (cerca de 22,6 g/cm³), sendo considerados os elementos naturais mais densos conhecidos.",
    tempoLimiteSegundos: 10,
    recompensaPEQ: 5
  },
  {
    id: "efk-04-acidos-cotidiano",
    impacto: {
      "jornada-heroi": "{{apelido}}, A Entropia quer te convencer de que todo ácido é um inimigo mortal. Não caia nessa armadilha:",
      "in-media-res": "{{apelido}}, um aluno perguntou se pode comer laranja com medo do \"ácido\". Responda com ciência, rápido:",
      "investigativo": "Uma pista fala de \"ácidos perigosos escondidos na fruteira\", {{apelido}}. Será verdade?"
    },
    afirmacao: "Todo ácido é necessariamente perigoso e corrosivo, mesmo os presentes em alimentos do dia a dia como limão e laranja.",
    correta: "fake",
    explicacao: "A periculosidade de um ácido depende da concentração e da força (grau de ionização), não só da classificação \"ácido\". O ácido cítrico do limão e o ácido ascórbico (vitamina C) são ácidos fracos e seguros para consumo nas quantidades normais, bem diferentes de um ácido forte e concentrado como o ácido sulfúrico de uma bateria.",
    tempoLimiteSegundos: 12,
    recompensaPEQ: 5
  },
  {
    id: "efk-05-alcalinizar-sangue",
    impacto: {
      "jornada-heroi": "{{apelido}}, circula pela Arena a promessa de um \"elixir alcalino milagroso\". A ciência precisa da sua defesa agora:",
      "in-media-res": "{{apelido}}, essa mensagem está viralizando entre os cadetes. Antes que se espalhe, avalie:",
      "investigativo": "O artefato revela uma crença popular sobre saúde e química, {{apelido}}. Hora de investigar os fatos:"
    },
    afirmacao: "Beber água com limão em jejum consegue \"alcalinizar o sangue\" e isso teria efeito relevante para a saúde.",
    correta: "fake",
    explicacao: "O pH do sangue humano é mantido dentro de uma faixa estreita (cerca de 7,35 a 7,45) por sistemas tampão do próprio corpo (como o do bicarbonato) e pela respiração/rins, independentemente da alimentação. Nenhum alimento ou bebida \"alcaliniza\" o sangue de forma significativa — essa é uma ideia popular sem respaldo na fisiologia humana.",
    tempoLimiteSegundos: 12,
    recompensaPEQ: 5
  },
  {
    id: "efk-06-diamante-grafite",
    impacto: {
      "jornada-heroi": "{{apelido}}, dois materiais opostos escondem o mesmo segredo elementar. Você consegue revelar a verdade?",
      "in-media-res": "{{apelido}}, comparação rápida no scanner do Reator — confirme o dado antes de prosseguirmos:",
      "investigativo": "O artefato compara duas pedras muito diferentes, {{apelido}}. Será que elas têm mais em comum do que parece?"
    },
    afirmacao: "Diamante e grafite (usado em minas de lápis) são formados pelo mesmo elemento químico, o carbono, apenas organizado de formas diferentes.",
    correta: "fato",
    explicacao: "Diamante e grafite são alótropos do carbono: têm exatamente os mesmos átomos, mas arranjados em estruturas cristalinas diferentes — o diamante em uma rede tetraédrica muito rígida, e o grafite em camadas planas que deslizam facilmente entre si. É por isso que um é extremamente duro e o outro é macio e usado como lubrificante e em grafite de lápis.",
    tempoLimiteSegundos: 10,
    recompensaPEQ: 5
  }
];
