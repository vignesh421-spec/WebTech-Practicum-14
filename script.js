
 
var questions = [ 
    { 
        question: "Which HTML tag is used to create a link?", 
        options: ["&lt;p&gt;", "&lt;a&gt;", "&lt;h1&gt;", "&lt;img&gt;"], 
        answer: 1 
    }, 
    { 
        question: "Which CSS property changes text color?", 
        options: ["background", "font-size", "color", "margin"], 
        answer: 2 
    }, 
    { 
        question: "Which keyword declares a variable in JavaScript?", 
        options: ["var", "style", "html", "link"], 
        answer: 0 
    }, 
    { 
        question: "Which HTML tag is used to display an image?", 
        options: ["&lt;table&gt;", "&lt;img&gt;", "&lt;div&gt;", "&lt;br&gt;"], 
        answer: 1 
    }, 
    { 
       question: "Which CSS property is used for rounded corners?", 
        options: ["padding", "border", "border-radius", "width"], 
        answer: 2 
    } 
]; 
 
var currentQuestion = 0; 
var score = 0; 
 
function displayQuestion() { 
    var q = questions[currentQuestion]; 
 
    document.getElementById("progress").textContent = 
        "Question " + (currentQuestion + 1) + 
        " of " + questions.length; 
 
    document.getElementById("question").textContent = 
        q.question; 
 
    let optionsHTML = ""; 
 
    for (var i = 0; i < q.options.length; i++) { 
        optionsHTML += 
            '<label class="option">' + 
            '<input type="radio" name="answer" value="' + i + '">' + 
            q.options[i] + 
            '</label>'; 
    } 
 
    document.getElementById("options").innerHTML = 
        optionsHTML; 
 
    document.getElementById("result").textContent = ""; 
 
    document.getElementById("nextBtn").textContent = 
        "Next"; 
 
    document.getElementById("nextBtn").onclick = 
        nextQuestion; 
} 
 
function nextQuestion() { 
    let selected = document.querySelector( 
        'input[name="answer"]:checked' 
    ); 
 
    if (selected === null) { 
        document.getElementById("result").style.color = "red"; 
        document.getElementById("result").textContent = 
            "Please select an answer!"; 
        return; 
    } 
 
    if (Number(selected.value) === 
        questions[currentQuestion].answer) { 
        score++; 
    } 
 
currentQuestion++; 
if (currentQuestion < questions.length) { 
displayQuestion(); 
} 
else { 
showResult(); 
} 
} 
function showResult() { 
document.getElementById("question").textContent = 
"Quiz Completed!"; 
document.getElementById("options").innerHTML = ""; 
document.getElementById("progress").textContent = 
"All questions completed."; 
document.getElementById("result").style.color = "green"; 
document.getElementById("result").textContent = 
"Your Score: " + score + " / " + questions.length; 
document.getElementById("nextBtn").textContent = 
"Restart Quiz"; 
document.getElementById("nextBtn").onclick = 
restartQuiz; 
} 
function restartQuiz() { 
currentQuestion = 0; 
score = 0; 
displayQuestion(); 
} 
displayQuestion(); 
