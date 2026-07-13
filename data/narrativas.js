/* ============================================================
   data/narrativas.js
   Sprint 3 — Motor Híbrido de Narrativa

   Fonte de dados do "Cenário de Abertura" de cada vertente
   narrativa, consumida por js/narrativa.js quando o player H5P
   Standalone não está disponível no ambiente (padrão em teste
   local, sem `npm install h5p-standalone` rodado).

   Este arquivo espelha 1:1 o conteúdo de
   h5p/branching-narrativa/content-skeleton.json — que continua
   existindo e é a fonte de referência para a autoria "oficial"
   do Branching Scenario no editor H5P (Lumi), caso a equipe
   decida investir nisso no futuro (ver README.md § 6).
   Ao editar um texto, atualize os dois arquivos juntos.

   {{avatarNome}} e {{avatarPassiva}} são placeholders
   substituídos em tempo de execução a partir do avatar salvo
   em CRState (ver função aplicarPlaceholders em js/narrativa.js).
   ============================================================ */

const CR_NARRATIVE_SCENES = {

  "jornada-heroi": {
    startScreen: {
      titulo: "O Chamado da Ciência",
      texto: "O mundo como conhecemos está se desestabilizando. Uma força caótica conhecida como 'A Entropia' está quebrando as ligações químicas do universo, desfazendo a matéria e apagando o conhecimento científico. Os Reatores da Ordem estão prestes a colapsar. Para restaurar o equilíbrio do cosmos, você foi convocado para a Arena dos Elementos. Mas você não lutará sozinho: {{avatarNome}} deixou seu legado codificado na Matriz Quântica para guiar sua estratégia.",
      startButtonText: "Iniciar minha jornada"
    },
    primeiraRamificacao: {
      pergunta: "Diante do colapso iminente, qual será seu primeiro movimento na Arena?",
      caminhos: [
        {
          texto: "Avançar direto para o núcleo do reator",
          resultado: "Você decide agir agora. É hora de entender do que a matéria é feita — a Lição 17 espera por você.",
          destino: "licao-17"
        },
        {
          texto: "Estudar a Matriz Quântica antes de agir",
          resultado: "Prudente. Uma revisão rápida nunca é tempo perdido antes da batalha.",
          destino: "revisao-rapida"
        }
      ]
    }
  },

  "in-media-res": {
    startScreen: {
      titulo: "Alerta Vermelho no Laboratório!",
      texto: "Atenção! Reação em cadeia descontrolada no Reator Central! Sobrecarga de elétrons iminente! Você acabou de cair de paraquedas no laboratório de testes mais avançado do planeta e o deck de reações químicas está na sua mão. O sistema de segurança exige a autenticação de uma Diretora de Pesquisa imediatamente: {{avatarNome}}, ativando {{avatarPassiva}}.",
      startButtonText: "Assumir controle"
    },
    primeiraRamificacao: {
      pergunta: "O oponente já lançou uma ofensiva de ácidos corrosivos. Qual carta você joga primeiro?",
      caminhos: [
        {
          texto: "Neutralizar com uma base",
          resultado: "Ação direta! Mas ácidos e bases são conteúdo da Lição 19 — ainda em produção nesta arena (veja abaixo).",
          destino: "licao-19"
        },
        {
          texto: "Reforçar as torres de contenção",
          resultado: "Estratégico. Primeiro a fundação: vamos entender a estrutura do átomo.",
          destino: "licao-17"
        }
      ]
    }
  },

  "investigativo": {
    startScreen: {
      titulo: "Os Diários Perdidos da Matéria",
      texto: "Você encontrou um antigo artefato criogênico escondido nos porões de uma universidade esquecida. Ao tocá-lo, uma interface holográfica revela a 'Arena Molecular': um simulador tático que testa as leis da natureza. Os dados estão criptografados em desafios e batalhas de cartas químicas. Para decifrá-los, você sintoniza sua mente com a assinatura quântica de {{avatarNome}}.",
      startButtonText: "Decifrar o primeiro diário"
    },
    primeiraRamificacao: {
      pergunta: "O primeiro diário criptografado menciona 'a arquitetura invisível da matéria'. Por onde começar a investigação?",
      caminhos: [
        {
          texto: "Decifrar a estrutura do átomo",
          resultado: "O primeiro segredo está nas partículas fundamentais — Lição 17.",
          destino: "licao-17"
        },
        {
          texto: "Investigar como os átomos se organizam na tabela",
          resultado: "Interessante escolha — a organização periódica guarda muitas pistas. Lição 18.",
          destino: "licao-18"
        }
      ]
    }
  }
};

// Conteúdo curto de apoio para o destino "revisao-rapida" — não é uma
// lição completa, é um recall de poucos segundos antes de seguir para
// a Lição 17, oferecido apenas na vertente "Jornada do Herói".
const CR_REVISAO_RAPIDA = {
  titulo: "Revisão relâmpago: partículas do átomo",
  pontos: [
    "Próton (p⁺): carga positiva, fica no núcleo.",
    "Nêutron (n⁰): sem carga, também fica no núcleo.",
    "Elétron (e⁻): carga negativa, orbita a eletrosfera.",
    "Número atômico (Z) = quantidade de prótons — é o que identifica o elemento."
  ]
};

// Mapa de rotas reais das lições já publicadas no repositório.
// Se uma lição ainda não tiver HTML próprio (ex.: Lição 19 — Sprint 3
// segue em andamento para essa trilha), o valor fica null e o motor
// nativo mostra um aviso "em produção" em vez de gerar um link quebrado.
const CR_LESSON_ROUTES = {
  "licao-17": "licao-17.html",
  "licao-18": "licao-18.html",
  "licao-19": null
};
