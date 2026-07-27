# Modelo conceitual de badges


Esse modelo conceitual de badges encontra-se dividido em três pilares essenciais: 
* **Progresso Acadêmico**:  
<img src="assets/bagdes/conquistas_de_progresso_academico.png"/>

* **Desempenho em Batalha**:
<img src="assets/bagdes/conquistas_de_desempenho_em_batalha.png"/> 

* **Sinergia com as Líderes**:
<img src="assets/bagdes/conquistas_de_sinergia_lider_arena.png"/>

Cada card genérico destes pilares deverá ser exibido na seção apresentação, arquivo `apresentacao.html`, no bloco denominado 'Como funciona a arena' e seguidos de uma breve descrição de cada pilar.

A proposta estruturada para o sistema de conquistas do Chemical Royale:

### **📚 1\. Conquistas de Progresso Acadêmico (Trilha de Conteúdo)**

Estes badges são conquistados ao finalizar cada módulo temático, independentemente de gabaritar a lição. Eles servem como recompensa de persistência e marco de jornada.

* **Aprendiz Quântico**  
  * *Requisito:* Concluir a Lição 17\.  
  * *Conceito:* O aluno dominou as fundações da matéria, compreendendo modelos atômicos e a distribuição de elétrons. Representa a construção do 
  saber atômico do zero. 
<img src="assets/bagdes/progresso_acad_aprendiz_q.png" width="70"/>

* **Prodigio  Periódico**  
  * *Requisito:* Concluir a Lição 18\.  
  * *Conceito:* O aluno decifrou o "mapa" da química (Tabela Periódica) e entendeu como os átomos se unem e interagem (ligações e geometria).
<img src="assets/bagdes/progresso_acad_prodigio_p.png" width="70"/>

* **Mentor das Soluções**  
  * *Requisito:* Concluir a Lição 19\.  
  * *Conceito:* O aluno sabe identificar, nomear e neutralizar compostos no cotidiano. O badge final da jornada teórica.
<img src="assets/bagdes/progresso_acad_mentor_das_s.png" width="70"/>  

### **⚔️ 2\. Conquistas de Desempenho em Batalha (Mecânica da Arena)**

Estes badges exigem mérito e precisão nas respostas. Eles estimulam o aluno a prestar mais atenção aos enunciados e aplicar a Teoria de Resposta ao Item (TRI) a seu favor.

| Badge | Requisito de Desbloqueio | Conceito Gamificado |
| :---- | :---- | :---- |
| <img src="assets/bagdes/desempenho_em_batalha_gabarito.png" width="70"/>| Acertar as 3 questões (Fácil, Média, Difícil) de uma única lição. | Mostra consistência e domínio total sobre um subtema específico. |
| <img src="assets/bagdes/desempenho_em_batalha_escalada.png" width="70"/> | Acertar a questão "Difícil" (a 3ª questão) de qualquer lição. | Premia o raciocínio avançado, simulando a quebra de uma questão de alto peso na TRI. |
| <img src="assets/bagdes/desempenho_em_batalha_platina.png" width="70"/> | Gabaritar toda a Trilha de Conteúdo (9 acertos consecutivos). | A conquista máxima (Platina). O aluno dominou completamente a arena e o conteúdo. |
| <img src="assets/bagdes/desempenho_em_batalha_bronze.png" width="70"/> | Chegar ao fim da Lição 19, independentemente da pontuação. | Badge de participação e resiliência, garantindo que mesmo alunos com dificuldade sintam-se recompensados. |

### **🧬 3\. Conquistas de Sinergia (Habilidades das Líderes)**

Para aumentar a rejogabilidade e o apego ao avatar escolhido, o sistema deve premiar o uso efetivo da Líder de Arena. O aluno só desbloqueia **um** destes badges por jogada, dependendo de quem ele escolheu no login.

* **Reação em Cadeia (Marie Curie)**  
  * *Requisito:* Acertar 3 questões consecutivas ativando o "Dano Contínuo" do Decaimento Alfa em seu nível máximo.  
  * *Conceito:* Foco em poder de ataque e agressividade acadêmica.  
  * <img src="assets/bagdes/sinergia_lider_reacao_em_cadeia.png" alt="Emblema Reação em Cadeia: Marie Curie" width="70"/>

* **Foco Preciso (Rosalind Franklin)**  
  * *Requisito:* Acertar uma questão "Difícil" após a habilidade "Visão de Raio-X" (que revela o contragolpe/elimina um distrator) ter sido ativada. 
  * *Conceito:* Valoriza o pensamento analítico e o uso da estratégia contra as "pegadinhas" do ENEM.
  * <img src="assets/bagdes/sinergia_lider_foco_preciso.png" alt="Emblema Foco Preciso: Rosalind Franklin" width="70"/>

* **Cristalização Perfeita (Dorothy Hodgkin)**  
  * *Requisito:* Concluir uma Lição sem sofrer reduções drásticas na barra de energia, recuperando vida graças à "Regeneração de Emergência".  
  * *Conceito:* Premia a segurança e a resiliência durante o percurso.
  * <img src="assets/bagdes/sinergia_lider_cristalizacao_perfeita.png" alt="Emblema Cristalização Perfeita: Dorothy Hodgkin" width="70"/>

* **Kevlar Intacto (Stephanie Kwolek)**  
  * *Requisito:* Errar uma questão (Fácil ou Média) mas ser salvo pela "Defesa Absoluta", e conseguir acertar a questão Difícil logo em seguida.  
  * *Conceito:* Mostra que o aluno soube usar o erro como trampolim, sem perder a confiança.
  * <img src="assets/bagdes/sinergia_lider_kevlar_intacto.png" alt="Emblema Kevlar Intacto: Stephanie Kwolek" width="70"/>

* **Síntese Acelerada (Ada Yonath)**  
  * *Requisito:* Bater um recorde de PEQ (Pontos de Energia Química) em uma única lição acumulando os bônus da "Multiplicação Rápida".  
  * *Conceito:* Focado puramente na acumulação rápida de recursos e economia do jogo.
  * <img src="assets/bagdes/sinergia_lider_sintese_acelerada.png" alt="Emblema Síntese Acelerada: Ada Yonath" width="70"/>

Desta forma, os badges contam a história do percurso do estudante, valorizando tanto o conhecimento técnico de química quanto o estilo de jogo dele na Arena.  

Para o 'Hall da Fama' (Leaderboard), definido pelo background `assets/bagdes/background_leaderboard.png`, será necessário gerar o sistema de sobreposição das informações armazenado `localStorage`.