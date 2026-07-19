/* ============================================================
   data/licao-17.js
   Lição 17 — O átomo e suas partículas (apostila p. 106–110)
   Estrutura: diálogo de abertura (apelido) → 4 tópicos
   (teoria intercalada com Dialog Cards e/ou blocos de quiz
   progressivo) → revisão geral (3 questões F/M/D) → placar.
   Fonte das figuras: Wikimedia Commons, conteúdo aberto sob
   licença Creative Commons (crédito na legenda de cada imagem).
   ============================================================ */

const LICAO_17 = {
  id: "licao17",
  titulo: "Lição 17 — O átomo e suas partículas",
  paginaApostila: "106 a 110",

  onFinish(){
    window.location.href = "licao-18.html";
  },

  slides: [

    // ---------- Abertura: a Líder de Arena pergunta como tratar o jogador ----------
    {
      type: "dialogo",
      askApelido: true,
      texto: "Antes de entrarmos na Arena, preciso saber uma coisa importante: como você quer ser chamado(a) por aqui? Pode ser seu nome mesmo, um apelido de guerra ou até um nome de arena — quem manda é você. Vou usar esse nome sempre que aparecer para te dar uma dica ou comemorar um acerto."
    },

    // ============================================================
    // TÓPICO 1 — Evolução dos modelos atômicos
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 1 · Evolução dos modelos atômicos",
      paragrafos: [
        "Ao longo de mais de um século, o átomo foi \"desenhado\" de formas diferentes conforme novos experimentos revelavam detalhes da matéria. Cada modelo não é um erro descartado, mas um degrau que resolveu um problema do modelo anterior — e criou uma nova pergunta.",
        "<span class='key-term'>Dalton (1803)</span> imaginou o átomo como uma esfera maciça e indivisível, como uma \"bolinha de bilhar\". <span class='key-term'>Thomson (1897)</span>, ao descobrir o elétron, propôs o modelo \"pudim de passas\": uma massa positiva com elétrons negativos espalhados dentro dela.",
        "<span class='key-term'>Rutherford (1911)</span>, bombardeando uma fina folha de ouro com partículas alfa, percebeu que a maior parte do átomo é espaço vazio, com um núcleo pequeno, denso e positivo. <span class='key-term'>Bohr (1913)</span> completou o modelo dizendo que os elétrons giram em órbitas (níveis) com energia definida ao redor desse núcleo."
      ],
      figura: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bohr-atom-PAR.svg" width="200",
        alt: "Diagrama do modelo atômico de Bohr, com elétrons em órbitas ao redor do núcleo",
        caption: "Modelo atômico de Bohr — imagem: Wikimedia Commons, licença Creative Commons (CC BY-SA)."
      }
    },
    {
      type: "dialog-cards",
      titulo: "Recapitulando: um cartão para cada modelo",
      instrucao: "Toque em cada carta para revirar e conferir a ideia central de cada cientista.",
      cards: [
        { frente: "assets/moleculas/card-mod-dalton.png", verso: "Átomo = esfera maciça, indivisível e indestrutível. Ainda não se conhecia próton, nêutron ou elétron." },
        { frente: "assets/moleculas/card-mod-thomson.png", verso: "Modelo \"pudim de passas\": massa positiva com elétrons (negativos) distribuídos dentro dela. Primeira partícula subatômica identificada." },
        { frente: "assets/moleculas/card-mod-rutherford.png", verso: "Núcleo pequeno, denso e positivo; eletrosfera é, em sua maior parte, espaço vazio. Descoberto pelo experimento da folha de ouro." },
        { frente: "assets/moleculas/card-mod-bohr.png", verso: "Elétrons giram em órbitas (níveis de energia) definidas ao redor do núcleo, sem perder energia enquanto permanecem nelas." },
        { frente: "assets/moleculas/card-mod-atual.png", verso: "Modelo quântico (orbital): a posição do elétron é descrita por uma região de probabilidade — a \"nuvem eletrônica\" — e não por uma órbita fixa." }
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Modelos atômicos",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "O modelo atômico conhecido popularmente como \"pudim de passas\", no qual elétrons de carga negativa estariam espalhados em uma massa de carga positiva, foi proposto por:",
          alternativas: [
            "John Dalton",
            "J. J. Thomson",
            "Ernest Rutherford",
            "Niels Bohr",
            "Werner Heisenberg"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Thomson chegou a esse modelo logo após identificar o elétron, em 1897.",
          feedbackErrada: "O modelo \"pudim de passas\" é de Thomson (1897), formulado após a descoberta do elétron."
        },
        {
          dificuldade: "media",
          enunciado: "O experimento da folha de ouro, no qual a maioria das partículas alfa atravessava a lâmina metálica e poucas sofriam grandes desvios, levou Rutherford a concluir que o átomo é formado, principalmente, por:",
          alternativas: [
            "Um núcleo grande e de carga negativa",
            "Elétrons compactados sem espaço vazio",
            "Espaço vazio, com um núcleo pequeno e denso de carga positiva",
            "Nêutrons distribuídos uniformemente por todo o volume",
            "Uma esfera maciça e indivisível"
          ],
          corretaIndex: 2,
          feedbackCorreta: "Poucas partículas alfa se desviavam justamente porque o núcleo, apesar de concentrar a carga positiva, ocupa uma fração ínfima do volume atômico.",
          feedbackErrada: "A observação central de Rutherford foi que o átomo é majoritariamente espaço vazio, com um núcleo pequeno, denso e positivo."
        },
        {
          dificuldade: "dificil",
          enunciado: "Uma limitação do modelo de Bohr, superada pelo modelo quântico atual, é que Bohr descrevia o elétron:",
          alternativas: [
            "Como uma partícula sem carga elétrica definida",
            "Em órbitas circulares fixas, quando hoje ele é descrito por regiões de probabilidade (orbitais)",
            "Como parte do núcleo atômico",
            "Sem relação com níveis de energia",
            "Como idêntico ao próton em massa"
          ],
          corretaIndex: 1,
          feedbackCorreta: "O princípio da incerteza de Heisenberg tornou insustentável falar em \"órbita\" exata; por isso hoje usamos orbitais (regiões de maior probabilidade de encontrar o elétron).",
          feedbackErrada: "A limitação principal do modelo de Bohr é tratar o elétron como se estivesse em uma órbita definida, algo incompatível com o princípio da incerteza — daí o modelo quântico atual falar em orbitais."
        }
      ]
    },

    // ============================================================
    // TÓPICO 2 — Partículas fundamentais
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 2 · Partículas fundamentais",
      paragrafos: [
        "O átomo é formado por três partículas fundamentais: <span class='key-term'>prótons</span> (carga positiva, no núcleo), <span class='key-term'>nêutrons</span> (sem carga, no núcleo) e <span class='key-term'>elétrons</span> (carga negativa, na eletrosfera).",
        "O <span class='key-term'>número atômico (Z)</span> é a quantidade de prótons — ele identifica o elemento químico. Em um átomo neutro, o número de elétrons é igual ao de prótons.",
        "O <span class='key-term'>número de massa (A)</span> é a soma de prótons e nêutrons: <strong>A = Z + n</strong>. É ele quem determina, aproximadamente, a massa do átomo — os elétrons têm massa desprezível perto de prótons e nêutrons."
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Partículas fundamentais",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "Um átomo neutro possui 17 prótons. Quantos elétrons esse átomo possui?",
          alternativas: ["8", "15", "17", "20", "35"],
          corretaIndex: 2,
          feedbackCorreta: "Em um átomo neutro, o número de elétrons é sempre igual ao número de prótons (Z).",
          feedbackErrada: "Em um átomo neutro, nº de elétrons = nº de prótons = Z. Como Z = 17, há 17 elétrons."
        },
        {
          dificuldade: "media",
          enunciado: "Um átomo apresenta número atômico Z = 20 e número de massa A = 40. O número de nêutrons desse átomo é:",
          alternativas: ["10", "20", "40", "60", "80"],
          corretaIndex: 1,
          feedbackCorreta: "Como A = Z + n, temos n = A − Z = 40 − 20 = 20 nêutrons.",
          feedbackErrada: "Use A = Z + n, ou seja, n = A − Z = 40 − 20 = 20 nêutrons."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) Um íon X²⁺ possui 18 elétrons e número de massa 40. O número de prótons e de nêutrons desse átomo, respectivamente, são:",
          alternativas: [
            "18 prótons e 22 nêutrons",
            "20 prótons e 20 nêutrons",
            "18 prótons e 18 nêutrons",
            "20 prótons e 22 nêutrons",
            "16 prótons e 24 nêutrons"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Como o íon perdeu 2 elétrons para ficar 2+, o átomo neutro tinha 18 + 2 = 20 elétrons = 20 prótons. Nêutrons = A − Z = 40 − 20 = 20.",
          feedbackErrada: "Um íon X²⁺ perdeu 2 elétrons: o átomo neutro tinha 20 prótons (=20 elétrons). Nêutrons = A − Z = 40 − 20 = 20."
        }
      ]
    },

    // ============================================================
    // TÓPICO 3 — Semelhanças atômicas
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 3 · Semelhanças atômicas",
      paragrafos: [
        "Átomos de elementos diferentes (ou do mesmo elemento) podem compartilhar uma das grandezas Z, A ou n — essas relações são chamadas de semelhanças atômicas.",
        "<span class='key-term'>Isótopos</span>: mesmo número atômico (Z), massas diferentes. É o caso do carbono-12 e do carbono-14, ambos com 6 prótons.",
        "<span class='key-term'>Isóbaros</span>: mesmo número de massa (A), Z diferentes — por exemplo, o cálcio-40 e o argônio-40.",
        "<span class='key-term'>Isótonos</span>: mesmo número de nêutrons (n), com Z e A diferentes entre si."
      ]
    },
    {
      type: "dialog-cards",
      titulo: "Exemplos de semelhanças atômicas",
      instrucao: "Vire cada carta e marque se você acertou o \"tipo\" antes de olhar a resposta.",
      cards: [
        { frente: "¹²C e ¹⁴C", verso: "São ISÓTOPOS: os dois têm Z = 6 (6 prótons), mas massas diferentes (12 e 14)." },
        { frente: "⁴⁰Ca e ⁴⁰Ar", verso: "São ISÓBAROS: os dois têm A = 40, mas números atômicos diferentes (Ca: Z=20, Ar: Z=18)." },
        { frente: "¹H e ²H (deutério)", verso: "São ISÓTOPOS do hidrogênio: mesmo Z = 1, massas 1 e 2." },
        { frente: "¹⁴C e ¹⁴N", verso: "São ISÓBAROS: A = 14 nos dois, mas Z diferente (C: Z=6, N: Z=7)." }
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Isótopos e isóbaros",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "Átomos que possuem o mesmo número atômico (Z), mas números de massa diferentes, são chamados de:",
          alternativas: ["Isóbaros", "Isótonos", "Isótopos", "Isômeros", "Isoeletrônicos"],
          corretaIndex: 2,
          feedbackCorreta: "Isótopos compartilham o número de prótons (Z) — é o que define o elemento químico.",
          feedbackErrada: "O termo correto é isótopos: mesmo Z, massas (A) diferentes."
        },
        {
          dificuldade: "media",
          enunciado: "Dois átomos, X e Y, possuem o mesmo número de massa (A = 40), mas números atômicos diferentes (Z_X = 19 e Z_Y = 20). X e Y são classificados como:",
          alternativas: ["Isótopos", "Isótonos", "Isóbaros", "Alótropos", "Isoeletrônicos"],
          corretaIndex: 2,
          feedbackCorreta: "Mesmo número de massa (A) com Z diferentes é a definição de isóbaros.",
          feedbackErrada: "Quando A é igual mas Z é diferente, os átomos são isóbaros."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) Considere dois átomos: um com Z = 20 e A = 39, outro com Z = 19 e A = 40. Sobre o número de nêutrons desses átomos, é correto afirmar que:",
          alternativas: [
            "Ambos têm 19 nêutrons, sendo, portanto, isótonos",
            "O primeiro tem 19 e o segundo tem 21 nêutrons; não são isótonos",
            "Ambos têm 20 nêutrons, sendo isóbaros",
            "O primeiro tem 21 e o segundo tem 19 nêutrons; são isótopos",
            "É impossível calcular o número de nêutrons com os dados fornecidos"
          ],
          corretaIndex: 1,
          feedbackCorreta: "n = A − Z para cada átomo: n₁ = 39 − 20 = 19; n₂ = 40 − 19 = 21. Como os valores são diferentes, eles não são isótonos.",
          feedbackErrada: "Calcule n = A − Z para cada átomo separadamente: n₁ = 39 − 20 = 19; n₂ = 40 − 19 = 21. Valores diferentes ⇒ não são isótonos."
        }
      ]
    },

    // ============================================================
    // TÓPICO 4 — Configuração eletrônica
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 4 · Configuração eletrônica",
      paragrafos: [
        "A configuração eletrônica mostra como os elétrons se distribuem pelos subníveis de energia (s, p, d, f) ao redor do núcleo, seguindo o <span class='key-term'>Diagrama de Linus Pauling</span>: os elétrons ocupam primeiro os subníveis de menor energia.",
        "Ordem crescente de energia dos subníveis mais usados no Ensino Médio: <span class='key-term'>1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁶</span>.",
        "Exemplo: o cloro (Z = 17) tem a distribuição <strong>1s² 2s² 2p⁶ 3s² 3p⁵</strong> — some os expoentes e confira: 2+2+6+2+5 = 17 elétrons."
      ],
      figuras: [
        {
          src: "assets/cards/card-1_licao_17.png",
          alt: "Card ilustrativo: Diagrama de Linus Pauling, com setas diagonais indicando a ordem de preenchimento dos elétrons",
          caption: "Card 1 · O Diagrama de Linus Pauling — siga as setas diagonais para organizar os níveis de energia em ordem crescente."
        },
        {
          src: "assets/cards/card-2_licao_17.png",
          alt: "Card ilustrativo: Configuração eletrônica do Carbono (Z=6) preenchida passo a passo nos subníveis 1s, 2s e 2p",
          caption: "Card 2 · Configuração eletrônica na prática — exemplo passo a passo com o Carbono (Z=6): 1s² 2s² 2p²."
        }
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Configuração eletrônica",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "A distribuição eletrônica segue a ordem crescente de energia dos subníveis, conhecida como Diagrama de:",
          alternativas: ["Rutherford", "Linus Pauling", "Avogadro", "Mendeleev", "Lavoisier"],
          corretaIndex: 1,
          feedbackCorreta: "O Diagrama de Linus Pauling organiza os subníveis (s, p, d, f) em ordem crescente de energia.",
          feedbackErrada: "O nome correto é Diagrama de Linus Pauling."
        },
        {
          dificuldade: "media",
          enunciado: "A distribuição eletrônica correta para o átomo de sódio (Z = 11) é:",
          alternativas: [
            "1s² 2s² 2p⁶ 3s¹",
            "1s² 2s² 2p⁷",
            "1s² 2s² 2p⁶ 3s² 3p¹",
            "1s² 2s² 2p⁵ 3s²",
            "1s² 2s² 2p⁶"
          ],
          corretaIndex: 0,
          feedbackCorreta: "Somando os expoentes: 2+2+6+1 = 11 elétrons, seguindo corretamente a ordem do diagrama de Pauling.",
          feedbackErrada: "A distribuição correta é 1s² 2s² 2p⁶ 3s¹ (2+2+6+1 = 11 elétrons)."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) O íon Fe³⁺ é obtido a partir do átomo de ferro (Z = 26) pela perda de 3 elétrons, retirados preferencialmente do subnível mais externo e de maior energia disponível no momento da ionização. O subnível de onde saem esses elétrons no ferro é o:",
          alternativas: ["1s", "3d", "4s", "3p", "4p"],
          corretaIndex: 2,
          feedbackCorreta: "Apesar de o 4s ser preenchido antes do 3d na ordem de energia crescente (Pauling), na hora de perder elétrons o átomo remove primeiro os do subnível mais externo (maior camada, n=4), que é o 4s.",
          feedbackErrada: "Na ionização, os elétrons são removidos primeiro da camada mais externa (n=4, subnível 4s), mesmo que o 3d tenha sido preenchido depois na ordem de energia."
        }
      ]
    },

    // ============================================================
    // REVISÃO GERAL DA LIÇÃO
    // ============================================================
    {
      type: "dialogo",
      askApelido: false,
      texto: "Muito bem, {{apelido}}! Você já passou pelos 4 pilares da Lição 17. Antes de seguirmos para a Lição 18, vamos a uma revisão geral — um bloco final com 3 questões (fácil, médio e difícil) misturando tudo o que vimos."
    },
    {
      type: "quiz",
      titulo: "Revisão Geral · Lição 17",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "As partículas subatômicas de carga positiva, negativa e neutra são, respectivamente:",
          alternativas: [
            "Nêutron, próton, elétron",
            "Próton, elétron, nêutron",
            "Elétron, nêutron, próton",
            "Próton, nêutron, elétron",
            "Nêutron, elétron, próton"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Próton (+), elétron (−) e nêutron (sem carga) — a base de toda a Lição 17.",
          feedbackErrada: "A ordem correta é: próton (positivo), elétron (negativo), nêutron (neutro)."
        },
        {
          dificuldade: "media",
          enunciado: "Um átomo X é isótopo de um átomo Y (Z = 11, A = 23) e possui 13 nêutrons. O número de massa do átomo X é:",
          alternativas: ["11", "22", "23", "24", "13"],
          corretaIndex: 3,
          feedbackCorreta: "Isótopos têm o mesmo Z. Logo, Z_X = 11. A = Z + n = 11 + 13 = 24.",
          feedbackErrada: "Como X é isótopo de Y, Z_X também é 11. A = Z + n = 11 + 13 = 24."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) Um elemento químico Q apresenta configuração eletrônica terminada em 4s² 3d⁵. O número atômico desse elemento é:",
          alternativas: ["20", "23", "25", "30", "35"],
          corretaIndex: 2,
          feedbackCorreta: "Somando toda a distribuição até 3d⁵ (1s²2s²2p⁶3s²3p⁶4s²3d⁵): 2+2+6+2+6+2+5 = 25 elétrons, logo Z = 25 (manganês).",
          feedbackErrada: "Some todos os expoentes da distribuição completa até 3d⁵: 2+2+6+2+6+2+5 = 25."
        }
      ]
    },

    // ---------- Encerramento ----------
    {
      type: "final-score",
      mensagemFinal: "A Lição 17 está completa, {{apelido}}. Sua Líder de Arena registrou seu desempenho — esses pontos seguem valendo para o placar global do Chemical Royale. Hora de avançar para a próxima batalha: a Tabela Periódica e as Ligações Químicas."
    }
  ]
};
