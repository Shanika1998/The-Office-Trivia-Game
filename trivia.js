//intialization 
const submitBtn = document.getElementById('submit');
const nextButton = document.getElementById('next-button');
const questionBox = document.getElementById('question-box');
const questionElement = document.getElementById('question');
const trueBtn = document.getElementById('True')
const falseBtn = document.getElementById('False')
const answerButtonsElement = document.getElementById('answer-buttons')
const playerScore = document.getElementById('player-score');
const totalScore = document.getElementById('total-score');
// Starting score 
let currentQuestion = 0;
let score =0;

//Questions for the trivia
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
//Adding an event to buttons
nextButton.addEventListener('click', next)
submitBtn.addEventListener('click',submit)
//Beginning the Quiz, inputting questions and answer choices into the question element and answer buttons
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
        playerScore.innerText = score++;
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
        playerScore.innerText= score
        if(currentQuestion<2){
            next()
        }
    }
}
beginQuiz()

function next() {
    currentQuestion++;
    if(currentQuestion >= 3) {
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

        playerScore.innerText = score++;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score;
            }
 
        }
        playerScore.innerText = score;
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
        if(playerScore === totalScore){
            questionElement.innerHTML ="Congratulations on submitting the Quiz! 100%!"
        }else {
            questionElement.innerHTML = "Better luck next"
        }
     }

