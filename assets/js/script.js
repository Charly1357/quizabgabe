const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".app");
// if startQuiz button clicked
start_btn.onclick = () => {
    console.log("Gundula");
    info_box.classList.add("activeInfo"); //show info box

};

// if exitQuiz button clicked
exit_btn.onclick = () => {
    console.log("Britta");
    info_box.classList.remove("activeInfo"); //hide info box
};

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    console.log("Charlilein");
    quiz_box.classList.add("activeQuiz"); //show quiz box
    /*showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function*/
};
const questions = [
    {
        question: "Which is the largest City in the world?",
        answers: [
            { text: "Sao Paulo", correct: false },
            { text: "Delhi", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Shanghai", correct: false },
        ]
    },
    {
        question: "Which is the richest Country in the world?",
        answers: [
            { text: "Switzerland", correct: false },
            { text: "Norway", correct: false },
            { text: "Luxemburg", correct: false },
            { text: "Liechtenstein", correct: true },
        ]
    },
    {
        question: "Which is the happiest Country in the world?",
        answers: [
            { text: "Iceland", correct: false },
            { text: "Finnland", correct: true },
            { text: "Denmark", correct: false },
            { text: "Switzerland", correct: false },
        ]
    },
    {
        question: "Which is the most innovative Country in the world?",
        answers: [
            { text: "Switzerland", correct: true },
            { text: "United Kingdom", correct: false },
            { text: "United States of America", correct: false },
            { text: "Sweden", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;



    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
    //nextButton.addEventListener("click",()=>alert("Play again"));
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();


























