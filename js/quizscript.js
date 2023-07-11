var quizData = [
    {
      question: "When is feasibility study done?",
      choices: ["A. After requirements specifications have been finalized ", "B. During the period when requirements specifications are prepared", "C. Before the final requirements specifications are done", "D. Could be done at eny time"],
      answer: 2
    },
    {
      question: "A good requirement specification is one, which is",
      choices: ["A. Consistent ", "B. Complete", "C. Unambiguous", "D. All of the above"],
      answer: 3
    },
    {
      question: "Requirement specification is done",
      choices: ["A. After requirements are determined ", "B. Before requirements are determined ", "C. Simultaneously with requirements determination ", "D. Independent of requirements determination"],
      answer: 0
    }
  ];
  
  var quizContainer = document.getElementById("quiz");
  
  function buildQuiz() {
    var output = "";
  
    quizData.forEach(function(question, index) {
      var choices = "";
  
      question.choices.forEach(function(choice) {
        choices += '<label><input type="radio" name="question' + index + '" value="' + question.choices.indexOf(choice) + '">' + choice + '</label><br>';
      });
  
      output += '<div><h5>Question ' + (index + 1) + ':</h5><p>' + question.question + '</p>' + choices + '</div>';
    });
  
    quizContainer.innerHTML = output;
  }
  
  function submitQuiz() {
    var score = 0;
  
    quizData.forEach(function(question, index) {
      var selectedChoice = document.querySelector('input[name="question' + index + '"]:checked');
  
      if (selectedChoice && selectedChoice.value == question.answer) {
        score++;
      }
    });
  document.getElementById("result-quiz").innerHTML="You scored " + score + " out of " + quizData.length;
   // alert("You scored " + score + " out of " + quizData.length);
  }
  
  buildQuiz();
  