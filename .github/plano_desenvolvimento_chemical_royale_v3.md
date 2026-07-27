# 🧪 Plano de Desenvolvimento: Chemical Royale - A Arena dos Elementos (Versão 3)

Este documento detalha o plano de ação para as Sprints 4 e 5 do projeto **Chemical Royale**, focado na implementação da **Versão 3 (Completa)**. O objetivo é transformar o ambiente de aprendizagem em um jogo robusto com economia interna, habilidades passivas funcionais, eventos surpresa e um sistema de reconhecimento (conquistas e leaderboard).

---

## 🏃 Sprint 4: Mecânicas de Jogo e Economia Química
**Foco:** Implementar o núcleo de gamificação, incluindo habilidades passivas, eventos surpresa e o sistema de Pontos de Energia Química (PEQ).

### 4.1. Core de Programação (IA Especialista: GitHub Copilot / ChatGPT-4o)
Implementação da lógica funcional no `licoes-engine.js` e expansão do `js/state.js`.

*   **Tarefa 1: Sistema de Recursos (PEQ)**
    *   **Descrição:** Criar a lógica de ganho de PEQ baseado na dificuldade da questão e gerenciar o saldo no `localStorage`.
    *   **Prompt Sugerido:** 
        > "Atue como um Desenvolvedor Senior JavaScript. Preciso expandir o arquivo `js/state.js` do projeto Chemical Royale para incluir um sistema de 'Pontos de Energia Química (PEQ)'. Adicione uma propriedade `peq` ao objeto de estado inicial. Crie uma função `atualizarPEQ(quantidade)` que some ou subtraia pontos e salve no localStorage. Altere a função `registrarResposta` para que, em caso de acerto, o jogador receba PEQ proporcional à dificuldade: fácil (1), média (2), difícil (3)."

*   **Tarefa 2: Habilidades Passivas Funcionais**
    *   **Descrição:** Codificar os efeitos reais das habilidades das Líderes de Arena durante os quizzes.
    *   **Prompt Sugerido:** 
        > "No arquivo `js/licoes-engine.js`, implemente uma função `aplicarHabilidadePassiva()` que seja chamada no início de cada quiz. Use o `avatarId` do `CRState` para determinar o efeito: se for 'rosalind-franklin', remova aleatoriamente uma alternativa incorreta de uma questão por lição. Se for 'stephanie-kwolek', permita que o primeiro erro no quiz não subtraia vida/pontos. Retorne um objeto com a lógica de ativação para cada um dos 5 avatares definidos no catálogo."

### 4.2. Design e Visual (IA Especialista: Gemini / Nanobanana)
Criação de assets visuais para o HUD e feedback de habilidades.

*   **Tarefa 3: HUD de Arena e Ícones de Recursos**
    *   **Descrição:** Gerar a interface de exibição de pontos e PEQ que ficará fixa durante as lições.
    *   **Prompt Sugerido (Nanobanana):** 
        > "Crie um conjunto de elementos de interface (UI) para um jogo de química estilo Clash Royale. Inclua: 1. Um ícone de 'Energia Química' (uma ampola de laboratório brilhante com líquido azul neon). 2. Um painel de exibição de saldo metálico com bordas de neon. 3. Pequenos ícones representando as habilidades das 5 cientistas (átomo para Curie, DNA para Franklin, cristal para Hodgkin, escudo de Kevlar para Kwolek, ribossomo para Yonath). Estilo: Futurista, limpo, alta resolução."

---

## 🏃 Sprint 5: Eventos, Conquistas e Deploy Final
**Foco:** Adicionar imprevisibilidade com eventos surpresa, implementar o sistema de conquistas e realizar o deploy oficial.

### 5.1. Narrativa e Eventos (IA Especialista: Claude 3.5 Sonnet / Gemini)
Criação de conteúdo dinâmico e eventos baseados no storytelling.

*   **Tarefa 1: Gerador de Eventos Surpresa**
    *   **Descrição:** Criar pequenos scripts de eventos que interrompem a lição com desafios rápidos denominado "É fato ou fake?" relacionando aos fatos reais e científicos, na perspectiva de colaborar com o combate à desinformação e ao negacionismo científico.
    *   **Prompt Sugerido:** 
        > "Atue como um Game Designer. Com base nas 3 vertentes narrativas do Chemical Royale (Jornada do Herói, In Media Res, Investigativo), escreva 5 'Eventos Surpresa' curtos em formato JSON. Cada evento deve ter um 'gatilho' (ex: após 3 acertos seguidos), um texto de impacto da Líder de Arena e um desafio rápido (ex: 'A Entropia está instabilizando este átomo! Identifique o número de prótons em 30 segundos para ganhar 5 PEQ extras'). Criar um sistema de loja para gastar o PEQ acumulado por habilidades ou itens de ajuda que poderão ser utilizadas no percurso."

### 5.2. Gamificação Social e Relatórios (IA Especialista: ChatGPT-4o)
Implementação do Leaderboard e automação de relatórios em PDF.

*   **Tarefa 2: Leaderboard Local e Medalhas**
    *   **Descrição:** Criar a visualização dos melhores jogadores e o sistema de badges.
    *   **Prompt Sugerido:** 
        > "Crie um componente HTML/CSS/JS para um 'Hall da Fama' (Leaderboard) que utilize o background `assets/badges/background_leaderboard.png`. Ele deve ler o ranking do `localStorage` e exibir os 10 melhores scores com um design de 'Arena'. Além disso, crie uma função `verificarConquistas()` que desbloqueie a(s) conquista(s) descrita(s) no arquivo `docs/modelo-conceitual-de-badges.md` como 'Mentor das Soluções' (completar a Lição 19 sem erros) e salve uma lista de IDs de conquistas no perfil do jogador."

*   **Tarefa 3: Automação de PDF e E-mail (EmailJS / jsPDF)**
    *   **Descrição:** Finalizar o script que envia o desempenho do aluno para a coordenação.
    *   **Prompt Sugerido:** 
        > "Escreva um script JavaScript usando as bibliotecas jsPDF e EmailJS. O script deve: 1. Capturar todos os dados do `CRState` (nome, escola, score final, conquistas). 2. Gerar um certificado em PDF elegante com o logo centralizado do Chemical Royale e ao canto superior o logo da BIO+TECH EDUDESIGN. 3 contendo as bagdes e o compilado das informações de identificação do estudante e de sua jornada percorrida. Enviar esse PDF automaticamente para o e-mail 'pamella.balcacar@edu.mt.gov.br' assim que o aluno clicar em 'Concluir a Jornada'."


*   **Tarefa 4: Documentação técnica, acadêmica e pedagógica**
    *   **Descrição:** Criar e gerar documentação para armazenado no repositório.
    *   **Prompt Sugerido:** 
        > "Atue como um Product Owner. Preciso expandir os arquivos de documentação na raiz da pasta `docs/` do projeto Chemical Royale para incluir:  Guia Dev `guia_dev.md` (contendo todo o processo de desenvolvimento: cada sprint e suas tarefas, os bugs detectados, os corrijidos e as sugestões de implementação futura); Tutorial de usuário-aluno `tutorial_usuario.md` (tutorial de sistema de jogo - ex: como usar algum recurso) e Relatório IA `report_ia` (as boas práticas de IA responsável no projeto educacional, Human-in-the-loop e transparência recomendadas por UNESCO, OCDE e marcos regulatórios emergentes). Atualize o arquivo README.md transformando em um arquivo clean contendo as informações essenciais e os referências dos demais documentos que estarão na pasta `docs/`."
        > "Atue como um Designer instrucional. Preciso expandir os arquivos da documentação na raiz da pasta `docs/` do projeto Chemical Royale para incluir:  Guia pedagógico `guia_pedagogico.md` (Apresentação do produto educacional; Paradigma educacional e as teorias de aprendizagem; Alinhamento a BNCC e outros marcos legais: competências gerais  BNCC, as competências da BNCC de área da Ciência da Natureza e suas tecnológias, as habilidades específicas da BNCC para química, BNCC computação ensino médio, descritores do SAEB, habilidades do INEP/ENEM; orientações de uso deste REA aos docentes; sugestões pedagógicas); Revisão de Literatura `esboço_artigo.md` (Elementos Pré-Textuais: Título: Nome claro e direto do estudo. Autoria: Nome completo dos autores e dados em nota de rodapé. Resumo: Síntese de até 250 palavras com objetivos, método e resultados. Palavras-chave: Termos que definem o tema para buscas. Elementos Textuais (O Corpo do Texto): Introdução; Metodologia; Resultados e Discussão;  Conclusão (ou Considerações Finais); Elementos Pós-Textuais: Referências; Apêndices ou Anexos)."
---

## 🛠️ Guia de Integração de IA por Especialidade

| Especialidade | IA Recomendada | Papel no Projeto |
| :--- | :--- | :--- |
| **Desenvolvedor Full-Stack** | GitHub Copilot / Claude | Lógica complexa de JS, manipulação de DOM e LocalStorage. |
| **Designer de UI/UX** | Gemini / Nanobanana | Geração de assets, ícones de habilidades, bagdes, background de Leaderboard e mockups de interface. |
| **Designer instrucional** | Perplexity | Revisão de questões padrão ENEM, alinhamento com a BNCC, a produção da documentação pedagógica e acadêmica. |
| **Game Designer** | Claude / ChatGPT | Criação de eventos surpresa, balanceamento de PEQ e storytelling. |
| **Product Owner** | Manus | Coordenação e revisão do projeto, produção da documentação técnica. | 

---

## ✅ Critérios de Sucesso (Definition of Done)
1.  [ ] Habilidades passivas alteram funcionalmente o comportamento dos quizzes.
2.  [ ] Saldo de PEQ é persistente entre as lições.
3.  [ ] Eventos surpresa ocorrem de forma fluida sem quebrar o motor de lições.
4.  [ ] O PDF final contém o resumo completo da jornada e é enviado com sucesso.
5.  [ ] O Leaderboard exibe corretamente os dados locais.

---
**Assinado:** *Manus AI - Product Owner*
**Chancela:** *BIO+TECH EDUDESIGN*
