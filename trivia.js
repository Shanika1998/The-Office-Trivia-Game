const questions = [
    {
        question:"Who dates Pam's mother?",
        options:['Michael','Creed', 'Pam', 'Stanley' ],
        correctAnswer: 0
    },
    {
        question:"What is Michael’s favorite restaurant?",
        options:['Olive Garden','Red Lobster', 'Chilis', 'Five Guys'],
        correctAnswer: 2
        
        
    },
    {
        question:"Where does Jim propose to Pam?",
        options:['The office','Parking Lot', 'Home', 'Holiday Party'],
        correctAnswer: 1
    },

]

let currentQuestion = 0
let score = 0

function loadQuestion() {
    const questionElement = document.getElementById('question')
    const optionsElement = document.getElementById('options')
    if (currentQuestion === questions.length) {
        showResults()
        submitButton.style.display = 'none'
        startOverButton.style.display = 'block'
        return
      }
    
    const triviaItem = questions[currentQuestion]
    questionElement.textContent = triviaItem.question
    optionsElement.innerHTML = ''
  
    triviaItem.options.forEach((option, index) => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option
      optionButton.onclick = function() {
        checkAnswer(index)
      }
      optionsElement.appendChild(optionButton);
    })
  }

  function checkAnswer(selected) {
    const triviaItem = questions[currentQuestion];
  
    if (selected === triviaItem.correctAnswer) {
      score++;
      document.getElementById('result').textContent = 'Correct!'
    } else {
      document.getElementById('result').textContent = 'Incorrect!'
    }
    
    currentQuestion++
    loadQuestion()
}
    function startOver() {
        currentQuestion = 0
        score = 0;
        document.getElementById('result').textContent = ''
        loadQuestion()
      }
   

  function showResults() {
    const questionElement = document.getElementById('question')
    questionElement.textContent = `Quiz Complete! You scored ${score} out of ${questions.length}.`
  }

  // Start the trivia game
  loadQuestion();