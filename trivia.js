const submitBtn = document.getElementById('submit');
const nextButton = document.getElementById('next-button');
const questionBox = document.getElementById('question-box');
const questionElement = document.getElementById('question');
const trueBtn = document.getElementById('True')
const falseBtn = document.getElementById('False')
const answerButtonsElement = document.getElementById('answer-buttons')
const playerScore = document.getElementById('player-score');
const totalScore = document.getElementById('total-score');

let currentQuestion = 0;
var score =0;

const questions = [
    {
        question:"Who dates Pam's mother?",
        answers:[
            {option:"Michael", correct:true},
            {option:"Dwight", correct:false},
            
        ]
    },
    {
        question:"What is Michael’s favorite restaurant?",
        answers:[
            {option:"Olive Garden", correct:true},
            {option:"Chili's", correct:false},
        
        ]
    },
    {
        question:"Where does Jim propose to Pam?",
        answers:[
            {option:"The office", correct:true},
            {option:"The parking lot", correct:false},
            

        ]
    },

]

nextButton.addEventListener('click', next)
submitBtn.addEventListener('click',submit)

function beginQuiz(){
    currentQuestion =0
    totalScore.innerHTML = questions.length;
    questionElement.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML=questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer){
            if(score<3){
                score++
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<2){
            next()
        }
    }
    falseBtn.innerHTML=questions[currentQuestion].answers[1].option
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer){
            if(score<3){
                score++
            }
        }
        playerScore.innerHTML = score
        if(currentQuestion<2){
            next()
        }
    }
}
beginQuiz()

function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextButton.classList.add("hide");
    }
    questionElement.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
 
        }
        playerScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
} 
      function submit() {
        nextButton.classList.add("hide");
        submitBtn.classList.add("hide");
        trueBtn.classList.add("hide");
        falseBtn.classList.add("hide");   
        questionElement.innerHTML ="Congratulations on submitting the Quiz!"
     }

