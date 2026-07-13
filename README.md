<div align="center">
  <img src="assets/logo/chemical_royale_logo.png" alt="Chemical Royale Logo" width="250"/>
  <h1>🧪 Chemical Royale: A Arena dos Elementos</h1>
  <p><em>Um produto educacional gamificado para a preparação do ENEM — BIO+TECH EDUDESIGN</em></p>
</div>

---

## 📖 Sobre o Projeto

O **Chemical Royale: A Arena dos Elementos** é um ambiente virtual de aprendizagem autoinstrucional, focado no ensino de Química para estudantes do Ensino Médio. Inspirado na mecânica de escolha de heróis e batalhas estratégicas de jogos como Clash Royale, o sistema transforma a resolução de questões do ENEM em uma experiência imersiva, combinando **Gamificação** e **Storytelling**.

Projeto coordenado pela **Prof.ª Pâmella** sob a chancela educacional da **BIO+TECH EDUDESIGN**.

## 🚦 Status do projeto

| Etapa | Arquivo | Status |
|---|---|---|
| 1. Identificação do jogador | `index.html` | ✅ completo |
| 2. Escolha da Líder de Arena | `avatares.html` | ✅ completo |
| 3. Alinhamento pedagógico (BNCC) | `apresentacao.html` | ✅ completo |
| 4. Narrativa + Cenário de Abertura | `narrativa.html` | ✅ completo |
| 5. Lição 17 — O átomo e suas partículas | `licao-17.html` | ✅ completo |
| 6. Lição 18 — Tabela periódica e ligações | `licao-18.html` | ✅ completo |
| 7. Lição 19 — Funções inorgânicas + Duelo Final | `licao-19.html` | ✅ completo |
| 8. Habilidades passivas em batalha (Sprint 4) | — | ⏳ próximo sprint |
| 9. Painel de pontuação final + PDF por e-mail (Sprint 5) | — | ⏳ próximo sprint |

O arco completo de conteúdo programático (Lições 17–19) do **Sprint 3 está concluído**,
incluindo o bloco especial **Duelo Final contra "A Entropia"**, que mescla as três lições
como fechamento narrativo.

## 🚀 Funcionalidades

- **Identificação de Jogador:** cadastro via e-mail institucional (domínio `@edu.mt.gov.br`), cidade, escola e turma.
- **Líder de Arena:** escolha entre 5 cientistas históricas, cada uma com habilidade passiva própria.
- **Narrativa Interativa:** 3 vertentes de storytelling (Jornada do Herói, In Media Res, Investigativo), com Cenário de Abertura ramificado — ver [§6](#-6-motor-híbrido-do-cenário-de-abertura-narrativahtml).
- **Conteúdo Gamificado:** 3 lições completas (átomo, tabela periódica/ligações, funções inorgânicas), cada uma intercalando teoria, Dialog Cards, um Branching Scenario e blocos de questões padrão ENEM.
- **Duelo Final (fight-boss):** ao fim da Lição 19, um confronto especial com barra de vida, mesclando conteúdo das 3 lições.
- **Placar progressivo:** pontuação por dificuldade (fácil/médio/difícil), acumulada em todas as lições.
- **Geração de relatório em PDF** (planejada para o Sprint 5): compilado do desempenho e autoavaliação, enviado por e-mail à coordenação.

## 🧬 Liderança de Arena (Avatares)

Antes de iniciar a jornada, o aluno escolhe uma das 5 mulheres notáveis da história da química para guiar sua estratégia. Cada avatar tem uma habilidade passiva única:

| Avatar | Especialidade¹ | Habilidade no Jogo |
| :--- | :--- | :--- |
| <img src="assets/avatares/marie-curie.png" width="150"> | Decaimento Alfa | **O Poder do Núcleo:** dano de radiação contínuo aos reatores inimigos. |
| <img src="assets/avatares/rosalind-franklin.png" width="150"> | Análise de Dupla Hélice | **A Visão de Raio-X:** revela cartas do oponente e encontra pontos fracos na defesa. |
| <img src="assets/avatares/dorothy-hodgkin.png" width="150"> | Cristalização de Insulina | **A Arquiteta Molecular:** cura e reconstrói estruturas em tempo real. |
| <img src="assets/avatares/stephanie-kwolek.png" width="150"> | Blindagem de Kevlar | **A Fibra Impenetrável:** escudo de alta resistência para as tropas (−20% de dano). |
| <img src="assets/avatares/ada-yonath.png" width="150"> | Código Ribossômico | **A Fábrica de Proteínas:** acelera a geração de unidades e reduz o custo de reagentes. |

> ¹Especialidade relacionada à sua contribuição histórica para conhecimento científico por essas mulheres notáveis.

*(As habilidades passivas ainda são apenas narrativas — a lógica de efeito em batalha está planejada para o Sprint 4.)*

## 📚 Trilha de conteúdo (Lições 17–19)

| Lição | Tema | Tópicos | Questões ENEM |
|---|---|---|---|
| **17** | O átomo e suas partículas | Modelos atômicos, partículas fundamentais, isótopos/isóbaros, configuração eletrônica | 15 |
| **18** | Classificação periódica e ligações químicas | Organização da tabela, propriedades periódicas, ligações químicas, geometria/polaridade/forças intermoleculares | 15 |
| **19** | Funções inorgânicas | Ácidos e bases, sais e óxidos, solubilidade em água | 12 |
| **Duelo Final** | Integração das 3 lições | 4 "golpes" contra A Entropia, mesclando os três pilares | 4 |

Cada lição segue o mesmo roteiro pedagógico documentado em `docs/esboco-conteudo-licao-*.md`
(teoria → Dialog Cards → questões progressivas fácil/médio/difícil), com um
Branching Scenario adicional na Lição 18 ("Duelo de Elementos").

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript puro (sem frameworks, sem build step)
- **Motor de lições próprio:** `js/licoes-engine.js` — reproduz em JS puro os recursos H5P (Course Presentation, Dialog Cards, Branching Scenario, Question Set), sem exigir instalação de nada
- **Ecossistema H5P (opcional):** suportado via `h5p-standalone`, com fallback automático caso não esteja instalado — ver [§6](#-6-motor-híbrido-do-cenário-de-abertura-narrativahtml)
- **Persistência:** `localStorage` (estado do jogador), sem backend
- **Hospedagem:** GitHub Pages
- **Relatórios (planejado, Sprint 5):** biblioteca JS para geração de PDF (ex.: jsPDF)

## 🌐 Como acessar (deploy)

Hospedado via **GitHub Pages**:
👉 `https://bio-tech-edu.github.io/chemical-royale-edu/` *(ativar em Settings → Pages, branch `main`, pasta `/root` — o `.nojekyll` já está incluído)*

## ⚙️ Instalação local

```bash
git clone https://github.com/Bio-Tech-Edu/chemical-royale-edu.git
cd chemical-royale-edu
python -m http.server 8000
```

Acesse `http://localhost:8000` no navegador. Nenhuma dependência precisa ser
instalada — o projeto é 100% estático e o motor de lições não usa build step.

> **Atenção ao abrir os arquivos direto com duplo-clique (`file://`):** o
> Cenário de Abertura da narrativa faz uma checagem via `fetch()` para saber
> se existe conteúdo H5P real instalado. Em alguns navegadores, `fetch()` é
> bloqueado em URLs `file://` por CORS — o que é esperado e **não quebra a
> página**: o motor cai automaticamente no fallback nativo (ver §6). Para uma
> experiência 100% fiel à produção, prefira sempre rodar um servidor local
> (comando acima) a abrir o HTML diretamente.

---

## 📁 Estrutura do repositório

```
chemical-royale-edu/
├── .nojekyll                    → evita que o GitHub Pages ignore pastas iniciadas com "_"
├── index.html                   → Etapa 1: Painel de Identificação do Estudante
├── avatares.html                → Etapa 2: Galeria de seleção das 5 Líderes de Arena
├── apresentacao.html            → Etapa 3: Alinhamento pedagógico (BNCC, SAEB, ENEM/INEP)
├── narrativa.html                → Etapa 4: Seleção da vertente narrativa (Cenário de Abertura)
├── licao-17.html                 → Etapa 5a: Lição 17 — O átomo e suas partículas
├── licao-18.html                 → Etapa 5b: Lição 18 — Classificação periódica e ligações
├── licao-19.html                 → Etapa 5c: Lição 19 — Funções inorgânicas + Duelo Final
│
├── css/
│   └── style.css                 → Design system "Elemento de Arena"
│
├── js/
│   ├── state.js                  → Estado do jogador (localStorage) + catálogos de Avatares/Narrativas
│   ├── main.js                   → Lógica do formulário e da galeria de avatares (Sprint 1)
│   ├── narrativa.js              → Seleção de narrativa + motor híbrido do Cenário de Abertura (Sprint 2/3)
│   └── licoes-engine.js          → Motor genérico de lições (diálogo, teoria, dialog cards, branching, quiz, boss-fight, placar)
│
├── data/
│   ├── narrativas.js             → Textos das 3 vertentes narrativas + rotas das lições, para o motor nativo
│   ├── licao-17.js               → Conteúdo estruturado da Lição 17 (slides do licoes-engine.js)
│   ├── licao-18.js               → Conteúdo estruturado da Lição 18
│   └── licao-19.js               → Conteúdo estruturado da Lição 19 + bloco Duelo Final
│
├── docs/
│   ├── esboco-conteudo-licao-17.md   → Roteirização pedagógica completa da Lição 17
│   ├── esboco-conteudo-licao-18.md   → Roteirização pedagógica completa da Lição 18
│   └── esboco-conteudo-licao-19.md   → Roteirização pedagógica completa da Lição 19 (Duelo Final incluído)
│
├── assets/
│   ├── logo/                     → Identidade visual BIO+TECH EDUDESIGN (logo no cabeçalho de todas as páginas)
│   ├── avatares/                 → Fotos das 5 cientistas
│   ├── cards/                    → Ilustrações das cartas de narrativa + cartas da Lição 17
│   └── moleculas/                → Cartas ilustradas de Forças Intermoleculares (Lição 18)
│
└── h5p/
    ├── dist/                     → Build do h5p-standalone (opcional — ver §6). Vazio por padrão.
    └── branching-narrativa/
        └── content-skeleton.json → Textos das 3 narrativas, formato de referência para autoria no editor H5P
```

## 🚀 1. Configurar o repositório e o GitHub Pages

1. Clone o repositório `Bio-Tech-Edu/chemical-royale-edu`.
2. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   selecione a branch `main` e a pasta `/ (root)`.
3. Aguarde o link `https://bio-tech-edu.github.io/chemical-royale-edu/` ficar ativo
   (leva ~1 minuto após o commit).
4. O arquivo `.nojekyll` (vazio) já está na raiz — mantenha-o.

## 🎨 2. Identidade visual BIO+TECH EDUDESIGN

O cabeçalho de todas as páginas usa a arte oficial em `assets/logo/`:
- `chemical_royale_logo.png` — logo principal (link para a home)
- `header_adaptation.png` — selo BIO+TECH EDUDESIGN, no canto do cabeçalho
- Ícones de favicon (`favicon.ico`, `apple-touch-icon.png`, `android-chrome-*.png`) já incluídos

As variáveis de cor da marca ficam no topo de `css/style.css` (`--accent-plasma`,
`--accent-ion`, `--accent-quantum`, `--accent-gold`) — ajuste-as se houver um
manual de marca com paleta fixa.

## 🧑‍🚀 3. Imagens dos avatares

As 5 fotos já estão em `assets/avatares/`, com os nomes referenciados em `js/state.js`
(`marie-curie.png`, `rosalind-franklin.png`, `dorothy-hodgkin.png`, `stephanie-kwolek.png`,
`ada-yonath.png`). Se uma imagem faltar, a carta cai automaticamente no ícone ⚛️ — a
página não quebra.

## 🧩 4. Cartas de narrativa e ilustrações

- `assets/cards/`: `card_a_jornada_do_heroi.png`, `card_in_media_res.png`, `card_investigacao.png` (3 vertentes narrativas) + `card-1_licao_17.png`, `card-2_licao_17.png` (Dialog Cards da Lição 17, tópico Configuração Eletrônica).
- `assets/moleculas/`: 6 cartas ilustradas (frente/verso) de Forças Intermoleculares, usadas na Lição 18 (`card-fm-dipolo-dipolo_*`, `card-fm-lig-H_*`, `card-fm-van_der_waals_*`).

> **Pendência conhecida:** os arquivos `assets/moleculas/card-mod-dalton.png` e
> `card-mod-thomson.png` já estão no repositório, mas ainda **não foram conectados**
> a nenhum slide de `data/licao-17.js` (o Tópico 1 da Lição 17 usa Dialog Cards em
> texto puro para os modelos atômicos, incluindo Dalton e Thomson). Se a intenção
> for substituir esses cards de texto pelas versões ilustradas, é só apontar —
> o padrão de card com imagem já existe (`frenteImg`/`versoImg`, usado nas Forças
> Intermoleculares da Lição 18) e pode ser reaproveitado diretamente.

## 🎮 5. Motor de lições

`js/licoes-engine.js` é um motor de "Course Presentation" caseiro, 100% JavaScript
puro (sem dependências externas), que renderiza qualquer lição a partir de um
objeto de dados (`data/licao-17.js`, `data/licao-18.js`, `data/licao-19.js`).
Implementa os 6 tipos de recurso descritos nos esboços pedagógicos
(`docs/esboco-conteudo-licao-*.md`):

| Tipo de slide | O que faz |
|---|---|
| `dialogo` | Fala da Líder de Arena escolhida; no slide de abertura da Lição 17, captura o apelido do aluno |
| `teoria` | Bloco teórico com texto + 1 ou mais figuras |
| `dialog-cards` | Flashcards de autorregulação (texto ou imagem, viram ao clicar) |
| `branching` | Cenário ramificado em nós de decisão, com feedback por alternativa |
| `quiz` | Bloco de questões progressivas (fácil → médio → difícil), com pontuação |
| `boss-fight` | Duelo Final com barra de vida do chefão — cada questão respondida desfere um "golpe" (25% de HP), certa ou errada; usado só no encerramento da Lição 19 |
| `final-score` | Placar da lição + mensagem personalizada da avatar |

Regra de gamificação: o aluno só avança de slide se concluir a interação
obrigatória do slide atual (`setGate()` controla esse bloqueio). A única exceção
proposital é o `boss-fight`: nele, toda resposta — certa ou errada — conta como
um golpe válido, para que o arco de 3 lições sempre termine em celebração.

Cada lição HTML (`licao-17.html`, `licao-18.html`, `licao-19.html`) segue sempre
o mesmo padrão mínimo:

```html
<script src="js/state.js"></script>
<script src="js/licoes-engine.js"></script>
<script src="data/licao-XX.js"></script>
<script>
  CRState.requireStudent("index.html");
  CRState.requireAvatar("avatares.html");
  if(!CRState.getNarrative()){ window.location.href = "narrativa.html"; }
  new CRLessonEngine(document.getElementById("lesson-root"), LICAO_XX);
</script>
```

## 🧵 6. Motor híbrido do Cenário de Abertura (`narrativa.html`)

A partir do Sprint 3, `narrativa.html` usa um **motor híbrido de duas camadas**
para o Cenário de Abertura que aparece depois que o aluno escolhe sua vertente
narrativa:

1. **Camada H5P (opcional, "de verdade"):** se `h5p/dist/main.bundle.js` existir
   *e* o pacote `h5p/branching-narrativa/<narrativeId>/h5p.json` também existir,
   `js/narrativa.js` carrega o player h5p-standalone dinamicamente e monta o
   Branching Scenario autorado no editor. Útil se a equipe quiser, no futuro,
   um conteúdo portável para qualquer LMS compatível com H5P.
2. **Camada nativa (fallback silencioso, é o que roda por padrão):** se a camada
   1 não estiver disponível — o estado normal de um clone novo do repositório,
   sem `npm install` rodado — o mesmo `js/narrativa.js` renderiza a cena usando
   **o mesmo padrão visual do `renderBranching()`** (bolha de diálogo da Líder
   de Arena + bloco de decisão com opções e feedback), com os textos de
   `data/narrativas.js`. Não depende de npm, CDN nem autoria externa — funciona
   no primeiro `git clone`.

O aluno nunca vê qual camada está rodando; a experiência é a mesma nas duas.

### Para habilitar a Camada 1 (H5P real) no futuro

```bash
npm install h5p-standalone
cp -r node_modules/h5p-standalone/dist h5p/dist
```

Depois, autore o Branching Scenario no editor gratuito **Lumi**
(https://lumi.education) ou na conta H5P.org, usando
`h5p/branching-narrativa/content-skeleton.json` como roteiro de texto. Exporte
cada narrativa como `.h5p`, extraia para `h5p/branching-narrativa/jornada-heroi/`,
`.../in-media-res/`, `.../investigativo/` (cada pasta precisa de `h5p.json` e
`content/content.json`). `js/narrativa.js` detecta os arquivos automaticamente
— nenhuma outra mudança de código é necessária.

> Se você editar os textos de uma narrativa, atualize **os dois arquivos
> juntos**: `data/narrativas.js` (motor nativo) e `content-skeleton.json`
> (referência para a autoria H5P).

## 🔗 7. Fluxo de telas e estado do jogador

```
index.html (Identificação)
   → avatares.html (Escolha da Líder de Arena)
      → apresentacao.html (Alinhamento pedagógico / BNCC)
         → narrativa.html (Narrativa + Cenário de Abertura híbrido)
            → licao-17.html (O átomo e suas partículas)
               → licao-18.html (Classificação periódica e ligações)
                  → licao-19.html (Funções inorgânicas + Duelo Final)
                     → narrativa.html (hub — painel de pontuação final chega no Sprint 5)
```

Todo o estado (`student`, `avatarId`, `narrativeId`, `apelido`, `score`,
`licoesConcluidas`) fica em `localStorage` sob a chave
`chemicalRoyale.playerState.v1`, gerenciado por `js/state.js` (objeto
`CRState`). Cada página valida com `CRState.requireStudent()` /
`CRState.requireAvatar()` se as etapas anteriores foram concluídas,
redirecionando o aluno de volta se necessário.

## ♿ Acessibilidade e responsividade

- Mobile-first: grades reorganizam de 1 → 2 → 3/5 colunas conforme a largura.
- Foco de teclado visível em todos os elementos interativos.
- `prefers-reduced-motion` respeitado globalmente.
- Cartas de avatar/narrativa/lição são `<button>` reais (não `<div>` clicável),
  com `aria-pressed` e `aria-label` descritivos.

## 📧 Contato e suporte

Para dúvidas pedagógicas e suporte em relação ao conteúdo:
**Prof.ª Pâmella** — pamella.balcacar@edu.mt.gov.br

---

**Próximos sprints:** lógica de efeito das habilidades passivas em batalha e
placar consolidado (Sprint 4); painel de pontuação final, autoavaliação e
geração de PDF por e-mail (Sprint 5).

<div align="center">
  <img src="assets/logo/logo_bio_tech.png" alt="Logo BIO+TECH EDUDESIGN" width="70"/>
</div>
