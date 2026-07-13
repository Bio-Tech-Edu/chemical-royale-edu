# Chemical Royale: A Arena dos Elementos
### Pré-ENEM Digital de Química — BIO+TECH EDUDESIGN

Ambiente virtual de aprendizagem autoinstrucional e gamificado para preparação
ao ENEM (Química), conduzido pela Prof.ª Pâmella.

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
├── licao-19.html                 → Etapa 5c: Lição 19 — Funções inorgânicas  ⏳ PENDENTE (ver §7)
│
├── css/
│   └── style.css                 → Design system "Elemento de Arena"
│
├── js/
│   ├── state.js                  → Estado do jogador (localStorage) + catálogos de Avatares/Narrativas
│   ├── main.js                   → Lógica do formulário e da galeria de avatares (Sprint 1)
│   ├── narrativa.js              → Seleção de narrativa + motor híbrido do Cenário de Abertura (Sprint 2/3)
│   └── licoes-engine.js          → Motor genérico de lições (diálogo, teoria, dialog cards, branching, quiz, placar)
│
├── data/
│   ├── narrativas.js             → Textos das 3 vertentes narrativas, para o motor nativo (fallback do H5P)
│   ├── licao-17.js               → Conteúdo estruturado da Lição 17 (slides do licoes-engine.js)
│   └── licao-18.js               → Conteúdo estruturado da Lição 18
│   (licao-19.js ainda não existe — ver §7)
│
├── docs/
│   ├── esboco-conteudo-licao-17.md   → Roteirização pedagógica completa da Lição 17
│   ├── esboco-conteudo-licao-18.md   → Roteirização pedagógica completa da Lição 18
│   └── esboco-conteudo-licao-19.md   → Roteirização pedagógica completa da Lição 19 (conteúdo pronto, aguardando implementação)
│
├── assets/
│   ├── logo/                     → Identidade visual BIO+TECH EDUDESIGN (arquivo de referência; o
│   │                                header atual usa uma marca em texto/CSS, "C⚛R" — ver §2)
│   ├── avatares/                 → Fotos das 5 cientistas (já incluídas — ver §3)
│   ├── cards/                    → Ilustrações das cartas de narrativa + cartas da Lição 17
│   └── moleculas/                → Cartas ilustradas de Forças Intermoleculares (Lição 18)
│
└── h5p/
    ├── dist/                     → Build do h5p-standalone (opcional — ver §6). Vazio por padrão.
    └── branching-narrativa/
        └── content-skeleton.json → Textos das 3 narrativas, formato de referência para autoria no editor H5P
```

## 🚀 1. Configurar o repositório e o GitHub Pages

1. Crie/clone o repositório `Bio-Tech-Edu/chemical-royale-edu`.
2. Copie esta estrutura de pastas para a raiz do repositório (branch `main`).
3. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   selecione a branch `main` e a pasta `/ (root)`.
4. Aguarde o link `https://bio-tech-edu.github.io/chemical-royale-edu/` ficar ativo
   (leva ~1 minuto após o primeiro commit).
5. O arquivo `.nojekyll` (vazio) já está na raiz do pacote — mantenha-o, ele evita
   que o GitHub Pages ignore pastas iniciadas com `_`.

```bash
git add .
git commit -m "Sprint 3: motor híbrido de narrativa, lições 17-18, gamificação e placar"
git push origin main
```

## 🎨 2. Identidade visual BIO+TECH EDUDESIGN

O design system atual (`css/style.css`, direção "Elemento de Arena") usa uma marca
em texto/CSS no cabeçalho (`<span class="brand__mark">C⚛R</span>`), não uma imagem —
por isso nenhuma página referencia um `<img>` de logo hoje.

Se a BIO+TECH EDUDESIGN quiser usar a arte oficial (`logo_bio_tech.jpeg`, já
incluída em `assets/logo/`) no cabeçalho, basta:
1. Trocar o `<span class="brand__mark">` por `<img src="assets/logo/logo_bio_tech.jpeg" alt="BIO+TECH EDUDESIGN">` nas 6 páginas.
2. Ajustar `.brand__mark` em `css/style.css` para o tamanho da imagem.

As variáveis de cor da marca ficam no topo do `css/style.css` (`--accent-plasma`,
`--accent-ion`, `--accent-quantum`, `--accent-gold`) — ajuste-as se houver manual
de marca com cores fixas.

## 🧑‍🚀 3. Imagens dos avatares

As 5 fotos já estão em `assets/avatares/`, com os nomes exatos referenciados em
`js/state.js`:

| Avatar | Arquivo |
|---|---|
| Marie Curie | `marie-curie.png` |
| Rosalind Franklin | `rosalind-franklin.png` |
| Dorothy Hodgkin | `dorothy-hodgkin.png` |
| Stephanie Kwolek | `stephanie-kwolek.png` |
| Ada Yonath | `ada-yonath.png` |

> **Nota de correção:** nas versões anteriores deste pacote, `assets/avatares/`
> continha apenas um `.gitkeep` — as imagens nunca tinham sido copiadas para
> dentro da pasta (mesmo já existindo como upload avulso). Isso não quebrava a
> página (o `onerror` no `<img>` da carta cai para o ícone ⚛️), mas fazia a
> Etapa 2 rodar sem as fotos reais. Corrigido nesta organização.

Se uma imagem for substituída no futuro, o comportamento de fallback continua
o mesmo: a carta exibe automaticamente o ícone ⚛️ e a página não quebra.

## 🧩 4. Cartas de narrativa e ilustrações

Também já incluídas em `assets/cards/`:
- `card_a_jornada_do_heroi.png`, `card_in_media_res.png`, `card_investigacao.png`
  (as 3 vertentes narrativas)
- `card-1_licao_17.png`, `card-2_licao_17.png` (Dialog Cards da Lição 17)

E em `assets/moleculas/`: as 6 cartas ilustradas (frente/verso) de Forças
Intermoleculares usadas na Lição 18 (`card-fm-dipolo-dipolo_*`,
`card-fm-lig-H_*`, `card-fm-van_der_waals_*`).

## 🎮 5. Motor de lições (Sprint 3)

`js/licoes-engine.js` é um motor de "Course Presentation" caseiro, 100%
JavaScript puro (sem dependências externas), que renderiza qualquer lição a
partir de um objeto de dados (`data/licao-17.js`, `data/licao-18.js`).
Implementa os 5 tipos de recurso descritos nos esboços pedagógicos
(`docs/esboco-conteudo-licao-*.md`):

| Tipo de slide | O que faz |
|---|---|
| `dialogo` | Fala da Líder de Arena escolhida; no slide de abertura, captura o apelido do aluno |
| `teoria` | Bloco teórico com texto + 1 ou mais figuras |
| `dialog-cards` | Flashcards de autorregulação (texto ou imagem, viram ao clicar) |
| `branching` | Cenário ramificado em nós de decisão, com feedback por alternativa |
| `quiz` | Bloco de questões progressivas (fácil → médio → difícil), com pontuação |
| `final-score` | Placar da lição + mensagem personalizada da avatar |

Regra de gamificação: o aluno só avança de slide se concluir a interação
obrigatória do slide atual (`setGate()` controla esse bloqueio).

Cada lição HTML (`licao-17.html`, `licao-18.html`, ...) segue sempre o mesmo
padrão mínimo:

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

## 🧵 6. Motor híbrido do Cenário de Abertura (narrativa.html)

A partir do Sprint 3, `narrativa.html` usa um **motor híbrido de duas camadas**
para o Cenário de Abertura que aparece depois que o aluno escolhe sua vertente
narrativa:

1. **Camada H5P (opcional, "de verdade"):** se `h5p/dist/main.bundle.js` existir
   *e* o pacote `h5p/branching-narrativa/<narrativeId>/h5p.json` também existir,
   `js/narrativa.js` carrega o player h5p-standalone dinamicamente e monta o
   Branching Scenario autorado no editor. Isso é útil se a equipe quiser, no
   futuro, um conteúdo portável para qualquer LMS compatível com H5P.
2. **Camada nativa (fallback silencioso, é o que roda por padrão):** se a camada
   1 não estiver disponível — que é o estado normal de um clone novo do
   repositório, sem `npm install` rodado — o mesmo `js/narrativa.js` renderiza a
   cena usando **o mesmo padrão visual já validado no `renderBranching()` da
   Lição 18** (bolha de diálogo da Líder de Arena + bloco de decisão com
   opções e feedback), com os textos de `data/narrativas.js`. Não depende de
   npm, CDN nem autoria externa — funciona no primeiro `git clone`.

O aluno nunca vê qual camada está rodando; a experiência é a mesma nas duas.
Isso resolve o teste local imediatamente e não fecha a porta para o H5P
"de verdade" depois.

### Para habilitar a Camada 1 (H5P real) no futuro

```bash
npm install h5p-standalone
cp -r node_modules/h5p-standalone/dist h5p/dist
```

Depois, autore o Branching Scenario no editor gratuito **Lumi**
(https://lumi.education) ou na conta H5P.org, usando
`h5p/branching-narrativa/content-skeleton.json` como roteiro de texto. Exporte
cada narrativa como `.h5p`, extraia para
`h5p/branching-narrativa/jornada-heroi/`, `.../in-media-res/`,
`.../investigativo/` (cada pasta precisa de `h5p.json` e
`content/content.json`). `js/narrativa.js` detecta os arquivos automaticamente
— nenhuma outra mudança de código é necessária.

> Se você editar os textos de uma narrativa, atualize **os dois arquivos
> juntos**: `data/narrativas.js` (motor nativo) e `content-skeleton.json`
> (referência para a autoria H5P).

## 🔗 7. Fluxo de telas (estado do jogador) e status por etapa

```
index.html (Identificação)                                          ✅ completo
   → avatares.html (Escolha da Líder de Arena)                      ✅ completo
      → apresentacao.html (Alinhamento pedagógico / BNCC)           ✅ completo
         → narrativa.html (Narrativa + Cenário de Abertura híbrido) ✅ completo
            → licao-17.html (O átomo e suas partículas)             ✅ completo
            → licao-18.html (Classificação periódica e ligações)    ✅ completo
            → licao-19.html (Funções inorgânicas)                   ⏳ pendente
```

**Lição 19** já tem o conteúdo pedagógico inteiramente roteirizado em
`docs/esboco-conteudo-licao-19.md` (ácidos, bases, sais, óxidos — conceitos,
classificação, nomenclatura, solubilidade e as 3 questões padrão ENEM), mas
ainda não foi convertida em `licao-19.html` + `data/licao-19.js`. Até lá:

- O motor híbrido de narrativa **não gera links quebrados**: qualquer caminho
  que levaria para a Lição 19 mostra o aviso "🚧 Lição 19 em produção" com uma
  alternativa funcional (ir para a Lição 17).
- Para implementar, siga exatamente o padrão de `data/licao-18.js` +
  `licao-18.html` (§5), usando `docs/esboco-conteudo-licao-19.md` como fonte
  de conteúdo. Depois, defina `"licao-19": "licao-19.html"` em
  `CR_LESSON_ROUTES` (`data/narrativas.js`) para reativar os links.

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
- Cartas de avatar/narrativa são `<button>` reais (não `<div>` clicável), com
  `aria-pressed` e `aria-label` descritivos.

---
**Próximos sprints:** conteúdo programático da Lição 19 (conclusão do Sprint 3),
lógica de habilidades passivas em batalha e placar consolidado (Sprint 4),
painel de pontuação final e geração de PDF por e-mail (Sprint 5).
