/* ============================================================
   data/licao-18.js
   Lição 18 — Classificação periódica dos elementos e ligações
   químicas (apostila p. 111–116)
   Estrutura: diálogo de transição → 4 tópicos (teoria intercalada
   com Dialog Cards, um Branching Scenario no Tópico 3 e blocos de
   quiz progressivo) → revisão geral → placar.
   Decisões confirmadas na curadoria pedagógica (ver
   docs/esboco-conteudo-licao-18.md):
     - Branching Scenario "Duelo de Elementos" no Tópico 3
       (complementa, não substitui, o bloco de questões).
     - Dialog Cards ilustradas de Forças Intermoleculares no
       Tópico 4, usando as artes em assets/moleculas/.
   ============================================================ */

const LICAO_18 = {
  id: "licao18",
  titulo: "Lição 18 — Classificação periódica e ligações químicas",
  paginaApostila: "111 a 116",

  onFinish(){
    window.location.href = "licao-19.html";
  },

  slides: [

    // ---------- Abertura: transição vinda da Lição 17 ----------
    {
      type: "dialogo",
      askApelido: false,
      texto: "Prontx para a próxima batalha, {{apelido}}? Agora vamos explorar o mapa estratégico da Arena: a Tabela Periódica. Cada elemento é uma carta com propriedades próprias — e entender esse mapa vai definir toda a sua estratégia daqui pra frente."
    },

    // ============================================================
    // TÓPICO 1 — Organização da Tabela Periódica
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 1 · Organização da Tabela Periódica",
      paragrafos: [
        "Os elementos químicos são organizados na tabela periódica em ordem crescente de <span class='key-term'>número atômico (Z)</span>.",
        "<span class='key-term'>Períodos</span> (linhas horizontais, 7 no total): indicam o número de camadas eletrônicas (níveis de energia) ocupadas pelo átomo. <span class='key-term'>Grupos/famílias</span> (colunas verticais, 18 no total): reúnem elementos com propriedades químicas semelhantes, por compartilharem a mesma configuração da camada de valência.",
        "Classificação geral: <span class='key-term'>metais</span> (maioria dos elementos), <span class='key-term'>ametais/não-metais</span> (à direita), <span class='key-term'>semimetais</span> (fronteira em \"escada\"), <span class='key-term'>gases nobres</span> (grupo 18, valência completa) e o <span class='key-term'>hidrogênio</span> (posição especial, sem família fixa)."
      ],
      figura: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Periodic_Table_Of_Elements.svg",
        alt: "Tabela periódica completa dos elementos químicos",
        caption: "Tabela periódica completa — imagem: Wikimedia Commons, licença Creative Commons (CC BY-SA 4.0)."
      }
    },
    {
      type: "dialog-cards",
      titulo: "Famílias da tabela periódica",
      instrucao: "Toque em cada carta para revirar e conferir a característica de cada família.",
      cards: [
        { frente: "🔥 Grupo 1 — Metais alcalinos", verso: "1 elétron na camada de valência; muito reativos (ex.: sódio, potássio); reagem vigorosamente com água." },
        { frente: "⛰️ Grupo 2 — Alcalino-terrosos", verso: "2 elétrons na camada de valência (ex.: cálcio, magnésio); reativos, porém menos que os alcalinos." },
        { frente: "💨 Grupo 16 — Calcogênios", verso: "6 elétrons na camada de valência (ex.: oxigênio, enxofre)." },
        { frente: "🧂 Grupo 17 — Halogênios", verso: "7 elétrons na camada de valência; ametais muito reativos (ex.: cloro, flúor)." },
        { frente: "💎 Grupo 18 — Gases nobres", verso: "Camada de valência completa (8 elétrons, exceto o hélio, com 2); baixíssima reatividade." }
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Organização da Tabela Periódica",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "Os elementos químicos são organizados na tabela periódica em ordem crescente de:",
          alternativas: ["Número de massa", "Número de nêutrons", "Número atômico", "Massa molar", "Ano de descoberta"],
          corretaIndex: 2,
          feedbackCorreta: "O critério moderno de organização, proposto por Moseley, é o número atômico (Z) crescente.",
          feedbackErrada: "O critério correto de organização é o número atômico (Z) crescente."
        },
        {
          dificuldade: "media",
          enunciado: "As linhas horizontais da tabela periódica, chamadas de períodos, indicam:",
          alternativas: [
            "O número de elétrons de valência",
            "O número de camadas eletrônicas ocupadas pelo átomo",
            "O grupo/família do elemento",
            "A carga nuclear efetiva",
            "O estado físico do elemento"
          ],
          corretaIndex: 1,
          feedbackCorreta: "O período corresponde ao maior nível de energia (n) ocupado pelos elétrons do átomo.",
          feedbackErrada: "O período indica o número de camadas eletrônicas ocupadas — o maior nível de energia (n) do átomo."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) Um elemento X está localizado no grupo 17 (halogênios) e no 4º período da tabela periódica. Sobre essa localização, é correto afirmar que X:",
          alternativas: [
            "É um metal alcalino com 1 elétron na camada de valência",
            "É um gás nobre com camada de valência completa",
            "Possui 7 elétrons na camada de valência e tende a formar ânions monovalentes",
            "Possui apenas 2 camadas eletrônicas",
            "É um semimetal usado em ligas metálicas"
          ],
          corretaIndex: 2,
          feedbackCorreta: "Halogênios têm 7 elétrons de valência e tendem a ganhar 1 elétron (ânion −1) para completar o octeto; 4º período = 4 camadas eletrônicas.",
          feedbackErrada: "Halogênios (grupo 17) têm 7 elétrons de valência e tendem a formar ânions −1; estar no 4º período significa 4 camadas eletrônicas."
        }
      ]
    },

    // ============================================================
    // TÓPICO 2 — Propriedades Periódicas e Configuração Eletrônica x Localização
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 2 · Propriedades Periódicas e Localização",
      paragrafos: [
        "<span class='key-term'>Raio atômico:</span> tamanho do átomo; aumenta de cima para baixo (mais camadas) e da direita para a esquerda em um mesmo período (menor carga nuclear efetiva puxando os elétrons).",
        "<span class='key-term'>Energia de ionização:</span> energia necessária para remover um elétron; comportamento inverso ao raio atômico. <span class='key-term'>Eletronegatividade:</span> tendência de atrair elétrons numa ligação — o <span class='key-term'>flúor</span> é o elemento mais eletronegativo. <span class='key-term'>Eletroafinidade:</span> energia associada ao ganho de um elétron, com tendência semelhante à eletronegatividade.",
        "<span class='key-term'>Configuração eletrônica e posição na tabela:</span> o período de um elemento corresponde ao maior nível de energia (n) ocupado; o grupo (elementos representativos) é determinado pela soma dos elétrons nos subníveis s e p mais externos."
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Propriedades Periódicas",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "Em um mesmo período da tabela periódica, o raio atômico tende a:",
          alternativas: [
            "Aumentar da esquerda para a direita",
            "Diminuir da esquerda para a direita",
            "Permanecer constante",
            "Depender apenas da massa atômica",
            "Aumentar apenas nos gases nobres"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Ao longo do período, a carga nuclear aumenta e atrai os elétrons mais para perto do núcleo, reduzindo o raio.",
          feedbackErrada: "No período, o raio atômico diminui da esquerda para a direita — a carga nuclear crescente atrai os elétrons mais para perto."
        },
        {
          dificuldade: "media",
          enunciado: "O flúor (F) é o elemento mais eletronegativo da tabela periódica. Isso significa que ele tem grande tendência de:",
          alternativas: [
            "Perder elétrons facilmente",
            "Atrair elétrons para si numa ligação química",
            "Formar cátions estáveis",
            "Ter baixa energia de ionização",
            "Não formar ligações químicas"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Eletronegatividade mede a capacidade de atrair elétrons compartilhados numa ligação.",
          feedbackErrada: "Eletronegatividade é a tendência de atrair elétrons numa ligação — o flúor é o campeão nessa propriedade."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) Um átomo apresenta a configuração eletrônica 1s² 2s² 2p⁶ 3s² 3p⁴. Com base nessa distribuição, esse elemento está localizado no:",
          alternativas: [
            "2º período, grupo 14",
            "3º período, grupo 16",
            "3º período, grupo 14",
            "4º período, grupo 6",
            "2º período, grupo 16"
          ],
          corretaIndex: 1,
          feedbackCorreta: "O maior nível é n=3 (3º período); a camada de valência (3s²3p⁴) soma 6 elétrons, correspondendo ao grupo 16 — trata-se do enxofre (S, Z=16).",
          feedbackErrada: "O maior nível ocupado é n=3 (3º período) e a valência 3s²3p⁴ soma 6 elétrons (grupo 16) — é o enxofre."
        }
      ]
    },

    // ============================================================
    // TÓPICO 3 — Ligações Químicas
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 3 · Ligações Químicas",
      paragrafos: [
        "Átomos se ligam buscando estabilidade eletrônica — geralmente 8 elétrons na camada de valência, como os gases nobres (<span class='key-term'>regra do octeto</span>).",
        "<span class='key-term'>Ligação iônica:</span> transferência definitiva de elétrons entre um metal (perde elétrons, forma cátion) e um ametal (ganha elétrons, forma ânion); os íons se unem por atração eletrostática. Ex.: NaCl.",
        "<span class='key-term'>Ligação covalente:</span> compartilhamento de elétrons entre ametais/hidrogênio; pode ser simples, dupla ou tripla. <span class='key-term'>Ligação metálica:</span> \"mar de elétrons\" deslocalizados entre cátions metálicos; explica a condutividade elétrica e a maleabilidade dos metais."
      ]
    },
    {
      type: "dialog-cards",
      titulo: "Tipos de ligação química",
      instrucao: "Vire cada carta e confira o exemplo clássico de cada tipo de ligação.",
      cards: [
        { frente: "🧊 Iônica (NaCl)", verso: "Transferência definitiva de elétrons entre metal e ametal; forma um retículo cristalino de íons." },
        { frente: "🔗 Covalente simples (H₂)", verso: "Compartilhamento de 1 par de elétrons entre os dois átomos." },
        { frente: "🔗🔗 Covalente dupla (O₂)", verso: "Compartilhamento de 2 pares de elétrons." },
        { frente: "🔗🔗🔗 Covalente tripla (N₂)", verso: "Compartilhamento de 3 pares de elétrons — a mais forte das ligações covalentes." },
        { frente: "⚡ Metálica (Cu)", verso: "\"Mar de elétrons\" deslocalizados entre cátions metálicos; explica condutividade e maleabilidade." }
      ]
    },
    {
      type: "branching",
      titulo: "Duelo de Elementos: Qual Ligação se Forma?",
      noInicial: "no1",
      mensagemFinal: "Você decifrou os três padrões fundamentais de ligação química: iônica (metal + ametal), covalente (ametal + ametal) e metálica (metal + metal). Continue para o bloco de questões e prove que também domina o padrão ENEM.",
      nodes: {
        no1: {
          rotulo: "Encontro 1 de 3",
          situacao: "Sódio (Na, metal, grupo 1) encontra Cloro (Cl, ametal, grupo 17) na arena. Que ligação se forma?",
          opcoes: [
            { texto: "Iônica — Na doa elétron, Cl recebe", correta: true, proximo: "no2", feedback: "Na tem baixa energia de ionização e perde seu único elétron de valência; Cl tem alta eletronegatividade e o recebe, completando o octeto. Formam NaCl, um composto iônico." },
            { texto: "Covalente — os dois compartilham elétrons igualmente", correta: false, feedback: "Covalente é típica entre dois ametais. Como o sódio é um metal com baixíssima eletronegatividade, ele não compartilha elétrons — ele os doa completamente." },
            { texto: "Metálica — elétrons ficam livres entre os átomos", correta: false, feedback: "Ligação metálica ocorre entre átomos metálicos entre si (como Na-Na), não entre um metal e um ametal." }
          ]
        },
        no2: {
          rotulo: "Encontro 2 de 3",
          situacao: "Agora, dois átomos de Cloro (Cl₂) se encontram. Que ligação vai se formar?",
          opcoes: [
            { texto: "Covalente simples — compartilham 1 par de elétrons", correta: true, proximo: "no3", feedback: "Dois ametais compartilham 1 par de elétrons; a molécula resultante (Cl₂) é apolar." },
            { texto: "Iônica — um Cl doa elétron ao outro", correta: false, feedback: "Sem diferença de eletronegatividade entre átomos iguais, não há transferência de elétrons — só compartilhamento." },
            { texto: "Metálica — elétrons ficam livres entre os átomos", correta: false, feedback: "Cloro não é metal, então não forma \"mar de elétrons\"." }
          ]
        },
        no3: {
          rotulo: "Encontro 3 de 3",
          situacao: "Dois átomos de Magnésio (Mg), lado a lado, como num pedaço de metal sólido. Que ligação os mantém unidos?",
          opcoes: [
            { texto: "Metálica — mar de elétrons compartilhado entre os cátions", correta: true, proximo: null, feedback: "Exatamente: em metais, os elétrons de valência ficam deslocalizados, formando o \"mar de elétrons\" que explica a condutividade elétrica." },
            { texto: "Iônica — um Mg doa elétrons ao outro", correta: false, feedback: "Não há ametal para receber elétrons — os dois átomos são do mesmo metal." },
            { texto: "Covalente — compartilham um par de elétrons", correta: false, feedback: "Covalente simples não explica por que metais conduzem eletricidade; o modelo correto é o \"mar de elétrons\" da ligação metálica." }
          ]
        }
      }
    },
    {
      type: "quiz",
      titulo: "Quiz · Ligações Químicas",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "A regra do octeto estabelece que os átomos tendem a ganhar, perder ou compartilhar elétrons até atingirem:",
          alternativas: [
            "2 elétrons na camada de valência",
            "8 elétrons na camada de valência, como os gases nobres",
            "Carga elétrica neutra apenas",
            "O mesmo número de prótons e nêutrons",
            "18 elétrons na camada de valência"
          ],
          corretaIndex: 1,
          feedbackCorreta: "A estabilidade química busca uma configuração eletrônica semelhante à dos gases nobres.",
          feedbackErrada: "A regra do octeto busca 8 elétrons na camada de valência, como nos gases nobres."
        },
        {
          dificuldade: "media",
          enunciado: "A ligação formada entre um metal e um ametal, com transferência definitiva de elétrons e formação de íons de cargas opostas, é chamada de ligação:",
          alternativas: ["Covalente apolar", "Covalente polar", "Metálica", "Iônica", "De hidrogênio"],
          corretaIndex: 3,
          feedbackCorreta: "A ligação iônica ocorre por transferência de elétrons entre metal (cátion) e ametal (ânion). Ex.: NaCl.",
          feedbackErrada: "Transferência definitiva de elétrons entre metal e ametal define a ligação iônica."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) O gás nitrogênio (N₂) é uma molécula muito estável. Sabendo que cada átomo de nitrogênio possui 5 elétrons na camada de valência, o tipo de ligação covalente presente na molécula de N₂ é:",
          alternativas: [
            "Simples, com compartilhamento de 2 elétrons",
            "Dupla, com compartilhamento de 4 elétrons",
            "Tripla, com compartilhamento de 6 elétrons",
            "Iônica, com transferência de 3 elétrons",
            "Metálica, com elétrons deslocalizados"
          ],
          corretaIndex: 2,
          feedbackCorreta: "Cada N precisa de 3 elétrons para completar o octeto (5+3=8); os dois átomos compartilham 3 pares de elétrons (N≡N).",
          feedbackErrada: "Cada nitrogênio precisa de 3 elétrons a mais para o octeto — os átomos compartilham 3 pares (ligação tripla, N≡N)."
        }
      ]
    },

    // ============================================================
    // TÓPICO 4 — Geometria Molecular, Polaridade, Solubilidade e Forças Intermoleculares
    // ============================================================
    {
      type: "teoria",
      titulo: "Tópico 4 · Geometria, Polaridade e Solubilidade",
      paragrafos: [
        "<span class='key-term'>Geometria molecular</span> (Teoria da Repulsão dos Pares Eletrônicos da Camada de Valência — VSEPR): os pares de elétrons se posicionam o mais afastados possível ao redor do átomo central. Formas comuns: linear (CO₂), angular (H₂O), trigonal plana (BF₃), piramidal (NH₃), tetraédrica (CH₄).",
        "<span class='key-term'>Polaridade molecular:</span> depende da eletronegatividade e da geometria — se os vetores de dipolo se cancelam, a molécula é apolar mesmo tendo ligações polares (ex.: CO₂); se não se cancelam, é polar (ex.: H₂O).",
        "<span class='key-term'>Solubilidade:</span> regra prática \"semelhante dissolve semelhante\" — substâncias polares dissolvem-se em solventes polares (água), e apolares em solventes apolares (óleos)."
      ]
    },
    {
      type: "dialog-cards",
      titulo: "Forças intermoleculares",
      instrucao: "Da mais fraca à mais forte — vire cada carta para ver a explicação completa.",
      cards: [
        {
          frenteImg: "assets/moleculas/card-fm-van_der_waals_f.png",
          frenteAlt: "Cartão 1: Van der Waals (Forças de London) — diagrama Cl-Cl com dipolos induzidos",
          versoImg: "assets/moleculas/card-fm-van_der_waals_v.png",
          versoAlt: "Verso: Forças de London presentes em todas as moléculas, criadas por dipolos temporários induzidos"
        },
        {
          frenteImg: "assets/moleculas/card-fm-dipolo-dipolo_f.png",
          frenteAlt: "Cartão 2: Dipolo-Dipolo — diagrama H-Cl com polos delta positivo e delta negativo",
          versoImg: "assets/moleculas/card-fm-dipolo-dipolo_v.png",
          versoAlt: "Verso: interação dipolo-dipolo entre moléculas polares permanentes como o HCl"
        },
        {
          frenteImg: "assets/moleculas/card-fm-lig-H_f.png",
          frenteAlt: "Cartão 3: Ligação de Hidrogênio — diagrama de moléculas de água interligadas",
          versoImg: "assets/moleculas/card-fm-lig-H_v.png",
          versoAlt: "Verso: ligação de hidrogênio, tipo especial e forte de dipolo-dipolo, explica o alto ponto de ebulição da água"
        }
      ]
    },
    {
      type: "quiz",
      titulo: "Quiz · Geometria, Polaridade e Forças Intermoleculares",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "A regra prática \"semelhante dissolve semelhante\" explica por que:",
          alternativas: [
            "Substâncias apolares se dissolvem bem em água",
            "Substâncias polares tendem a se dissolver em solventes polares, e apolares em solventes apolares",
            "Todas as substâncias se dissolvem igualmente em qualquer solvente",
            "Apenas sais se dissolvem em água",
            "A temperatura não influencia a solubilidade"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Polar dissolve polar (como a água); apolar dissolve apolar (como óleos e gorduras).",
          feedbackErrada: "A regra correta é: polar dissolve polar, apolar dissolve apolar."
        },
        {
          dificuldade: "media",
          enunciado: "A molécula de CO₂ possui ligações C=O polares, mas a molécula, como um todo, é apolar. Isso ocorre porque:",
          alternativas: [
            "O carbono não é eletronegativo",
            "A geometria linear da molécula faz os vetores de dipolo se cancelarem",
            "O oxigênio não participa de ligações polares",
            "O CO₂ não possui ligações covalentes",
            "Os átomos de oxigênio têm cargas de mesmo sinal"
          ],
          corretaIndex: 1,
          feedbackCorreta: "Na geometria linear O=C=O, os dois vetores de dipolo têm mesma intensidade e sentidos opostos, cancelando-se.",
          feedbackErrada: "A geometria linear faz os vetores de dipolo se cancelarem, resultando numa molécula apolar apesar das ligações polares."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) A água (H₂O) tem ponto de ebulição (100 °C) muito mais alto do que o esperado para uma molécula tão pequena, em comparação a outros hidretos da mesma família. Esse comportamento é explicado, principalmente, pela presença de:",
          alternativas: [
            "Forças de Van der Waals apenas",
            "Ligações de hidrogênio entre as moléculas de água",
            "Ligação iônica entre H e O",
            "Ausência de qualquer força intermolecular",
            "Ligação metálica entre as moléculas"
          ],
          corretaIndex: 1,
          feedbackCorreta: "A ligação de hidrogênio é a mais forte das interações intermoleculares, exigindo mais energia para ser rompida — daí o alto ponto de ebulição da água.",
          feedbackErrada: "As ligações de hidrogênio entre as moléculas de água explicam esse ponto de ebulição elevado."
        }
      ]
    },

    // ============================================================
    // REVISÃO GERAL DA LIÇÃO
    // ============================================================
    {
      type: "dialogo",
      askApelido: false,
      texto: "Ótimo trabalho lendo o mapa da Arena, {{apelido}}! Você já entende como os elementos se organizam e como eles se combinam. Antes da próxima lição, um bloco de revisão geral — 3 questões misturando tabela periódica e ligações químicas."
    },
    {
      type: "quiz",
      titulo: "Revisão Geral · Lição 18",
      questoes: [
        {
          dificuldade: "facil",
          enunciado: "As colunas verticais da tabela periódica, que reúnem elementos com propriedades químicas semelhantes, são chamadas de:",
          alternativas: ["Períodos", "Grupos ou famílias", "Camadas", "Séries", "Blocos"],
          corretaIndex: 1,
          feedbackCorreta: "As colunas verticais são os grupos (ou famílias) da tabela periódica.",
          feedbackErrada: "O nome correto para as colunas verticais é grupos ou famílias."
        },
        {
          dificuldade: "media",
          enunciado: "Um átomo com configuração eletrônica de valência 3s² pertence a que grupo, e qual é sua tendência de ligação?",
          alternativas: [
            "Grupo 1, tende a perder 1 elétron",
            "Grupo 2 (metais alcalino-terrosos), tende a perder 2 elétrons formando cátions 2+",
            "Grupo 18, é inerte",
            "Grupo 17, tende a ganhar 1 elétron",
            "Grupo 16, tende a ganhar 2 elétrons"
          ],
          corretaIndex: 1,
          feedbackCorreta: "3s² = 2 elétrons de valência → grupo 2; metais alcalino-terrosos tendem a perder os 2 elétrons de valência, formando cátions 2+.",
          feedbackErrada: "3s² indica 2 elétrons de valência, ou seja, grupo 2 — que tende a perder esses 2 elétrons, formando cátions 2+."
        },
        {
          dificuldade: "dificil",
          enunciado: "(Padrão ENEM) Considere o NaCl (cloreto de sódio) e a H₂O (água). Sobre as ligações e interações presentes nessas substâncias, é correto afirmar que:",
          alternativas: [
            "Ambas apresentam apenas ligações covalentes",
            "O NaCl apresenta ligação iônica, e a água apresenta ligações covalentes polares entre H e O, além de ligações de hidrogênio entre suas moléculas",
            "O NaCl apresenta ligação metálica",
            "A água não apresenta nenhuma polaridade",
            "Ambas as substâncias são apolares"
          ],
          corretaIndex: 1,
          feedbackCorreta: "NaCl é um composto iônico típico (metal + ametal); a água tem ligações covalentes polares internas (O–H) e, entre moléculas diferentes, ligações de hidrogênio.",
          feedbackErrada: "NaCl é iônico (metal+ametal); a água tem ligações covalentes polares (O–H) e ligações de hidrogênio entre suas moléculas."
        }
      ]
    },

    // ---------- Encerramento ----------
    {
      type: "final-score",
      mensagemFinal: "Lição 18 completa, {{apelido}}! Você já sabe ler o mapa da Arena e prever como os elementos se combinam. A próxima batalha entra em território novo: ácidos, bases, sais e óxidos — as Funções Inorgânicas."
    }
  ]
};
