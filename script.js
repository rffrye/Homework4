// creating array of question objects
    var questions = [
        {
            question: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        },
        {
            question: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
        },
        {
            question: "Arrays in Javascript can be used to store ____",
            choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: "all of the above"
        },
        {
            question: "String values must be enclosed within ____ when being assigned to variables.",
            choices: ["commas", "curly brackets", "quotes", "parenthesis"],
            answer: "quotes"
        },
        {
            question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
            choices: ["Javascript", "terminal / bash", "for loops", "console log"],
            answer: "console log"
        },
        {
            question: "Which is not a foundational language in Web Development?",
            choices: ["Javascript", "CSS", "HTML", "Chinstrap"],
            answer: "Chinstrap"
        },
        {
            question: "What does CSS stand for?",
            choices: ["Character Selection Screen", "Chicken Salad Sandwich", "Cascading Style Sheets", "Cybernet Software Systems"],
            answer: "Cascading Style Sheets"
        },
    ];
   
   
    var score = 0;
    var qIndex = 0;
    var timeLeft = document.querySelector("#currentTime");
    var timer = document.querySelector("#startTimer");
    var questionDiv = document.querySelector("#questionDiv");
    var container = document.querySelector("#container")
    var ulItem = document.createElement("ul")
    var seconds = 90; //15 seconds per question
    var holdInt = 0;
    var penalty = 10;
    

//  Quiz start timer function

timer.addEventListener("click", function() {
    if (holdInt === 0) {
        holdInt = setInterval(function () {
            seconds--;
            timeLeft.textContent="Time: " + seconds;

            if (seconds <= 0) {
                clearInterval(holdInt);
                allDone();
                timeLeft.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(qIndex);
});
document.get

// Renders questions and choices to page: 
function render(qIndex) {
    // Clears existing data 
    questionDiv.innerHTML = "";
    ulItem.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[qIndex].question;
        var userChoices = questions[qIndex].choices;
        questionDiv.textContent = userQuestion;
    };
}