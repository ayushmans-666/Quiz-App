const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Control Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<code>"],
        answer: "<script>"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "background-color", "bgcolor", "background"],
        answer: "background-color"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => selectOption(li, q.answer));
        optionsEl.appendChild(li);
    });
}

function selectOption(selectedLi, correctAnswer) {
    if (selectedLi.textContent === correctAnswer) {
        selectedLi.style.background = "green";
        score++;
    } else {
        selectedLi.style.background = "red";
    }
    Array.from(optionsEl.children).forEach(li => li.style.pointerEvents = "none");
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreEl.textContent = score;
    totalEl.textContent = quizData.length;
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
    loadQuestion();
});

loadQuestion();
