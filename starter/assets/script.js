// step 1: be able to create questions and answers
// we need object that can store or questions and answers 

var questions = {
    question1: {
        question: "Am I understanding Javascript?",
        answers: ["Yes", "No", "Kind of"],
        correct: "Kind of",
    },
    question2: {
        question: "is Andrew being helpful?",
        answers: ["Yes", "No", "Kind of"],
        correct: "Yes",
    }
}

console.log(questions)
console.log(questions)
console.log(questions.question1.question, questions.question1.correct)
console.log(questions.question2.question,"This is question two's question")
    
//    "Am I understanding Javascript?",
//     answerOneOptions: [
//         "Yes",
//         "No",
//         "Kind of"
//     ],
//     answerOne: "Kind of",


// step 2: write down the questions and answers on the webpage
var questionElements = document.getElementById("question-title")
console.log(questionElements)

questionElements.textContent = questions.question1.question

var buttonElement = document.getElementById("start")

buttonElement.addEventListener("click", function() {
   var questionsElement = document.getElementById("questions")
   questionsElement.classList.remove("hide")
})

var answerChoices = document.getElementById("choices")

var ul = document.createElement("ul")
answerChoices.appendChild(ul)
//add answer choices within ul




//array.forEach(item, function () {console.log(item)}

console.log(questions.question1.answers.forEach(function(item){
    console.log(item)
}))

//forEach is a loop within an array, to look for each item in an array

// be able to check the answers are correct

