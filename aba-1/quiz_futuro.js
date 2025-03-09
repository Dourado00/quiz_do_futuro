document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quiz-form");
  const submitQuiz = document.getElementById("submit-quiz");
  const quizResult = document.getElementById("quiz-result");

  submitQuiz.addEventListener("click", function () {
    const answers = {};
    const questions = quizForm.querySelectorAll(".question");

    questions.forEach((question) => {
      const questionName = question.querySelector('input[type="radio"]').name;
      const selectedOption = question.querySelector(
        `input[name="${questionName}"]:checked`
      );
      if (selectedOption) {
        answers[questionName] = selectedOption.value;
      }
    });

    const result = calcularResultado(answers);
    quizResult.innerHTML = `<h2>Para chegar lá, você precisa:</h2><p>${result}</p>`;
    quizResult.style.display = "block";
  });

  function calcularResultado(answers) {
    let recomendacoes = [];

    // Lógica para mapear respostas e gerar recomendações
    if (answers.q1 === "carreira")
      recomendacoes.push("Invista em educação continuada e networking.");
    if (answers.q1 === "familia")
      recomendacoes.push(
        "Cultive relacionamentos familiares e planeje momentos de qualidade."
      );
    if (answers.q1 === "riqueza")
      recomendacoes.push(
        "Crie um plano financeiro sólido e diversifique seus investimentos."
      );
    if (answers.q1 === "impacto")
      recomendacoes.push(
        "Envolva-se em causas sociais e projetos voluntários."
      );

    if (answers.q2 === "cidade")
      recomendacoes.push(
        "Pesquise oportunidades de emprego e moradia em grandes centros urbanos."
      );
    if (answers.q2 === "campo")
      recomendacoes.push(
        "Planeje uma transição gradual para o campo, considerando trabalho e moradia."
      );
    if (answers.q2 === "exterior")
      recomendacoes.push(
        "Aprenda um novo idioma e pesquise oportunidades de trabalho e visto no exterior."
      );
    if (answers.q2 === "praia")
      recomendacoes.push(
        "Considere carreiras que permitam trabalhar remotamente ou empreender em áreas litorâneas."
      );

    if (answers.q3 === "alta")
      recomendacoes.push(
        "Mantenha uma rotina de exercícios físicos e alimentação balanceada."
      );
    if (answers.q3 === "media")
      recomendacoes.push(
        "Incorpore atividades físicas regulares e hábitos saudáveis."
      );
    if (answers.q3 === "baixa")
      recomendacoes.push(
        "Comece com atividades leves e aumente gradualmente a intensidade."
      );

    if (answers.q4 === "trabalho")
      recomendacoes.push(
        "Desenvolva habilidades de gestão de tempo e priorização."
      );
    if (answers.q4 === "lazer")
      recomendacoes.push(
        "Equilibre trabalho e lazer, reservando tempo para hobbies e relaxamento."
      );
    if (answers.q4 === "voluntariado")
      recomendacoes.push(
        "Encontre organizações alinhadas com seus valores e dedique tempo ao voluntariado."
      );
    if (answers.q4 === "tranquilidade")
      recomendacoes.push(
        "Pratique meditação e mindfulness para reduzir o estresse."
      );

    if (answers.q5 === "alto")
      recomendacoes.push(
        "Mantenha-se atualizado com as últimas tendências tecnológicas."
      );
    if (answers.q5 === "medio")
      recomendacoes.push(
        "Utilize a tecnologia a seu favor, buscando ferramentas que facilitem sua vida."
      );
    if (answers.q5 === "baixo")
      recomendacoes.push(
        "Familiarize-se com tecnologias básicas para não ficar para trás."
      );

    if (answers.q6 === "continuo")
      recomendacoes.push(
        "Invista em cursos, workshops e livros para aprendizado constante."
      );
    if (answers.q6 === "especializado")
      recomendacoes.push(
        "Aprofunde seus conhecimentos em uma área específica."
      );
    if (answers.q6 === "nenhum")
      recomendacoes.push(
        "Explore diferentes áreas de interesse para descobrir novas paixões."
      );

    if (answers.q7 === "alto")
      recomendacoes.push(
        "Continue com o planejamento financeiro e diversifique seus investimentos."
      );
    if (answers.q7 === "medio")
      recomendacoes.push("Crie um orçamento e acompanhe seus gastos.");
    if (answers.q7 === "baixo")
      recomendacoes.push(
        "Busque educação financeira e comece a planejar seu futuro."
      );

    if (answers.q8 === "alto")
      recomendacoes.push(
        "Mantenha contato com amigos e familiares e participe de eventos sociais."
      );
    if (answers.q8 === "medio")
      recomendacoes.push(
        "Cultive relacionamentos significativos e participe de atividades em grupo."
      );
    if (answers.q8 === "baixo")
      recomendacoes.push("Saia da zona de conforto e busque novas conexões.");

    if (answers.q9 === "preventiva")
      recomendacoes.push("Adote hábitos saudáveis e faça check-ups regulares.");
    if (answers.q9 === "tratamento")
      recomendacoes.push("Siga as orientações médicas e cuide da sua saúde.");
    if (answers.q9 === "nenhum")
      recomendacoes.push(
        "Comece a se preocupar com sua saúde e adote hábitos saudáveis."
      );

    if (answers.q10 === "alto")
      recomendacoes.push("Esteja aberto a novas experiências e desafios.");
    if (answers.q10 === "medio")
      recomendacoes.push("Desenvolva sua capacidade de adaptação a mudanças.");
    if (answers.q10 === "baixo")
      recomendacoes.push(
        "Trabalhe sua flexibilidade e saia da zona de conforto."
      );

    return recomendacoes.join("<br>");
  }
});
