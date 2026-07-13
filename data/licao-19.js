/* ============================================================
   data/licao-19.js
   Lição 19 — Funções inorgânicas (apostila p. 117–122)
   Estrutura: diálogo de transição → 3 tópicos (Ácidos/Bases,
   Sais/Óxidos, Solubilidade) → revisão geral → Duelo Final
   (fight-boss contra A Entropia, mesclando as Lições 17, 18 e 19)
   → placar.
   Fonte: docs/esboco-conteudo-licao-19.md (esboço aprovado).
   ============================================================ */

const LICAO_19 = {
  id: "licao19",
  titulo: "Lição 19 — Funções inorgânicas",
  paginaApostila: "117 a 122",

  onFinish(){
    // Encerra o arco 17-19; próximo destino natural é o painel de
    // pontuação final consolidado (Sprint 5). Por ora, volta à narrativa
    // como "hub" central do jogo.
    window.location.href = "narrativa.html";
  },

  slides: [

    // ---------- Abertura: transição vinda da Lição 18 ----------
    {
      type: "dialogo",
      askApelido: false,
      texto: "Chegamos à última fase antes do grande simulado, {{apelido}}. Toda substância tem uma \"função\" — um jeito de se comportar quimicamente. Hoje você vai aprender a reconhecer ácidos, bases, sais e óxidos só de olhar a fórmula. É munição essencial pra qualquer batalha da Arena."
    },

    // ============================================================
    // TÓPICO 1 — Ácidos e Bases
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 1 · Ácidos e Bases",
      paragrafos: [
        "Uma <span class='key-term'>função inorgânica</span> é um grupo de substâncias com propriedades químicas semelhantes, geralmente por compartilharem um comportamento-padrão em solução aquosa.",
        "<span class='key-term'>Ácidos</span> (teoria de Arrhenius): substâncias que, dissolvidas em água, ionizam liberando <span class='key-term'>H⁺</span> (H₃O⁺) como único cátion. Ex.: HCl → H⁺ + Cl⁻. Classificação: hidrácidos (sem oxigênio, ex.: HCl) e oxiácidos (com oxigênio, ex.: H₂SO₄). Nomenclatura: \"ácido ...ídrico\" (hidrácidos) ou \"ácido ...ico\"/\"...oso\" (oxiácidos).",
        "<span class='key-term'>Bases</span> (Arrhenius): substâncias que, dissolvidas em água, dissociam liberando <span class='key-term'>OH⁻</span> como único ânion. Ex.: NaOH → Na⁺ + OH⁻. Nomenclatura: \"hidróxido de\" + nome do cátion."
      ]
    },
    {
      type: "dialog-cards",
      titulo: "Ácidos comuns no dia a dia",
      instrucao: "Toque em cada carta para conferir onde esse ácido aparece fora do laboratório.",
      cards: [
        { frente: "🧪 HCl", verso: "Ácido clorídrico — presente no suco gástrico, auxilia a digestão." },
        { frente: "🔋 H₂SO₄", verso: "Ácido sulfúrico — usado em baterias automotivas; altamente corrosivo." },
        { frente: "🍋 C₆H₈O₆", verso: "Ácido ascórbico (vitamina C) — presente em frutas cítricas." },
        { frente: "🥗 CH₃COOH", verso: "Ácido acético — o principal componente do vinagre." },
        { frente: "🥤 H₃PO₄", verso: "Ácido fosfórico — usado como acidulante em refrigerantes tipo cola." }
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Ácidos e Bases",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "Segundo a teoria de Arrhenius, os ácidos são substâncias que, dissolvidas em água, liberam como único cátion o íon:",
          alternativas: ["Na⁺", "OH⁻", "H⁺ (ou H₃O⁺)", "Cl⁻", "O²⁻"],
          corretaIndex: 2,
          feedbackCorreta: "A definição de Arrhenius para ácido é justamente a liberação de H⁺ (H₃O⁺) em solução aquosa.",
          feedbackErrada: "Pela teoria de Arrhenius, ácidos liberam H⁺ (H₃O⁺) como único cátion em água."
        },
        {
          dificuldade: "media",
          enunciado: "O ácido H₂SO₄ (ácido sulfúrico) é classificado como um:",
          alternativas: ["Hidrácido fraco", "Oxiácido, pois possui oxigênio na composição", "Hidrácido forte", "Base forte", "Sal solúvel"],
          corretaIndex: 1,
          feedbackCorreta: "Oxiácidos contêm oxigênio na fórmula; hidrácidos não possuem oxigênio (ex.: HCl).",
          feedbackErrada: "Como possui oxigênio na fórmula, o H₂SO₄ é um oxiácido."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) A nomenclatura correta para a base NaOH, formada pelo cátion Na⁺ e pelo ânion hidroxila (OH⁻), é:",
          alternativas: ["Óxido de sódio", "Cloreto de sódio", "Hidróxido de sódio", "Ácido sódico", "Sulfato de sódio"],
          corretaIndex: 2,
          feedbackCorreta: "A nomenclatura de bases segue o padrão \"hidróxido de\" + nome do cátion.",
          feedbackErrada: "Bases seguem a nomenclatura \"hidróxido de\" + nome do cátion — daí hidróxido de sódio."
        }
      ]
    },

    // ============================================================
    // TÓPICO 2 — Sais e Óxidos
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 2 · Sais e Óxidos",
      paragrafos: [
        "<span class='key-term'>Sais:</span> formados pela reação entre um ácido e uma base (<span class='key-term'>reação de neutralização</span>), que também libera água. Ex.: HCl + NaOH → NaCl + H₂O. Nomenclatura geral: nome do ânion do ácido + \"de\" + nome do cátion da base (ex.: cloreto de sódio).",
        "<span class='key-term'>Óxidos:</span> compostos binários (2 elementos) em que o oxigênio é o elemento mais eletronegativo. Ex.: CO₂, Fe₂O₃, CaO.",
        "Classificação de óxidos: <span class='key-term'>básicos</span> (metal + O; reagem com ácidos, ex.: CaO), <span class='key-term'>ácidos/anidridos</span> (ametal + O; reagem com bases, ex.: CO₂), <span class='key-term'>anfóteros</span> (reagem com ácidos e bases, ex.: ZnO, Al₂O₃) e <span class='key-term'>neutros</span> (não reagem, ex.: CO, NO)."
      ]
    },
    {
      type: "dialog-cards",
      titulo: "Tipos de óxidos",
      instrucao: "Vire cada carta e confira a classificação e um exemplo do cotidiano.",
      cards: [
        { frente: "🧱 CaO", verso: "Óxido BÁSICO — reage com ácidos; conhecido popularmente como \"cal virgem\"." },
        { frente: "🌬️ CO₂", verso: "Óxido ÁCIDO (anidrido) — reage com bases; liberado na respiração e na queima de combustíveis." },
        { frente: "🎨 ZnO", verso: "Óxido ANFÓTERO — reage tanto com ácidos quanto com bases." },
        { frente: "☠️ CO", verso: "Óxido NEUTRO — não reage com ácidos nem com bases; gás tóxico e inodoro." }
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Sais e Óxidos",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "O sal de cozinha (NaCl) é formado pela reação de neutralização entre:",
          alternativas: [
            "Um ácido e um óxido",
            "Um ácido (HCl) e uma base (NaOH)",
            "Dois óxidos",
            "Dois sais",
            "Um metal e um ametal, sem reação química"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Reação de neutralização: ácido + base → sal + água (HCl + NaOH → NaCl + H₂O).",
          feedbackErrada: "O NaCl vem da neutralização entre o ácido HCl e a base NaOH."
        },
        {
          dificuldade: "media",
          enunciado: "O óxido de cálcio (CaO), conhecido como \"cal virgem\", reage com ácidos formando sal e água. Por isso, é classificado como um óxido:",
          alternativas: ["Ácido", "Básico", "Anfótero", "Neutro", "Salino"],
          corretaIndex: 1,
          feedbackCorreta: "Óxidos formados por metal + oxigênio, que reagem com ácidos, são chamados óxidos básicos.",
          feedbackErrada: "Óxido de metal que reage com ácido é classificado como óxido básico."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) O óxido de zinco (ZnO) é capaz de reagir tanto com ácidos quanto com bases — comportamento característico dos óxidos:",
          alternativas: ["Básicos", "Ácidos", "Neutros", "Anfóteros", "Peróxidos"],
          corretaIndex: 3,
          feedbackCorreta: "Óxidos anfóteros (como ZnO e Al₂O₃) reagem tanto com ácidos quanto com bases, dependendo do meio.",
          feedbackErrada: "Reagir com ácidos E bases é a marca registrada dos óxidos anfóteros."
        }
      ]
    },

    // ============================================================
    // TÓPICO 3 — Solubilidade em Água
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 3 · Solubilidade em Água",
      paragrafos: [
        "Regras práticas de solubilidade de sais em água, mais usadas no Ensino Médio:",
        "Sais de <span class='key-term'>metais alcalinos</span> (Na⁺, K⁺...) e de <span class='key-term'>amônio</span> (NH₄⁺) são, de forma geral, sempre solúveis. <span class='key-term'>Nitratos</span> (NO₃⁻) e acetatos também são sempre solúveis.",
        "A maioria dos <span class='key-term'>cloretos, brometos e iodetos</span> é solúvel, <strong>exceto</strong> os de Ag⁺, Pb²⁺ e Hg₂²⁺. A maioria dos <span class='key-term'>sulfatos</span> é solúvel, <strong>exceto</strong> os de Ba²⁺, Pb²⁺ e Sr²⁺ (o de Ca²⁺ é parcialmente solúvel).",
        "<span class='key-term'>Carbonatos, fosfatos, sulfetos e hidróxidos</span> são, de forma geral, insolúveis, <strong>exceto</strong> os de metais alcalinos e de amônio."
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Solubilidade em Água",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "De acordo com as regras gerais de solubilidade, os sais de metais alcalinos (como Na⁺ e K⁺) em água são, de forma geral:",
          alternativas: ["Sempre insolúveis", "Sempre solúveis", "Solúveis apenas em meio ácido", "Solúveis apenas a quente", "Instáveis quimicamente"],
          corretaIndex: 1,
          feedbackCorreta: "Praticamente todos os sais de metais alcalinos e de amônio são solúveis em água.",
          feedbackErrada: "Sais de metais alcalinos são, de forma geral, sempre solúveis em água."
        },
        {
          dificuldade: "media",
          enunciado: "O cloreto de prata (AgCl) é uma exceção à regra geral de solubilidade dos cloretos, sendo classificado como:",
          alternativas: [
            "Altamente solúvel em água",
            "Praticamente insolúvel em água, formando precipitado",
            "Solúvel apenas em água quente",
            "Um óxido anfótero",
            "Um ácido forte"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Cloretos de Ag⁺, Pb²⁺ e Hg₂²⁺ são exceções à regra geral e formam precipitados — reação clássica para identificar o íon cloreto em laboratório.",
          feedbackErrada: "AgCl é uma das exceções clássicas: é praticamente insolúvel, formando precipitado."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) Ao misturar uma solução aquosa de nitrato de bário (Ba(NO₃)₂) com uma solução aquosa de sulfato de sódio (Na₂SO₄), observa-se a formação de um precipitado branco. Esse resultado ocorre porque:",
          alternativas: [
            "Todos os sais formados na reação são solúveis, mas mudam de cor",
            "O sulfato de bário (BaSO₄) formado é insolúvel em água, precipitando",
            "O nitrato de sódio (NaNO₃) formado é insolúvel",
            "Não ocorre nenhuma reação entre as soluções",
            "A água evapora, deixando resíduos sólidos"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Na reação de dupla troca formam-se BaSO₄ (insolúvel, precipita) e NaNO₃ (solúvel, permanece dissolvido) — sulfatos de bário são exceção clássica à regra geral de solubilidade dos sulfatos.",
          feedbackErrada: "O precipitado é o BaSO₄, exceção clássica à regra de que sulfatos são solúveis."
        }
      ]
    },

    // ============================================================
    // REVISÃO GERAL DA LIÇÃO
    // ============================================================
    {
      type: "dialogo",
      askApelido: false,
      texto: "Você decodificou as quatro funções inorgânicas, {{apelido}}! Fecha com um bloco de revisão geral — 3 questões misturando ácidos, bases, sais, óxidos e solubilidade — antes do grande duelo que encerra as Lições 17 a 19."
    },
    {
      type: "quiz",
      titulo: "Revisão Geral · Lição 19",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "A função inorgânica que, segundo Arrhenius, libera OH⁻ como único ânion ao ser dissolvida em água é:",
          alternativas: ["Ácido", "Base", "Sal", "Óxido", "Hidrocarboneto"],
          corretaIndex: 1,
          feedbackCorreta: "Bases liberam OH⁻ como único ânion em solução aquosa, segundo Arrhenius.",
          feedbackErrada: "A função que libera OH⁻ é a base."
        },
        {
          dificuldade: "media",
          enunciado: "A reação entre um ácido e uma base, que produz sal e água, é chamada de reação de:",
          alternativas: ["Combustão", "Oxirredução", "Neutralização", "Síntese", "Decomposição"],
          corretaIndex: 2,
          feedbackCorreta: "Ácido + base → sal + água é, por definição, uma reação de neutralização.",
          feedbackErrada: "O nome correto dessa reação é neutralização."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) O ácido sulfúrico (H₂SO₄) reage com o hidróxido de sódio (NaOH), formando sulfato de sódio e água. A equação balanceada e a classificação correta dessa reação são:",
          alternativas: [
            "H₂SO₄ + NaOH → Na₂SO₄ + H₂O (não balanceada) — reação de síntese",
            "H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O — reação de neutralização",
            "H₂SO₄ + NaOH → NaHSO₄ — reação de decomposição",
            "2 H₂SO₄ + NaOH → Na₂SO₄ + H₂O — reação de combustão",
            "H₂SO₄ + NaOH → SO₂ + NaOH + H₂O — reação redox"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Para balancear, 1 H₂SO₄ (2 H⁺) precisa de 2 NaOH (2 OH⁻): H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O — uma reação de neutralização típica ácido-base.",
          feedbackErrada: "A equação balanceada correta é H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, uma reação de neutralização."
        }
      ]
    },

    // ============================================================
    // DUELO FINAL — Confronto com A Entropia (fight-boss)
    // ============================================================
    {
      type: "dialogo",
      askApelido: false,
      texto: "{{apelido}}, chegou a hora. A Entropia reuniu tudo o que tentou te confundir nessas três lições — átomos instáveis, ligações desfeitas, funções corrompidas — e ergueu um último portal de caos bem na sua frente. Não importa qual caminho você escolheu lá no início: Jornada, Alerta ou Mistério, todos levam a este confronto. Prove que dominou os três pilares da Química e restaure o equilíbrio da Arena."
    },
    {
      type: "boss-fight",
      chefaoNome: "A Entropia",
      mensagemVitoria: "A Entropia se dissolve em faíscas de luz. Os Reatores da Ordem voltam a brilhar. Você provou que domina o átomo, a tabela periódica e as funções inorgânicas — a Arena está em equilíbrio, ao menos por enquanto.",
      questoes: [
        {
          rotulo: "Golpe 1 de 4 · Lição 17",
          dificuldade: "dificil",
          enunciado: "Um átomo Y é isótopo de um átomo com Z = 17 e A = 37. Qual a configuração eletrônica de Y?",
          alternativas: [
            "1s² 2s² 2p⁶ 3s² 3p⁵",
            "1s² 2s² 2p⁶ 3s² 3p⁶",
            "1s² 2s² 2p⁶ 3s¹",
            "1s² 2s² 2p⁵ 3s² 3p⁶",
            "1s² 2s² 2p⁶ 3s² 3p⁴"
          ],
          corretaIndex: 0,
          feedbackCorreta: "Y é isótopo de um átomo com Z=17, logo Y também tem Z=17 (isótopos compartilham o número atômico). A distribuição de Z=17 é 1s²2s²2p⁶3s²3p⁵ (cloro) — o mesmo exemplo do Tópico 4 da Lição 17.",
          feedbackErrada: "Isótopos compartilham o número atômico (Z=17). A distribuição de Z=17 é 1s²2s²2p⁶3s²3p⁵ (cloro)."
        },
        {
          rotulo: "Golpe 2 de 4 · Lição 18",
          dificuldade: "dificil",
          enunciado: "O sódio (Z=11, grupo 1) reage com o cloro (Z=17, grupo 17) formando um composto do cotidiano. Sobre essa formação, é correto afirmar que:",
          alternativas: [
            "É uma ligação covalente apolar, pois envolve dois ametais",
            "O sódio, com baixa energia de ionização, doa 1 elétron ao cloro, que tem alta eletronegatividade e forma o ânion Cl⁻; o composto resultante (NaCl) é iônico",
            "O composto formado é um óxido básico",
            "A ligação é metálica, já que o sódio é um metal",
            "O cloro doa um elétron ao sódio, formando Na⁻Cl⁺"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Mesmo raciocínio do Branching Scenario \"Duelo de Elementos\" do Tópico 3 da Lição 18: metal de baixa energia de ionização + ametal de alta eletronegatividade → ligação iônica.",
          feedbackErrada: "Sódio (baixa energia de ionização) doa elétron ao cloro (alta eletronegatividade) → ligação iônica, formando NaCl."
        },
        {
          rotulo: "Golpe 3 de 4 · Lição 19",
          dificuldade: "dificil",
          enunciado: "Ao reagir ácido sulfúrico (H₂SO₄) com hidróxido de bário (Ba(OH)₂), forma-se sulfato de bário e água. Sobre o sal formado, é correto afirmar que ele:",
          alternativas: [
            "É solúvel, pois todos os sulfatos são solúveis em água",
            "É praticamente insolúvel em água, formando precipitado — uma exceção à regra geral de solubilidade dos sulfatos",
            "É uma base forte",
            "É um óxido anfótero",
            "É um ácido fraco"
          ],
          corretaIndex: 1,
          feedbackCorreta: "BaSO₄ é uma das exceções clássicas à regra \"sulfatos são solúveis\" (junto com PbSO₄ e SrSO₄), formando precipitado — mesma regra do Tópico 3 desta lição.",
          feedbackErrada: "BaSO₄ é insolúvel — uma exceção clássica entre os sulfatos, que formam precipitado."
        },
        {
          rotulo: "Golpe final · Integração total",
          dificuldade: "dificil",
          enunciado: "O enxofre (S) tem número atômico 16 e configuração eletrônica 1s² 2s² 2p⁶ 3s² 3p⁴. Considerando sua posição na tabela periódica e seu comportamento químico, é correto afirmar que o enxofre:",
          alternativas: [
            "Está no grupo 14 e forma ligações iônicas com metais, originando óxidos ácidos",
            "Está no grupo 16 (mesma família do oxigênio), tende a formar ligações covalentes com ametais e, ao se combinar com hidrogênio e oxigênio, origina ácidos como o H₂SO₄, cujo sal (sulfato) tem solubilidade variável — sendo o BaSO₄ uma exceção insolúvel notável",
            "Está no grupo 1 e perde 1 elétron facilmente",
            "É um gás nobre e não participa de ligações",
            "Forma exclusivamente ligações metálicas"
          ],
          corretaIndex: 1,
          feedbackCorreta: "O golpe final une os três pilares: a configuração 3s²3p⁴ (Lição 17) posiciona o enxofre no grupo 16 (Lição 18), explicando sua tendência a formar ácidos como o H₂SO₄ e sais de solubilidade variável, como o BaSO₄ (Lição 19).",
          feedbackErrada: "3s²3p⁴ (Lição 17) → grupo 16 (Lição 18) → ácidos como H₂SO₄ e sais como BaSO₄, de solubilidade variável (Lição 19)."
        }
      ]
    },

    // ---------- Encerramento ----------
    {
      type: "final-score",
      mensagemFinal: "Lição 19 completa, {{apelido}}! Você agora domina os quatro pilares da Química do Pré-ENEM: átomo, tabela periódica, ligações e funções inorgânicas. Sua Líder de Arena está orgulhosa — o arco de lições está encerrado."
    }
  ]
};
