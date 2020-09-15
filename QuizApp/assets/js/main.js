let quizForm = document.querySelector("#quiz-form")
let submitButton = document.querySelector("#quiz-submit")

const correctAnswer = ["d","b","b","c"]

if (quizForm.attachEvent) {
    quizForm.attachEvent("submit", processForm);
} else {
    quizForm.addEventListener("submit", processForm);
}

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    let score = 0;
    let userAnswer = [quizForm.qn1.value,quizForm.qn2.value,quizForm.qn3.value,quizForm.qn4.value]

    correctAnswer.forEach((correctAnswerItem,correctAnswerIndex)=>{
        correctAnswerItem===userAnswer[correctAnswerIndex] ? score+=1:undefined;
    })

    quizForm.reset();

    alert("Score is : "+score)

    return false;
}
