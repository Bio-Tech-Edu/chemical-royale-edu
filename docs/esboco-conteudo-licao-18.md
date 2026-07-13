# Esboço de Conteúdo — Lição 18: Classificação Periódica dos Elementos e Ligações Químicas
**Projeto:** Chemical Royale — A Arena dos Elementos · BIO+TECH EDUDESIGN
**Apostila de referência:** páginas 111 a 116
**Documento de apoio para:** roteirização pedagógica, revisão da Prof.ª Pâmella e futura autoria no editor H5P (Lumi)
**Status:** esboço aprovado para curadoria final — decisões de recurso já confirmadas; codificação de `licao-18.html` inicia após validação deste documento

---

## 1. Objetivo pedagógico

Consolidar a leitura da tabela periódica como "mapa estratégico da Arena" (organização, propriedades periódicas e a ponte entre configuração eletrônica e posição na tabela) e, na sequência, os fundamentos de ligações químicas (regra do octeto, tipos de ligação, geometria/polaridade e forças intermoleculares) — sempre em dificuldade progressiva e no padrão de enunciado do ENEM/INEP.

Para manter a identidade da Arena, a lição é apresentada como o momento em que o jogador aprende a "ler as cartas" (elementos) antes de combiná-las em jogadas (ligações).

---

## 2. Mapeamento de recursos H5P por situação

| # | Situação na lição | Recurso H5P recomendado | Por que este recurso |
|---|---|---|---|
| 1 | Diálogo de transição (abertura da lição) | **Course Presentation** (slide de texto, sem captura de dado — apelido já obtido na Lição 17) | Mantém a voz da Líder de Arena sem repetir uma interação já resolvida anteriormente. |
| 2 | Blocos teóricos de cada tópico | **Course Presentation** | Uso padrão já validado na Lição 17 para texto + imagem. |
| 3 | "Famílias da tabela periódica" / "Tipos de ligação química" | **Dialog Cards** (texto) | Mesma lógica da Lição 17: conteúdo de categorização (um cartão por família/tipo) se beneficia do formato frente/verso com autoavaliação. |
| 4 | "Forças intermoleculares" (dentro do Tópico 4) | **Dialog Cards** (ilustrado) | Conjunto de 3 cartas com arte própria (frente/verso), enviadas pela Prof.ª Pâmella — ver detalhamento na seção 3.5. |
| 5 | **[CONFIRMADO]** Exercício "Qual ligação se forma?" (dentro do Tópico 3) | **Branching Scenario** | Ver detalhamento e decisão de escopo logo abaixo. |
| 6 | Blocos de 3 questões progressivas por tópico + Revisão Geral | **Question Set** (Multiple Choice) | Mantém a decisão já registrada no esboço da Lição 17 — feedback comentado por alternativa é indispensável no padrão ENEM. |
| 7 | Placar/encerramento da lição | Tela de resultado nativa do **Question Set** | Reaproveita o mesmo componente da Lição 17. |

### ✅ Decisão confirmada — Branching Scenario no Tópico 3 (Ligações Químicas)

Conforme validado pela Prof.ª Pâmella, o Tópico 3 passa a incluir um exercício de **Branching Scenario** *antes* do bloco de Question Set — ou seja, ele **complementa** (não substitui) as 3 questões padrão ENEM, funcionando como aquecimento exploratório de reconhecimento de padrões.

**Fluxo do cenário "Duelo de Elementos: Qual Ligação se Forma?"** (3 nós de decisão):

| Nó | Situação apresentada | Caminhos e desfecho |
|---|---|---|
| 1 | Sódio (Na, metal, grupo 1) encontra Cloro (Cl, ametal, grupo 17) na arena. Que ligação se forma? | **a) Iônica (correto)** → feedback: Na perde seu elétron de valência (baixa energia de ionização); Cl o recebe (alta eletronegatividade) → forma NaCl. **b) Covalente** → feedback: covalente é típica entre dois ametais; o sódio é um metal e doa o elétron por completo. **c) Metálica** → feedback: metálica ocorre entre átomos metálicos entre si, não entre metal e ametal. |
| 2 | Dois átomos de Cloro (Cl₂) se encontram. Que ligação se forma? | **a) Covalente simples (correto)** → feedback: dois ametais compartilham 1 par de elétrons; molécula apolar. **b) Iônica** → feedback: sem diferença de eletronegatividade entre átomos iguais, não há transferência de elétrons. **c) Metálica** → feedback: cloro não é metal. |
| 3 | Dois átomos de Magnésio (Mg), lado a lado, como num pedaço de metal sólido. Que ligação os mantém unidos? | **a) Metálica (correto)** → feedback: "mar de elétrons" compartilhado entre os cátions metálicos. **b) Iônica** → feedback: não há ametal para receber elétrons. **c) Covalente** → feedback: covalente não explica a condutividade elétrica típica dos metais. |

**Mensagem de encerramento do cenário:** *"Você decifrou os três padrões fundamentais de ligação química: iônica (metal + ametal), covalente (ametal + ametal) e metálica (metal + metal). Continue para o bloco de questões e prove que também domina o padrão ENEM."*

**Nota técnica:** assim como o slide de captura de apelido (Lição 17), o Branching Scenario é um recurso H5P nativo — pode ser autorado diretamente no Lumi seguindo esta tabela como roteiro, sem necessidade de script customizado adicional (diferente do slide de apelido, que dependia de JS externo).

---

## 3. Estrutura de telas e conteúdo integral

### 3.1 Diálogo de transição

> *"Prontx para a próxima batalha, {apelido}? Agora vamos explorar o mapa estratégico da Arena: a Tabela Periódica. Cada elemento é uma carta com propriedades próprias — e entender esse mapa vai definir toda a sua estratégia daqui pra frente."*

- Sem captura de dado (apelido já salvo na Lição 17); apenas ambientação. Avanço livre.

---

### 3.2 Tópico 1 — Organização da Tabela Periódica

**Conteúdo teórico:**
Os elementos químicos são organizados na tabela periódica em ordem crescente de **número atômico (Z)**.

- **Períodos** (linhas horizontais, 7 no total): indicam o número de camadas eletrônicas (níveis de energia) ocupadas pelo átomo.
- **Grupos/famílias** (colunas verticais, 18 no total): reúnem elementos com propriedades químicas semelhantes, por compartilharem a mesma configuração da camada de valência.
- Classificação geral: **metais** (maioria dos elementos), **ametais/não-metais** (à direita), **semimetais** (fronteira em "escada"), **gases nobres** (grupo 18, valência completa) e o **hidrogênio** (posição especial, sem família fixa).

**Figura sugerida:** tabela periódica completa — fonte aberta Wikimedia Commons, licença CC BY-SA 4.0 (crédito obrigatório na legenda).

**Dialog Cards — "Famílias da tabela periódica":**
| Frente | Verso |
|---|---|
| Grupo 1 — Metais alcalinos | 1 elétron na camada de valência; muito reativos (ex.: sódio, potássio); reagem vigorosamente com água. |
| Grupo 2 — Metais alcalino-terrosos | 2 elétrons na camada de valência (ex.: cálcio, magnésio); reativos, porém menos que os alcalinos. |
| Grupo 16 — Calcogênios | 6 elétrons na camada de valência (ex.: oxigênio, enxofre). |
| Grupo 17 — Halogênios | 7 elétrons na camada de valência; ametais muito reativos (ex.: cloro, flúor). |
| Grupo 18 — Gases nobres | Camada de valência completa (8 elétrons, exceto o hélio, com 2); baixíssima reatividade. |

**Bloco de questões (padrão ENEM):**

1. **[Fácil]** Os elementos químicos são organizados na tabela periódica em ordem crescente de:
   A) Número de massa — B) Número de nêutrons — C) **Número atômico (correta)** — D) Massa molar — E) Ano de descoberta
   *Feedback:* O critério moderno de organização, proposto por Moseley, é o número atômico (Z) crescente.

2. **[Médio]** As linhas horizontais da tabela periódica, chamadas de períodos, indicam:
   A) O número de elétrons de valência — B) **O número de camadas eletrônicas ocupadas pelo átomo (correta)** — C) O grupo/família do elemento — D) A carga nuclear efetiva — E) O estado físico do elemento
   *Feedback:* O período corresponde ao maior nível de energia (n) ocupado pelos elétrons do átomo.

3. **[Difícil]** Um elemento X está localizado no grupo 17 (halogênios) e no 4º período da tabela periódica. Sobre essa localização, é correto afirmar que X:
   A) É um metal alcalino com 1 elétron na camada de valência — B) É um gás nobre com camada de valência completa — C) **Possui 7 elétrons na camada de valência e tende a formar ânions monovalentes (correta)** — D) Possui apenas 2 camadas eletrônicas — E) É um semimetal usado em ligas metálicas
   *Feedback:* Halogênios têm 7 elétrons de valência e tendem a ganhar 1 elétron (ânion −1) para completar o octeto; 4º período = 4 camadas eletrônicas.

---

### 3.3 Tópico 2 — Propriedades Periódicas e Configuração Eletrônica x Localização

**Conteúdo teórico:**
- **Raio atômico:** tamanho do átomo; aumenta de cima para baixo (mais camadas) e da direita para a esquerda em um mesmo período (menor carga nuclear efetiva puxando os elétrons).
- **Energia de ionização:** energia necessária para remover um elétron; comportamento inverso ao raio atômico (aumenta da esquerda para a direita e de baixo para cima).
- **Eletronegatividade:** tendência de atrair elétrons numa ligação química; maior nos ametais do canto superior direito (excluindo gases nobres) — o **flúor** é o elemento mais eletronegativo.
- **Eletroafinidade (afinidade eletrônica):** energia associada ao ganho de um elétron; segue tendência geral semelhante à eletronegatividade.
- **Configuração eletrônica e posição na tabela:** o período de um elemento corresponde ao maior nível de energia (n) ocupado; o grupo (para elementos representativos) é determinado pela soma dos elétrons nos subníveis *s* e *p* mais externos.

*(Sem Dialog Cards — tópico segue direto para o bloco de questões, por ser mais numérico/aplicado.)*

**Bloco de questões (padrão ENEM):**

1. **[Fácil]** Em um mesmo período da tabela periódica, o raio atômico tende a:
   A) Aumentar da esquerda para a direita — B) **Diminuir da esquerda para a direita (correta)** — C) Permanecer constante — D) Depender apenas da massa atômica — E) Aumentar apenas nos gases nobres
   *Feedback:* Ao longo do período, a carga nuclear aumenta e atrai os elétrons mais para perto do núcleo, reduzindo o raio.

2. **[Médio]** O flúor (F) é o elemento mais eletronegativo da tabela periódica. Isso significa que ele tem grande tendência de:
   A) Perder elétrons facilmente — B) **Atrair elétrons para si numa ligação química (correta)** — C) Formar cátions estáveis — D) Ter baixa energia de ionização — E) Não formar ligações químicas
   *Feedback:* Eletronegatividade mede a capacidade de atrair elétrons compartilhados numa ligação.

3. **[Difícil]** Um átomo apresenta a configuração eletrônica 1s² 2s² 2p⁶ 3s² 3p⁴. Com base nessa distribuição, esse elemento está localizado no:
   A) 2º período, grupo 14 — B) **3º período, grupo 16 (correta)** — C) 3º período, grupo 14 — D) 4º período, grupo 6 — E) 2º período, grupo 16
   *Feedback:* O maior nível é n=3 (3º período); a camada de valência (3s²3p⁴) soma 6 elétrons, correspondendo ao grupo 16 — trata-se do enxofre (S, Z=16).

---

### 3.4 Tópico 3 — Ligações Químicas

**Conteúdo teórico:**
Átomos se ligam buscando estabilidade eletrônica — geralmente 8 elétrons na camada de valência, como os gases nobres (**regra do octeto**).

- **Ligação iônica:** transferência definitiva de elétrons entre um metal (perde elétrons, forma cátion) e um ametal (ganha elétrons, forma ânion); os íons se unem por atração eletrostática. Ex.: NaCl.
- **Ligação covalente:** compartilhamento de elétrons, entre ametais/hidrogênio; pode ser simples, dupla ou tripla, conforme o nº de pares compartilhados.
- **Ligação metálica:** "mar de elétrons" deslocalizados entre cátions metálicos; explica a condutividade elétrica e a maleabilidade dos metais.

**Dialog Cards — "Tipos de ligação química":**
| Frente | Verso |
|---|---|
| Iônica (NaCl) | Transferência definitiva de elétrons entre metal e ametal; forma um retículo cristalino de íons. |
| Covalente simples (H₂) | Compartilhamento de 1 par de elétrons entre os dois átomos. |
| Covalente dupla (O₂) | Compartilhamento de 2 pares de elétrons. |
| Covalente tripla (N₂) | Compartilhamento de 3 pares de elétrons — a mais forte das ligações covalentes. |
| Metálica (Cu) | "Mar de elétrons" deslocalizados entre cátions metálicos; explica condutividade e maleabilidade. |

**➡ Branching Scenario — "Duelo de Elementos: Qual Ligação se Forma?"**
Entra aqui na sequência, logo após os Dialog Cards e antes do bloco de questões: os 3 nós de decisão detalhados na seção 2 (Na+Cl, Cl+Cl, Mg+Mg), funcionando como prática exploratória antes da avaliação formal.

**Bloco de questões (padrão ENEM):**

1. **[Fácil]** A regra do octeto estabelece que os átomos tendem a ganhar, perder ou compartilhar elétrons até atingirem:
   A) 2 elétrons na camada de valência — B) **8 elétrons na camada de valência, como os gases nobres (correta)** — C) Carga elétrica neutra apenas — D) O mesmo número de prótons e nêutrons — E) 18 elétrons na camada de valência
   *Feedback:* A estabilidade química busca uma configuração eletrônica semelhante à dos gases nobres.

2. **[Médio]** A ligação formada entre um metal e um ametal, com transferência definitiva de elétrons e formação de íons de cargas opostas, é chamada de ligação:
   A) Covalente apolar — B) Covalente polar — C) Metálica — D) **Iônica (correta)** — E) De hidrogênio
   *Feedback:* A ligação iônica ocorre por transferência de elétrons entre metal (cátion) e ametal (ânion). Ex.: NaCl.

3. **[Difícil]** O gás nitrogênio (N₂) é uma molécula muito estável. Sabendo que cada átomo de nitrogênio possui 5 elétrons na camada de valência, o tipo de ligação covalente presente na molécula de N₂ é:
   A) Simples, com compartilhamento de 2 elétrons — B) Dupla, com compartilhamento de 4 elétrons — C) **Tripla, com compartilhamento de 6 elétrons (correta)** — D) Iônica, com transferência de 3 elétrons — E) Metálica, com elétrons deslocalizados
   *Feedback:* Cada N precisa de 3 elétrons para completar o octeto (5+3=8); os dois átomos compartilham 3 pares de elétrons (N≡N).

---

### 3.5 Tópico 4 — Geometria Molecular, Polaridade, Solubilidade e Forças Intermoleculares

**Conteúdo teórico:**
- **Geometria molecular** (Teoria da Repulsão dos Pares Eletrônicos da Camada de Valência — VSEPR): os pares de elétrons se posicionam o mais afastados possível ao redor do átomo central. Formas comuns: linear (CO₂), angular (H₂O), trigonal plana (BF₃), piramidal (NH₃), tetraédrica (CH₄).
- **Polaridade molecular:** depende da diferença de eletronegatividade entre os átomos *e* da geometria — se os vetores de dipolo se cancelam, a molécula é apolar mesmo tendo ligações polares (ex.: CO₂); se não se cancelam, a molécula é polar (ex.: H₂O).
- **Solubilidade:** regra prática "semelhante dissolve semelhante" — substâncias polares dissolvem-se em solventes polares (água), e substâncias apolares dissolvem-se em solventes apolares (óleos).
- **Forças intermoleculares**, da mais fraca à mais forte: **Van der Waals** (dipolo induzido-induzido / forças de London, presentes em todas as moléculas, mais intensas quanto maior a massa molecular); **dipolo-dipolo** (entre moléculas polares permanentes, ex.: HCl); **ligação de hidrogênio** (quando H se liga a F, O ou N — explica o alto ponto de ebulição da água).

**Dialog Cards — "Forças intermoleculares" (arte ilustrada, assets/moleculas/):**
| Frente (arquivo) | Verso (arquivo) | Conteúdo |
|---|---|---|
| Cartão 1: Van der Waals (Forças de London) — `card-fm-van_der_waals_f.png` | `card-fm-van_der_waals_v.png` | Diagrama Cl–Cl ⋯ Cl–Cl com dipolos induzidos (δ+/δ−). Verso: presentes em todas as moléculas; criadas por dipolos temporários/induzidos; única força entre moléculas apolares (ex.: Cl₂); intensidade aumenta com a massa molecular. |
| Cartão 2: Dipolo-Dipolo — `card-fm-dipolo-dipolo_f.png` | `card-fm-dipolo-dipolo_v.png` | Diagrama δ+H–Clδ− ⋯ δ+H–Clδ−. Verso: ocorre entre moléculas polares permanentes (ex.: HCl); o polo positivo de uma molécula atrai o polo negativo da outra; mais forte que Van der Waals, mais fraca que ligação de hidrogênio. |
| Cartão 3: Ligação de Hidrogênio — `card-fm-lig-H_f.png` | `card-fm-lig-H_v.png` | Diagrama de moléculas de H₂O interligadas por pontes δ+/δ−. Verso: tipo especial e muito forte de dipolo-dipolo; ocorre quando o hidrogênio está ligado diretamente a F, O ou N; explica o alto ponto de ebulição da água. |

Este conjunto substitui a explicação puramente textual das forças intermoleculares no parágrafo teórico acima — o texto permanece como introdução, e as 3 cartas (já ilustradas, enviadas pela Prof.ª Pâmella) aprofundam cada força individualmente antes do bloco de questões.

**Bloco de questões (padrão ENEM):**

1. **[Fácil]** A regra prática "semelhante dissolve semelhante" explica por que:
   A) Substâncias apolares se dissolvem bem em água — B) **Substâncias polares tendem a se dissolver em solventes polares, e apolares em solventes apolares (correta)** — C) Todas as substâncias se dissolvem igualmente em qualquer solvente — D) Apenas sais se dissolvem em água — E) A temperatura não influencia a solubilidade
   *Feedback:* Polar dissolve polar (como a água); apolar dissolve apolar (como óleos e gorduras).

2. **[Médio]** A molécula de CO₂ possui ligações C=O polares, mas a molécula, como um todo, é apolar. Isso ocorre porque:
   A) O carbono não é eletronegativo — B) **A geometria linear da molécula faz os vetores de dipolo se cancelarem (correta)** — C) O oxigênio não participa de ligações polares — D) O CO₂ não possui ligações covalentes — E) Os átomos de oxigênio têm cargas de mesmo sinal
   *Feedback:* Na geometria linear O=C=O, os dois vetores de dipolo têm mesma intensidade e sentidos opostos, cancelando-se.

3. **[Difícil]** A água (H₂O) tem ponto de ebulição (100 °C) muito mais alto do que o esperado para uma molécula tão pequena, em comparação a outros hidretos da mesma família. Esse comportamento é explicado, principalmente, pela presença de:
   A) Forças de Van der Waals apenas — B) **Ligações de hidrogênio entre as moléculas de água (correta)** — C) Ligação iônica entre H e O — D) Ausência de qualquer força intermolecular — E) Ligação metálica entre as moléculas
   *Feedback:* A ligação de hidrogênio é a mais forte das interações intermoleculares, exigindo mais energia para ser rompida — daí o alto ponto de ebulição da água.

---

### 3.6 Transição — diálogo de revisão

> *"Ótimo trabalho lendo o mapa da Arena, {apelido}! Você já entende como os elementos se organizam e como eles se combinam. Antes da próxima lição, um bloco de revisão geral — 3 questões misturando tabela periódica e ligações químicas."*

**Bloco de Revisão Geral (padrão ENEM, mesclando os 4 tópicos):**

1. **[Fácil]** As colunas verticais da tabela periódica, que reúnem elementos com propriedades químicas semelhantes, são chamadas de:
   A) Períodos — B) **Grupos ou famílias (correta)** — C) Camadas — D) Séries — E) Blocos

2. **[Médio]** Um átomo com configuração eletrônica de valência 3s² pertence a que grupo, e qual é sua tendência de ligação?
   A) Grupo 1, tende a perder 1 elétron — B) **Grupo 2 (metais alcalino-terrosos), tende a perder 2 elétrons formando cátions 2+ (correta)** — C) Grupo 18, é inerte — D) Grupo 17, tende a ganhar 1 elétron — E) Grupo 16, tende a ganhar 2 elétrons
   *Feedback:* 3s² = 2 elétrons de valência → grupo 2; metais alcalino-terrosos tendem a perder os 2 elétrons de valência, formando cátions 2+.

3. **[Difícil]** Considere o NaCl (cloreto de sódio) e a H₂O (água). Sobre as ligações e interações presentes nessas substâncias, é correto afirmar que:
   A) Ambas apresentam apenas ligações covalentes — B) **O NaCl apresenta ligação iônica, e a água apresenta ligações covalentes polares entre H e O, além de ligações de hidrogênio entre suas moléculas (correta)** — C) O NaCl apresenta ligação metálica — D) A água não apresenta nenhuma polaridade — E) Ambas as substâncias são apolares
   *Feedback:* NaCl é um composto iônico típico (metal + ametal); a água tem ligações covalentes polares internas (O–H) e, entre moléculas diferentes, ligações de hidrogênio.

---

### 3.7 Encerramento

> *"Lição 18 completa, {apelido}! Você já sabe ler o mapa da Arena e prever como os elementos se combinam. A próxima batalha entra em território novo: ácidos, bases, sais e óxidos — as Funções Inorgânicas."*

Exibe: pontuação total acumulada, nº de acertos, nº de erros (placar global do jogador, mesmo padrão da Lição 17).

---

## 4. Resumo quantitativo da lição

| Item | Quantidade |
|---|---|
| Slides de diálogo com a Líder de Arena | 2 (transição de abertura, transição de revisão) |
| Blocos teóricos (Course Presentation) | 4 |
| Conjuntos de Dialog Cards | 3 (5 cartas + 5 cartas + 3 cartas ilustradas) |
| Branching Scenario | 1 cenário, 3 nós de decisão (Tópico 3 — confirmado) |
| Blocos de questões (Question Set) | 5 (4 por tópico + 1 revisão geral) |
| Total de questões ENEM | 15 (5 fáceis, 5 médias, 5 difíceis) |

## 5. Fontes de conteúdo aberto e assets originais utilizados

- Tabela periódica completa (Tópico 1) — Wikimedia Commons, arquivo "Periodic Table Of Elements.svg", licença Creative Commons (CC BY-SA 4.0). Uso condicionado à manutenção do crédito na legenda da imagem.
- 6 cartas ilustradas de Forças Intermoleculares (Tópico 4) — **assets originais da BIO+TECH EDUDESIGN**, salvas em `assets/moleculas/`. Não requerem crédito externo por serem autorais.
- Demais conteúdos teóricos: redação original da equipe pedagógica, com base em bibliografia consolidada de Química Geral (propriedades periódicas, ligações químicas, geometria molecular e forças intermoleculares) — sem transcrição literal de terceiros.

---
**Próximo passo:** com Branching Scenario e Dialog Cards de forças intermoleculares já confirmados, este esboço está pronto para a codificação de `licao-18.html`/`data/licao-18.js`, assim que a Lição 19 (com o bloco de duelo final) também for validada.
