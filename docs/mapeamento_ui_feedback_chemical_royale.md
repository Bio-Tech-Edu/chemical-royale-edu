# 🗺️ Mapeamento de UI Feedback e Estados Visuais - Chemical Royale

Este documento descreve os fluxogramas de interação e os estados visuais da interface para o **Chemical Royale: A Arena dos Elementos**. O objetivo é garantir que cada microinteração forneça um feedback claro para o aluno, mantendo o engajamento gamificado e gerando dados rastreáveis para acompanhamento pedagógico pelas redes de ensino (foco B2G2B).

## 1. ✅ Estado Visual: Acerto (Resposta Correta)
* **Gatilho:** O aluno seleciona a alternativa correta na questão padrão ENEM.
* **Animação de Interface:** 
    * O card da questão pulsa com um **brilho expansivo na cor `--accent-plasma`** (ou `--accent-gold` dependendo do nível de dificuldade).
    * Partículas holográficas sobem a partir do botão selecionado.
* **Atualização do HUD:** O contador de PEQ (Pontos de Energia Química) tem uma animação de "enchimento" da ampola, acompanhada de um som ascendente de energia sintética.
* **Fluxo Pedagógico:** Transição suave para a tela de recompensa/explicação rápida e, em seguida, liberação do próximo desafio.

## 2. ❌ Estado Visual: Erro (Instabilidade/Entropia)
* **Gatilho:** O aluno seleciona uma alternativa incorreta.
* **Animação de Interface:**
    * Efeito de **"Glitch" ou Instabilidade**: A tela sofre um leve *shake* (tremor) de 0.3 segundos.
    * A borda da tela e a alternativa errada piscam brevemente em vermelho escuro com textura de "entropia" ou interferência estática.
* **Atualização do HUD:** O contador de PEQ não diminui (para evitar frustração excessiva), mas o ícone da ampola pisca indicando falha na síntese.
* **Fluxo Pedagógico (Resgate):** Uma janela de "Dica da Líder" (ex: Marie Curie ou Rosalind Franklin) desliza pela tela oferecendo um *hint* (dica) focado na habilidade da BNCC cobrada, permitindo uma nova tentativa com pontuação reduzida.

## 3. 🧬 Estado Visual: Ativação de Habilidade Passiva (Líderes)
* **Gatilho:** O aluno atinge um combo de acertos ou cumpre um requisito específico da cientista escolhida como avatar.
* **Animação de Interface:**
    * **Overlay Cinemático:** A tela escurece levemente (dimming de 40%) e uma ilustração no estilo "splash art" da cientista aparece rapidamente com um rastro neon luminoso.
    * **Efeito Específico:** 
        * *Franklin:* Feixes de luz revelando a estrutura do DNA em background (revelando alternativas incorretas).
        * *Curie:* Brilho radiante verde-néon eliminando "respostas tóxicas".
* **Atualização do HUD:** O ícone da habilidade no HUD central acende permanentemente com uma aura neon (`--accent-ion`).

## 4. ⚠️ Estado Visual: Ocorrência de Evento Surpresa
* **Gatilho:** Ativação aleatória ou programada pelo sistema (ex: "Chuva de Ácido", "Pico de Radiação").
* **Animação de Interface:**
    * **Alerta Geral:** Uma barra de aviso no estilo "Police Line / Warning" atravessa o topo e a base da tela.
    * **Shift de Paleta:** Toda a iluminação do ambiente virtual altera sua matriz. (ex: Tons esverdeados para "Radiação", tons azuis frios para "Congelamento Termodinâmico").
* **Fluxo Pedagógico:** Um modal holográfico aparece no centro da tela explicando a nova regra temporária da arena (ex: "Nesta rodada, questões de Termoquímica valem o dobro de PEQ!").

## 5. 📊 Diretrizes de Acessibilidade e Escalabilidade
* **Contraste Dinâmico:** Todos os efeitos de brilho e glitch devem ter um modo de "Alta Legibilidade / Redução de Movimento" nas configurações, garantindo a conformidade com as diretrizes de acessibilidade e o ECA Digital.
* **Design Sistêmico:** As animações são desenhadas em CSS e Lottie/SVG para garantir máxima performance tanto em web quanto em dispositivos móveis utilizados nas escolas públicas.
