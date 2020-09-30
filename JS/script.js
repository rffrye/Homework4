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
   
//    Variables
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

// Renders questions and choices to page: 
function render(qIndex) {
    questionDiv.innerHTML = "";
    ulItem.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[qIndex].question;
        var userChoices = questions[qIndex].choices;
        questionDiv.textContent = userQuestion;
    };
    // New for each for choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("input");
        listItem.type = "button";
        listItem.className ="btn btn-primary";
        listItem.style = "width: 90%; margin-top: 20px; font-size: 15px; text-align:center;";
        listItem.textContent = newItem;
        listItem.value = newItem;
        questionDiv.appendChild(ulItem);
        ulItem.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    });
};

// Event compares choices with answer from array
function compare(event) {
    var element = event.target;

    if (element.matches("input")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[qIndex].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } 
        else {
            // Will deduct 10s off seconds for wrong answers
            seconds = seconds - penalty;
            createDiv.textContent = "Incorrect!";
        }
    }
    qIndex++; //advance questions

    if (qIndex >= questions.length) {
        // allDone will append last page with score 
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
        createDiv.style = "text-align: center;"
    } else {
        render(qIndex);
    }
    questionDiv.appendChild(createDiv);
}

function allDone() {
    questionDiv.innerHTML = "";
    currentTime.innerHTML = "";
    
    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"
    
    questionDiv.appendChild(createH1);
    
    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");
    
    questionDiv.appendChild(createP);
    
    // Calculates time remaining and replaces it with score
    if (seconds >= 0) {
        var timeRemaining = seconds;
        var createP2 = document.createElement("p");
        clearInterval(holdInt);
        createP.textContent = "Final score: " + timeRemaining;
    
        questionDiv.appendChild(createP2);
    }
    
    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
    
    questionDiv.appendChild(createLabel);
    
    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
    
    questionDiv.appendChild(createInput);
    
    // submit
    var createSubmit = document.createElement("button");
    createSubmit.type = "button";
    createSubmit.className ="btn btn-primary";
    createSubmit.style = "width: 100%; margin-top: 20px; font-size: 15px; text-align:center;";
    createSubmit.textContent = "Submit";
    
    questionDiv.appendChild(createSubmit);
    
    // Event listener to save intials and score to local storage
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;
    
        if (initials === null) {
    
            console.log("No value entered!");
    
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("scores.html");
        }
    });
    
    }