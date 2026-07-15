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
        > "Atue como um Game Designer. Com base nas 3 vertentes narrativas do Chemical Royale (Jornada do Herói, In Media Res, Investigativo), escreva 5 'Eventos Surpresa' curtos em formato JSON. Cada evento deve ter um 'gatilho' (ex: após 3 acertos seguidos), um texto de impacto da Líder de Arena e um desafio rápido (ex: 'A Entropia está instabilizando este átomo! Identifique o número de prótons em 10 segundos para ganhar 5 PEQ extras')."

### 5.2. Gamificação Social e Relatórios (IA Especialista: ChatGPT-4o)
Implementação do Leaderboard e automação de relatórios em PDF.

*   **Tarefa 2: Leaderboard Local e Medalhas**
    *   **Descrição:** Criar a visualização dos melhores jogadores e o sistema de badges.
    *   **Prompt Sugerido:** 
        > "Crie um componente HTML/CSS/JS para um 'Hall da Fama' (Leaderboard). Ele deve ler o ranking do `localStorage` e exibir os 10 melhores scores com um design de 'Arena'. Além disso, crie uma função `verificarConquistas()` que desbloqueie medalhas como 'Mestre dos Ácidos' (completar Lição 19 sem erros) e salve uma lista de IDs de conquistas no perfil do jogador."

*   **Tarefa 3: Automação de PDF e E-mail (EmailJS / jsPDF)**
    *   **Descrição:** Finalizar o script que envia o desempenho do aluno para a coordenação.
    *   **Prompt Sugerido:** 
        > "Escreva um script JavaScript usando as bibliotecas jsPDF e EmailJS. O script deve: 1. Capturar todos os dados do `CRState` (nome, escola, score final, conquistas). 2. Gerar um certificado em PDF elegante com o logo da BIO+TECH EDUDESIGN. 3. Enviar esse PDF automaticamente para o e-mail 'pamella.balcacar@edu.mt.gov.br' assim que o aluno clicar em 'Concluir Jornada'."

---

## 🛠️ Guia de Integração de IA por Especialidade

| Especialidade | IA Recomendada | Papel no Projeto |
| :--- | :--- | :--- |
| **Desenvolvedor Full-Stack** | GitHub Copilot / ChatGPT-4o | Lógica complexa de JS, manipulação de DOM e LocalStorage. |
| **Designer de UI/UX** | Gemini / Nanobanana | Geração de assets, ícones de habilidades e mockups de interface. |
| **Especialista Pedagógico** | Claude 3.5 Sonnet | Revisão de questões padrão ENEM e alinhamento com a BNCC. |
| **Game Designer** | Claude / ChatGPT | Criação de eventos surpresa, balanceamento de PEQ e storytelling. |

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
