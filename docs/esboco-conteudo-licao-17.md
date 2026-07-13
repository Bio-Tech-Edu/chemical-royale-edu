# Esboço de Conteúdo — Lição 17: O Átomo e Suas Partículas
**Projeto:** Chemical Royale — A Arena dos Elementos · BIO+TECH EDUDESIGN
**Apostila de referência:** páginas 106 a 110
**Documento de apoio para:** roteirização pedagógica, revisão da Prof.ª Pâmella e futura autoria no editor H5P (Lumi)

---

## 1. Objetivo pedagógico

Consolidar os quatro pilares conceituais da Lição 17 — evolução dos modelos atômicos, partículas fundamentais, semelhanças atômicas (isótopos/isóbaros) e configuração eletrônica — por meio de teoria intercalada com verificação de aprendizagem em dificuldade progressiva (fácil → médio → difícil), no padrão de enunciado do ENEM/INEP.

A tela é conduzida pela Líder de Arena escolhida pelo estudante, que abre a lição perguntando como ele(a) prefere ser chamado(a), reforçando pertencimento e autonomia antes de qualquer conteúdo técnico.

---

## 2. Mapeamento de recursos H5P por situação

| # | Situação na lição | Recurso H5P recomendado | Por que este recurso |
|---|---|---|---|
| 1 | Diálogo de abertura (pergunta do apelido) | **Course Presentation** + campo de texto customizado (script externo) | O H5P não possui, nativamente, um campo de texto livre que persista a resposta fora da própria atividade. A tela é montada como um slide de Course Presentation, mas a captura/gravação do apelido roda em JavaScript próprio, sobreposto ao player. |
| 2 | Blocos teóricos de cada tópico (texto + figura) | **Course Presentation** | É o recurso indicado para blocos teóricos com texto, imagem e navegação sequencial — exatamente o uso original previsto na arquitetura do projeto. |
| 3 | "Um cartão para cada modelo atômico" / "Exemplos de semelhanças atômicas" | **Dialog Cards** | Autoexplicativo: frente com o estímulo (nome do cientista ou par de átomos), verso com a explicação, e autoavaliação "acertei/errei" — uso 1:1 com a especificação original. |
| 4 | Blocos de 3 questões progressivas por tópico + Revisão Geral | **Question Set** (com **Multiple Choice** como subtipo de cada questão) | *Ajuste em relação à sugestão inicial de Single Choice Set* — ver observação no item 4. |
| 5 | Placar/encerramento da lição | Tela de resultado nativa do **Question Set** (customizada com a mensagem da Líder de Arena) | O Question Set já entrega painel de acertos/erros ao final; a mensagem personalizada da avatar é adicionada por cima via script. |

### Observação técnica — por que Question Set em vez de Single Choice Set

O brief original sugeria *Dialog Cards e/ou Single Choice Set* para os blocos de questões. Ao desenhar o conteúdo, optei por recomendar **Question Set com Multiple Choice**, pois:

- O **Single Choice Set** é otimizado para "maratona" de respostas rápidas, com transição automática e sem espaço para feedback comentado por alternativa — inadequado para o padrão ENEM, que exige justificar cada distrator (o "porquê" do erro).
- O **Question Set + Multiple Choice** permite: 5 alternativas (A–E) por questão, feedback individual por alternativa selecionada, tag de dificuldade, barra de progresso entre as 3 questões do bloco e tela de pontuação — todos os elementos já prototipados no motor JS (`licoes-engine.js`) e descritos nas questões abaixo.
- Recomendação: manter o Single Choice Set reservado para uma eventual "maratona rápida" de revisão (múltiplas lições, ritmo acelerado), diferente do bloco de verificação por tópico.

---

## 3. Estrutura de telas e conteúdo integral

### 3.1 Diálogo de abertura (captura de apelido)

> *"Antes de entrarmos na Arena, preciso saber uma coisa importante: como você quer ser chamado(a) por aqui? Pode ser seu nome mesmo, um apelido de guerra ou até um nome de arena — quem manda é você. Vou usar esse nome sempre que aparecer para te dar uma dica ou comemorar um acerto."*

- Gatilho: fala pela Líder de Arena escolhida pelo estudante (dinâmica, conforme avatar selecionado).
- Interação: campo de texto opcional; se deixado em branco, assume o primeiro nome informado no cadastro.
- Trava de avanço: sim, até que o campo seja confirmado (ainda que vazio).

---

### 3.2 Tópico 1 — Evolução dos modelos atômicos

**Conteúdo teórico:**
Ao longo de mais de um século, o átomo foi "desenhado" de formas diferentes conforme novos experimentos revelavam detalhes da matéria. Cada modelo não é um erro descartado, mas um degrau que resolveu um problema do modelo anterior — e criou uma nova pergunta.

- **Dalton (1803):** átomo como esfera maciça e indivisível ("bolinha de bilhar").
- **Thomson (1897):** ao descobrir o elétron, propôs o modelo "pudim de passas" — massa positiva com elétrons negativos espalhados dentro dela.
- **Rutherford (1911):** ao bombardear uma fina folha de ouro com partículas alfa, percebeu que a maior parte do átomo é espaço vazio, com um núcleo pequeno, denso e positivo.
- **Bohr (1913):** completou o modelo dizendo que os elétrons giram em órbitas (níveis) com energia definida ao redor desse núcleo.

**Figura sugerida:** diagrama do modelo atômico de Bohr — fonte aberta Wikimedia Commons, licença CC BY-SA (crédito obrigatório na legenda).

**Dialog Cards — "um cartão para cada modelo":**
| Frente | Verso |
|---|---|
| Dalton (1803) | Átomo = esfera maciça, indivisível e indestrutível. Ainda não se conhecia próton, nêutron ou elétron. |
| Thomson (1897) | Modelo "pudim de passas": massa positiva com elétrons (negativos) distribuídos dentro dela. Primeira partícula subatômica identificada. |
| Rutherford (1911) | Núcleo pequeno, denso e positivo; eletrosfera é, em sua maior parte, espaço vazio. Descoberto pelo experimento da folha de ouro. |
| Bohr (1913) | Elétrons giram em órbitas (níveis de energia) definidas ao redor do núcleo, sem perder energia enquanto permanecem nelas. |
| Modelo atual | Modelo quântico (orbital): a posição do elétron é descrita por uma região de probabilidade — a "nuvem eletrônica" — e não por uma órbita fixa. |

**Bloco de questões (padrão ENEM):**

1. **[Fácil]** O modelo atômico conhecido popularmente como "pudim de passas", no qual elétrons de carga negativa estariam espalhados em uma massa de carga positiva, foi proposto por:
   A) John Dalton — B) **J. J. Thomson (correta)** — C) Ernest Rutherford — D) Niels Bohr — E) Werner Heisenberg
   *Feedback:* Thomson chegou a esse modelo logo após identificar o elétron, em 1897.

2. **[Médio]** O experimento da folha de ouro, no qual a maioria das partículas alfa atravessava a lâmina metálica e poucas sofriam grandes desvios, levou Rutherford a concluir que o átomo é formado, principalmente, por:
   A) Um núcleo grande e de carga negativa — B) Elétrons compactados sem espaço vazio — C) **Espaço vazio, com um núcleo pequeno e denso de carga positiva (correta)** — D) Nêutrons distribuídos uniformemente por todo o volume — E) Uma esfera maciça e indivisível
   *Feedback:* Poucas partículas alfa se desviavam justamente porque o núcleo, apesar de concentrar a carga positiva, ocupa uma fração ínfima do volume atômico.

3. **[Difícil]** Uma limitação do modelo de Bohr, superada pelo modelo quântico atual, é que Bohr descrevia o elétron:
   A) Como uma partícula sem carga elétrica definida — B) **Em órbitas circulares fixas, quando hoje ele é descrito por regiões de probabilidade — orbitais (correta)** — C) Como parte do núcleo atômico — D) Sem relação com níveis de energia — E) Como idêntico ao próton em massa
   *Feedback:* O princípio da incerteza de Heisenberg tornou insustentável falar em "órbita" exata; por isso hoje usamos orbitais.

---

### 3.3 Tópico 2 — Partículas fundamentais

**Conteúdo teórico:**
O átomo é formado por três partículas fundamentais: **prótons** (carga positiva, no núcleo), **nêutrons** (sem carga, no núcleo) e **elétrons** (carga negativa, na eletrosfera).

O **número atômico (Z)** é a quantidade de prótons — identifica o elemento químico. Em um átomo neutro, o número de elétrons é igual ao de prótons.

O **número de massa (A)** é a soma de prótons e nêutrons: **A = Z + n**. É ele quem determina, aproximadamente, a massa do átomo — os elétrons têm massa desprezível perto de prótons e nêutrons.

*(Sem Dialog Cards neste tópico — segue direto para o bloco de questões, por ser conteúdo mais numérico/aplicado.)*

**Bloco de questões (padrão ENEM):**

1. **[Fácil]** Um átomo neutro possui 17 prótons. Quantos elétrons esse átomo possui?
   A) 8 — B) 15 — C) **17 (correta)** — D) 20 — E) 35
   *Feedback:* Em átomo neutro, nº de elétrons = nº de prótons = Z.

2. **[Médio]** Um átomo apresenta número atômico Z = 20 e número de massa A = 40. O número de nêutrons desse átomo é:
   A) 10 — B) **20 (correta)** — C) 40 — D) 60 — E) 80
   *Feedback:* n = A − Z = 40 − 20 = 20 nêutrons.

3. **[Difícil]** Um íon X²⁺ possui 18 elétrons e número de massa 40. O número de prótons e de nêutrons desse átomo, respectivamente, são:
   A) 18 prótons e 22 nêutrons — B) **20 prótons e 20 nêutrons (correta)** — C) 18 prótons e 18 nêutrons — D) 20 prótons e 22 nêutrons — E) 16 prótons e 24 nêutrons
   *Feedback:* O íon perdeu 2 elétrons (2+): átomo neutro tinha 18+2=20 prótons. Nêutrons = A − Z = 40 − 20 = 20.

---

### 3.4 Tópico 3 — Semelhanças atômicas

**Conteúdo teórico:**
Átomos de elementos diferentes (ou do mesmo elemento) podem compartilhar uma das grandezas Z, A ou n — essas relações são chamadas de semelhanças atômicas.

- **Isótopos:** mesmo número atômico (Z), massas diferentes (ex.: carbono-12 e carbono-14, ambos com 6 prótons).
- **Isóbaros:** mesmo número de massa (A), Z diferentes (ex.: cálcio-40 e argônio-40).
- **Isótonos:** mesmo número de nêutrons (n), com Z e A diferentes entre si.

**Dialog Cards — "exemplos de semelhanças atômicas":**
| Frente | Verso |
|---|---|
| ¹²C e ¹⁴C | São ISÓTOPOS: os dois têm Z = 6, mas massas diferentes (12 e 14). |
| ⁴⁰Ca e ⁴⁰Ar | São ISÓBAROS: os dois têm A = 40, mas Z diferentes (Ca: Z=20, Ar: Z=18). |
| ¹H e ²H (deutério) | São ISÓTOPOS do hidrogênio: mesmo Z = 1, massas 1 e 2. |
| ¹⁴C e ¹⁴N | São ISÓBAROS: A = 14 nos dois, mas Z diferente (C: Z=6, N: Z=7). |

**Bloco de questões (padrão ENEM):**

1. **[Fácil]** Átomos que possuem o mesmo número atômico (Z), mas números de massa diferentes, são chamados de:
   A) Isóbaros — B) Isótonos — C) **Isótopos (correta)** — D) Isômeros — E) Isoeletrônicos
   *Feedback:* Isótopos compartilham o número de prótons (Z) — o que define o elemento químico.

2. **[Médio]** Dois átomos, X e Y, possuem o mesmo número de massa (A = 40), mas números atômicos diferentes (Z_X = 19 e Z_Y = 20). X e Y são classificados como:
   A) Isótopos — B) Isótonos — C) **Isóbaros (correta)** — D) Alótropos — E) Isoeletrônicos
   *Feedback:* Mesmo A, com Z diferentes, é a definição de isóbaros.

3. **[Difícil]** Considere dois átomos: um com Z = 20 e A = 39, outro com Z = 19 e A = 40. Sobre o número de nêutrons desses átomos, é correto afirmar que:
   A) Ambos têm 19 nêutrons, sendo, portanto, isótonos — B) **O primeiro tem 19 e o segundo tem 21 nêutrons; não são isótonos (correta)** — C) Ambos têm 20 nêutrons, sendo isóbaros — D) O primeiro tem 21 e o segundo tem 19 nêutrons; são isótopos — E) É impossível calcular o número de nêutrons com os dados fornecidos
   *Feedback:* n = A − Z para cada átomo: n₁ = 39−20 = 19; n₂ = 40−19 = 21. Valores diferentes ⇒ não são isótonos.

---

### 3.5 Tópico 4 — Configuração eletrônica

**Conteúdo teórico:**
A configuração eletrônica mostra como os elétrons se distribuem pelos subníveis de energia (s, p, d, f) ao redor do núcleo, seguindo o **Diagrama de Linus Pauling**: os elétrons ocupam primeiro os subníveis de menor energia.

Ordem crescente de energia dos subníveis mais usados no Ensino Médio:
`1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁶`

Exemplo: o cloro (Z = 17) tem a distribuição **1s² 2s² 2p⁶ 3s² 3p⁵** — soma dos expoentes: 2+2+6+2+5 = 17 elétrons.

**Cartas ilustrativas (assets/cards/):**
| Arquivo | Conteúdo | Papel pedagógico |
|---|---|---|
| `card-1_licao_17.png` | "O Diagrama de Linus Pauling" — setas diagonais coloridas ligando 1s → 2s/2p → 3s/3p/3d... | Mnemônico visual da regra de preenchimento crescente de energia, reforçando o texto acima antes de qualquer cálculo. |
| `card-2_licao_17.png` | "Configuração Eletrônica na Prática" — exemplo passo a passo do Carbono (Z = 6): elétrons preenchendo as caixas 1s, 2s, 2p até 1s² 2s² 2p² | Ponte entre a regra abstrata (card 1) e o exemplo mais complexo do cloro (texto): um caso simples (6 elétrons) resolvido visualmente antes do caso com 17 elétrons. |

Ambas substituem/complementam a explicação puramente textual do Diagrama de Pauling, sendo exibidas como um par de figuras no mesmo slide teórico (`figuras: [...]` no motor de lições), na sequência: card 1 (regra) → card 2 (exemplo simples) → exemplo do cloro (texto, exemplo mais complexo).

*(Sem Dialog Cards neste tópico — segue direto para o bloco de questões.)*

**Bloco de questões (padrão ENEM):**

1. **[Fácil]** A distribuição eletrônica segue a ordem crescente de energia dos subníveis, conhecida como Diagrama de:
   A) Rutherford — B) **Linus Pauling (correta)** — C) Avogadro — D) Mendeleev — E) Lavoisier
   *Feedback:* O Diagrama de Linus Pauling organiza os subníveis em ordem crescente de energia.

2. **[Médio]** A distribuição eletrônica correta para o átomo de sódio (Z = 11) é:
   A) **1s² 2s² 2p⁶ 3s¹ (correta)** — B) 1s² 2s² 2p⁷ — C) 1s² 2s² 2p⁶ 3s² 3p¹ — D) 1s² 2s² 2p⁵ 3s² — E) 1s² 2s² 2p⁶
   *Feedback:* Soma dos expoentes: 2+2+6+1 = 11 elétrons, seguindo a ordem do diagrama de Pauling.

3. **[Difícil]** O íon Fe³⁺ é obtido a partir do átomo de ferro (Z = 26) pela perda de 3 elétrons, retirados preferencialmente do subnível mais externo disponível no momento da ionização. O subnível de onde saem esses elétrons é o:
   A) 1s — B) 3d — C) **4s (correta)** — D) 3p — E) 4p
   *Feedback:* Apesar de o 4s ser preenchido antes do 3d na ordem de energia de Pauling, na ionização os elétrons saem primeiro da camada mais externa (n=4, subnível 4s).

---

### 3.6 Transição — diálogo de revisão

> *"Muito bem, {apelido}! Você já passou pelos 4 pilares da Lição 17. Antes de seguirmos para a Lição 18, vamos a uma revisão geral — um bloco final com 3 questões (fácil, médio e difícil) misturando tudo o que vimos."*

**Bloco de Revisão Geral (padrão ENEM, mesclando os 4 tópicos):**

1. **[Fácil]** As partículas subatômicas de carga positiva, negativa e neutra são, respectivamente:
   A) Nêutron, próton, elétron — B) **Próton, elétron, nêutron (correta)** — C) Elétron, nêutron, próton — D) Próton, nêutron, elétron — E) Nêutron, elétron, próton

2. **[Médio]** Um átomo X é isótopo de um átomo Y (Z = 11, A = 23) e possui 13 nêutrons. O número de massa do átomo X é:
   A) 11 — B) 22 — C) 23 — D) **24 (correta)** — E) 13
   *Feedback:* Isótopos têm mesmo Z (=11). A = Z + n = 11 + 13 = 24.

3. **[Difícil]** Um elemento químico Q apresenta configuração eletrônica terminada em 4s² 3d⁵. O número atômico desse elemento é:
   A) 20 — B) 23 — C) **25 (correta)** — D) 30 — E) 35
   *Feedback:* Soma de toda a distribuição até 3d⁵: 2+2+6+2+6+2+5 = 25 elétrons (manganês).

---

### 3.7 Encerramento

> *"A Lição 17 está completa, {apelido}. Sua Líder de Arena registrou seu desempenho — esses pontos seguem valendo para o placar global do Chemical Royale. Hora de avançar para a próxima batalha: a Tabela Periódica e as Ligações Químicas."*

Exibe: pontuação total acumulada, nº de acertos, nº de erros (dados vindos do placar global do jogador).

---

## 4. Resumo quantitativo da lição

| Item | Quantidade |
|---|---|
| Slides de diálogo com a Líder de Arena | 3 (abertura, transição, encerramento) |
| Blocos teóricos (Course Presentation) | 4 |
| Conjuntos de Dialog Cards | 2 (5 cartas + 4 cartas) |
| Blocos de questões (Question Set) | 5 (4 por tópico + 1 revisão geral) |
| Total de questões ENEM | 15 (5 fáceis, 5 médias, 5 difíceis) |
| Figuras/cartas ilustrativas | 3 (1 Wikimedia no Tópico 1 + 2 cartas originais no Tópico 4) |

## 5. Fontes de conteúdo aberto e assets originais utilizados

- Diagrama do modelo atômico de Bohr (Tópico 1) — Wikimedia Commons, licença Creative Commons (CC BY-SA 3.0). Uso condicionado à manutenção do crédito na legenda da imagem.
- Cartas "Diagrama de Linus Pauling" e "Configuração Eletrônica na Prática" (Tópico 4) — **assets originais da BIO+TECH EDUDESIGN**, produzidos especificamente para este projeto e salvos em `assets/cards/`. Não requerem crédito externo por serem autorais.
- Demais conteúdos teóricos: redação original da equipe pedagógica, com base em bibliografia consolidada de Química Geral (modelos atômicos, estrutura atômica e configuração eletrônica) — sem transcrição literal de terceiros.

---
**Nota de atualização:** as 3 cartas de narrativa (`card_a_jornada_do_heroi.png`, `card_in_media_res.png`, `card_investigacao.png`) também foram recebidas nesta rodada e já aplicadas em `narrativa.html`/`js/narrativa.js` (Sprint 2), exibidas antes do texto de cada uma das 3 opções de vertente narrativa. Por não pertencerem ao conteúdo de Química da Lição 17, não constam neste esboço — ver `narrativa.html` para conferência visual.

**Próximo passo:** aplicar esta mesma estrutura de documentação para as Lições 18 e 19, antes de iniciar a codificação de cada uma.
