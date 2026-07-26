/* ============================================================
   data/eventos-fato-fake.js
   Sprint 5 — Evento Surpresa "É FATO ou FAKE?"
   -------------------------------------------------------------
   Banco curado de afirmações químicas que circulam em redes sociais,
   grupos de WhatsApp e senso comum. O aluno tem um tempo limitado
   (15s) para julgar cada uma como FATO ou FAKE, treinando pensamento
   crítico com base científica — competência transversal do ENEM
   (Ciências da Natureza / letramento científico).

   Cada afirmação carrega:
     - texto: enunciado curto (máx. 2 linhas), estilo "print de rede social"
     - veredito: "fato" | "fake"
     - explicacao: base científica curta (para o feedback pedagógico)
     - fonte: referência opcional (ENEM, IUPAC, INCA, SBQ, etc.)
     - tema: alinha o mito ao conteúdo da lição correspondente
             (l17 = átomo, l18 = tabela/ligações, l19 = funções inorgânicas)

   Recompensa (aplicada pelo motor em licoes-engine.js):
     - Acerto: +5 pts e +2 PEQ, contabilizados no HUD
     - Erro:   0 pts, mas ganha +1 PEQ de "consolação didática"
               (o aprendizado do mito também vale)
   ============================================================ */

const CR_FATOS_FAKE = {

  // ---------- Afirmações ligadas à Lição 17 (átomo / modelos / partículas) ----------
  l17: [
    {
      texto: "\"O átomo é a menor partícula do universo e não pode ser dividido em nada menor.\"",
      veredito: "fake",
      explicacao: "FAKE. O nome ‘átomo’ vem do grego <em>átomos</em> (‘indivisível’), mas a ciência já sabe há mais de um século que ele é composto por prótons, nêutrons e elétrons — e prótons/nêutrons ainda são feitos de quarks.",
      fonte: "SBQ · Química Nova na Escola"
    },
    {
      texto: "\"Se um átomo perde um elétron, ele deixa de ser o mesmo elemento químico.\"",
      veredito: "fake",
      explicacao: "FAKE. O que define o elemento químico é o número de prótons (Z), não de elétrons. Um átomo que perde ou ganha elétrons vira um <em>íon</em>, mas continua sendo o mesmo elemento.",
      fonte: "IUPAC · Gold Book"
    },
    {
      texto: "\"Isótopos do mesmo elemento têm propriedades químicas praticamente idênticas.\"",
      veredito: "fato",
      explicacao: "FATO. Como isótopos têm o mesmo número de prótons e elétrons (só muda a quantidade de nêutrons), sua reatividade química é praticamente a mesma. A diferença marcante aparece na massa e na estabilidade nuclear.",
      fonte: "ENEM 2019 · Ciências da Natureza"
    },
    {
      texto: "\"O modelo atômico de Bohr é o modelo aceito atualmente pela ciência.\"",
      veredito: "fake",
      explicacao: "FAKE. O modelo atual é o <strong>quântico (orbital)</strong>, em que a posição do elétron é uma <em>região de probabilidade</em> (nuvem eletrônica), não uma órbita fixa como propunha Bohr em 1913.",
      fonte: "BNCC · Ensino Médio, Química"
    },
    {
      texto: "\"Todo material radioativo emite luz visível verde no escuro.\"",
      veredito: "fake",
      explicacao: "FAKE — isso é cultura pop de filme. Radioatividade é emissão de radiação (α, β, γ), invisível a olho nu. O brilho verde é atribuído a compostos com <em>fósforo</em> ou tintas com trítio, não à radioatividade em si.",
      fonte: "CNEN · Comissão Nacional de Energia Nuclear"
    }
  ],

  // ---------- Afirmações ligadas à Lição 18 (tabela periódica / ligações) ----------
  l18: [
    {
      texto: "\"Os gases nobres não reagem com nada porque têm a última camada completa.\"",
      veredito: "fake",
      explicacao: "FAKE (parcial). Eles são <em>pouco</em> reativos, mas <strong>xenônio, criptônio e radônio</strong> formam compostos reais em laboratório (XeF₂, XeF₄, KrF₂). O senso comum simplifica demais.",
      fonte: "IUPAC · Periodic Table"
    },
    {
      texto: "\"Metais são bons condutores de eletricidade porque têm elétrons livres na sua estrutura.\"",
      veredito: "fato",
      explicacao: "FATO. O modelo do ‘mar de elétrons’ explica exatamente isso: em uma ligação metálica, os elétrons de valência se deslocam livremente entre os cátions, permitindo condução elétrica e térmica.",
      fonte: "ENEM 2017 · Q. 105"
    },
    {
      texto: "\"A água (H₂O) é uma molécula linear, igualzinha ao CO₂.\"",
      veredito: "fake",
      explicacao: "FAKE. A água é <strong>angular</strong> (~104,5°) por causa dos dois pares de elétrons não ligantes do oxigênio. O CO₂ é linear porque o carbono central não tem pares isolados. Geometrias diferentes = polaridades diferentes.",
      fonte: "ENEM 2021 · Ciências da Natureza"
    },
    {
      texto: "\"Ligações de hidrogênio são o tipo mais forte de ligação química que existe.\"",
      veredito: "fake",
      explicacao: "FAKE. Ligações de hidrogênio são um tipo de <em>força intermolecular</em> — mais fracas que ligações covalentes, iônicas ou metálicas. Fortes para forças intermoleculares, sim; mas nem chegam perto de uma ligação química clássica.",
      fonte: "SBQ · Química Nova na Escola"
    },
    {
      texto: "\"A polaridade da água é o que a torna um solvente universal para compostos iônicos.\"",
      veredito: "fato",
      explicacao: "FATO. A água é uma molécula polar (dipolo permanente), o que permite solvatar cátions e ânions com facilidade — daí ela dissolver sal, açúcar e a maioria dos compostos iônicos. ‘Universal’ é um exagero didático, mas o mecanismo está correto.",
      fonte: "ENEM 2015 · Q. 82"
    }
  ],

  // ---------- Afirmações ligadas à Lição 19 (ácidos, bases, sais, óxidos) ----------
  l19: [
    {
      texto: "\"Beber água com limão em jejum ‘alcaliniza’ o sangue e cura doenças.\"",
      veredito: "fake",
      explicacao: "FAKE clássica das redes sociais. O sangue tem <strong>pH regulado entre 7,35 e 7,45</strong> por tampões fisiológicos — nenhum alimento altera esse valor. Se alterasse, seria emergência médica (acidose/alcalose).",
      fonte: "INCA · Instituto Nacional de Câncer"
    },
    {
      texto: "\"Todo ácido é corrosivo e queima a pele.\"",
      veredito: "fake",
      explicacao: "FAKE. Depende da <em>concentração</em> e da <em>força do ácido</em>. Ácido acético (vinagre) e ácido cítrico (limão) são ácidos fracos e comestíveis. Já HCl ou H₂SO₄ concentrados são altamente corrosivos.",
      fonte: "ENEM 2018 · Q. 92"
    },
    {
      texto: "\"Bicarbonato de sódio (NaHCO₃) reage com ácido do estômago e alivia azia.\"",
      veredito: "fato",
      explicacao: "FATO. NaHCO₃ + HCl → NaCl + H₂O + CO₂. É uma reação de neutralização real, que reduz temporariamente a acidez estomacal — princípio de vários antiácidos de farmácia. (Uso crônico não é recomendado.)",
      fonte: "ANVISA · Farmacopeia Brasileira"
    },
    {
      texto: "\"Óxidos ácidos, quando reagem com água, formam ácidos — inclusive na chuva ácida.\"",
      veredito: "fato",
      explicacao: "FATO. SO₃ + H₂O → H₂SO₄ e NO₂ + H₂O forma HNO₃/HNO₂. É esse mecanismo que transforma poluentes atmosféricos (do escapamento e da queima de carvão) na chuva ácida que corrói monumentos.",
      fonte: "ENEM 2020 · Q. 118"
    },
    {
      texto: "\"Todo sal de cozinha é sódio puro — por isso faz mal ao coração.\"",
      veredito: "fake",
      explicacao: "FAKE. Sal de cozinha é <strong>cloreto de sódio (NaCl)</strong>, um composto iônico — não sódio metálico (Na), que reage explosivamente com água. O que a OMS recomenda controlar é o <em>íon Na⁺</em>, presente no sal.",
      fonte: "OMS / Ministério da Saúde"
    }
  ]
};

// Helper: sorteia UMA afirmação do bloco temático da lição (l17 | l18 | l19),
// evitando repetição na mesma sessão (usa uma memória volátil em window).
function sortearFatoFake(temaLicao){
  const banco = CR_FATOS_FAKE[temaLicao] || [];
  if(banco.length === 0) return null;

  window.__CR_FATOS_JA_VISTOS = window.__CR_FATOS_JA_VISTOS || {};
  const jaVistos = window.__CR_FATOS_JA_VISTOS[temaLicao] || new Set();
  const disponiveis = banco.filter(f => !jaVistos.has(f.texto));

  // Se o aluno já viu todos, reinicia o pool (permite revisão).
  const pool = disponiveis.length > 0 ? disponiveis : banco;
  const escolhido = pool[Math.floor(Math.random() * pool.length)];

  if(disponiveis.length === 0) jaVistos.clear();
  jaVistos.add(escolhido.texto);
  window.__CR_FATOS_JA_VISTOS[temaLicao] = jaVistos;

  return escolhido;
}
