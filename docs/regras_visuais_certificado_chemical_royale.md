# 🎓 Regras Visuais e Estrutura: Certificado PDF - Chemical Royale

Este documento estabelece as diretrizes de design e a estrutura de dados para a geração do **Certificado de Conclusão em PDF** da plataforma *Chemical Royale*. O layout deve equilibrar a estética de arena gamificada com a formalidade institucional exigida para adoção por redes públicas de ensino e secretarias de educação (modelo B2G2B).

## 1. 📐 Filosofia de Design e Layout Base
* **Estética "Tech-Institucional":** Uma mescla entre elementos holográficos sutis, tipografia limpa e um fundo texturizado que lembre documentos acadêmicos modernos. 
* **Modos de Cor:** O certificado deve ter um fundo preferencialmente claro (off-white ou cinza muito claro) para viabilizar a impressão pelas escolas, mantendo os detalhes em neon (usando as variáveis `--accent-plasma`, `--accent-ion`, `--accent-quantum`) apenas como adornos nas bordas e nas chancelas.
* **Tipografia:** Fontes sem serifa, de alta legibilidade (ex: Roboto, Inter ou Montserrat) para os dados do aluno e texto institucional, reservando a tipografia "gamer/futurista" apenas para o título principal ("Mestre da Arena" ou "Chemical Royale").

## 2. 🏛️ Cabeçalho (Header Institucional)
* **Co-branding:** O cabeçalho deve prever o alinhamento horizontal de três logos:
    1. À esquerda: Logo da **BIO+TECH EDUDESIGN** e do *Chemical Royale*.
    2. Ao centro: Título do certificado.
    3. À direita: Espaço reservado e dinâmico para o **Brasão/Logo da Secretaria de Educação ou Escola** parceira.
* **Grafismo:** Uma linha superior fina utilizando o gradiente da paleta do jogo, conectando os elementos visuais.

## 3. 👤 Corpo do Certificado (Dados do Aluno e Conquista)
* **Título da Conquista:** "Certificado de Conclusão de Trilha" ou "Título: Mestre dos Elementos".
* **Nome do Aluno:** Centralizado, em destaque, utilizando fonte em negrito e tamanho grande.
* **Texto de Certificação:** Texto padrão e formal informando que o aluno concluiu a trilha de Química com foco em preparação para o ENEM, dominando as habilidades propostas pelas líderes da arena.

## 4. 📊 Painel de Validação Pedagógica (Foco Curricular)
* **Métricas de Desempenho:** Uma seção em formato de "HUD simplificado" que exibe os PEQs (Pontos de Energia Química) acumulados e a taxa de acerto do aluno.
* **Alinhamento Curricular:** Uma lista ou grid em destaque contendo as **Competências e Habilidades da BNCC** validadas durante o jogo (ex: EM13CNT101, EM13CNT203). Isso confere peso pedagógico real ao documento para os gestores.
* **Carga Horária:** Indicativo claro das horas equivalentes de estudo e resolução de problemas.

## 5. ✒️ Rodapé e Autenticidade (Footer)
* **Assinaturas:** Espaço digital para a assinatura da Coordenação Pedagógica da rede e da direção da plataforma.
* **Badge Final:** A inserção da Badge de "Conquista de Sinergia" máxima alcançada pelo aluno no centro inferior.
* **Validação Digital:** Um QR Code funcional posicionado no canto inferior direito para verificação de autenticidade do documento na plataforma, acompanhado da data de emissão e um hash exclusivo de validação.
