// To Do:
// click the start button
var startButton = document.querySelector("#start");
var clock = document.querySelector("#timer");
var answers = document.querySelector("#answers");
var starterHeader = document.querySelector("#startPrompt");
var time = 500;
var questionStyle = document.querySelector(".questionStyle");
var questionIndex = 0;
var timer;
var score = 0
var scorecard = document.querySelector("#finalScore")
var highScores = document.querySelector(".highScores");
highScores.style.display = "none";
questionContainer.style.display = "none";
questionStyle.style.display = "none"



var questions = [
  {
    text: "Who wrote Hamilton An American Musical?",
    answers: ["Lin Manuel Miranda", "Barack Obama", "Tupac", "The Roots"],
    correctAnswer: "Lin Manuel Miranda",
  },
  {
    text: "Which Tony Award Winning musical opened in 2009 at the Schubert Theatre?",
    answers: ["A Chorus Line", "Memphis the Musical", "American Idiot", "The Drowsy Chaperone"],
    correctAnswer: "Memphis the Musical",
  },
  {
    text: "When did Rent the Musical open on Broadway?",
    answers: ["1989", "1995", "1990", "1996"],
    correctAnswer: "1996",
  },
  {
    text: "Who starred in Lincon Center's productions of South Pacific and The King and I?",
    answers: ["Patti Lupone", "Kelly O'Hara", "Laura Benanti", "Sutton Foster"],
    correctAnswer: "Kelly O'Hara",
  },
  {
    text: "Who choreographed the original production of 42nd Street?",
    answers: ["Martha Graham", "Agnes De Mille", "Gower Champion", "Bob Fosse"],
    correctAnswer: "Gower Champion",
  },
];
startButton.addEventListener("click", function (e) {
  // hide the text and start button
  startButton.style.visibility = "hidden";
  starterHeader.style.display = "none";
  questionStyle.style.display = "block";
  questionContainer.style.display = "block";
  startTimer();
  displayQuestion();
});
function startTimer() {
  timer = setInterval(function () {
    time--;
    clock.textContent = time;
    // If we run out of time
    // Game over
  }, 1000);
}
function displayQuestion() {
  var question = questions[questionIndex];
  // display question 1
  questionText.textContent = question.text;
  // render the answers
  answers.innerHTML = "";
  question.answers.forEach(function (item) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = item;
    answers.append(answerBtn);
  });
}
answers.addEventListener("click", function (e) {
  // If the target is not a button
  // Stop execution early
  if (!e.target.matches("button")) return;
  var val = e.target.textContent;
  // Did we choose correct
  if (val === questions[questionIndex].correctAnswer){
    score++;
    console.log(score);
  }
  if (val !== questions[questionIndex].correctAnswer){
    time-=10
  }
  if (time < 1){
    endGame();
  }
  
  // Or did we choose wrong
  // Increase our question index
  questionIndex++;
  // Make sure we still have questions
  // Render next question if we do
  // End game if we are out of questions
  if (questionIndex === questions.length) {
    endGame();
  } else {
    displayQuestion();
  }
});
function endGame() {
  var scoreText = document.createElement("h2");
  scoreText.textContent = "Score! " + score;
  scorecard.append(scoreText);
  highScores.style.display = "block";
} 


var mostRecentScore = localStorage.getItem(mostRecentScore);
// Creating a variable to be able to add initials to the local storage from the input text
var username = document.getElementById("#username");
// Creating the variable to activate the button when the user clicks it after text has been entered
var saveHighScoreBtn = document.getElementById(saveScoreBtn)
// Creating event based on when the user inputs their information into the input box
username.addEventListener("change", () => {
  saveHighScoreBtn.enabled = username.value;
})

saveHighScore = (e) => {
  console.log("clicked the save button")
};
{}

// Make a function

// create a variable that will check local storage for a high scores array
var highScores = localStorage.JSON.parse(localStorage.getItem("High Score")) || []
// set item turns into an arr
// When someone saves their high scores it gets pushed to this array
// save as an object with their name "" and their score whatever score they earned
// Push to high scores array
// set item in local storage

Collapse




















































// var timeLeft = 60;

// var startButton = document.querySelector(".start-button");
// var time = document.querySelector(".time");

// startButton.addEventListener("click", function (e) {
//   startButton.style.display = "none";
//   startQuestions();
//   startTime()
//  }
// );

// function startTime(){
  
//   var timeMsg = setInterval(function () {
//     timeLeft--;
//     time.textContent = timeLeft;
//     if (time === 0) {
//       clearInterval(timeMsg);
//     }
//   }, 1000);
// }

// var $startBtn = document.querySelector("#start")
       
// var time = 60

// var questions = [
//      {
//          text: "Is the sky blue?",
//          answers: {
//             a: "True",
//             b: "False",}
         
//      }
//  ]

// //  Tucker Code
//  $startBtn.addEventListener("click", function(e) {
//      $timer.textContent = time;
//      setInterval(function() {
//          time--;
//          $timer.textContent = time;
//      }, 1000);
//      $start.style.display = "none";
//      $questionText.textContent = questions[0].text;
     
//      questions[0].answers.forEach(function (item) {
//          var $answerBtn = document.createElement("button");
//          $answerBtn.textContent = item;
//          $answerBtn.addEventListener("click", handleAnswerClick);
//          $answers.append($answerBtn);
//      });
//  });

































// var isWin = false;
// var startButton = document.querySelector("start-button");
// var questions = document.getElementById("#questions");
// var scoreboard = document.getElementById("#scoreboard");
// var quizContainer = document.getElementById("#quizContainer")

// function buildQuiz() {
//     var output = []
//     myQuestions.forEach(currentQuestion, questionNumber) => {
//         var answers = [];
//         for(letter in currentQuestion.answers){
//             answers.push(
               
//             )
//         }
//     }
// }
// function showResults() {}

// buildQuiz()

// submitButton.addEventListener("click", showResults)

// var quisQuestions = [
//     {
//         question: "What is Kate's middle name?",
//         answers: {
//             a: "Elizabeth",
//             b: "Marie",
//             c: "Emily",
//             d: "Ellen"
//         }
//         correctAnswer: "c"
//     }
    
// ]

// var questions = ["What is Kate's middle name", "How many "]

// function startGame(){
//     isWin = false;
//     timerCount = 60
// }
// startButton.addEventListener("click", startGame)

// var playGame = function(){
// }

// function getWins() {
//     // Get stored value from client storage, if it exists
//     var storedWins = localStorage.getItem("winCount");
//     // If stored value doesn't exist, set counter to 0
//     if (storedWins === null) {
//       winCounter = 0;
//     } else {
//       // If a value is retrieved from client storage set the winCounter to that value
//       winCounter = storedWins;
//     }
//     //Render win count to page
//     win.textContent = winCounter;

//     function getlosses() {
//         var storedLosses = localStorage.getItem("loseCount");
//         if (storedLosses === null) {
//           loseCounter = 0;
//         } else {
//           loseCounter = storedLosses;
//         }
//         lose.textContent = loseCounter;
//       }
//     //   change this code to match "if button chosen is correct answer"
//     // chosen button === correct answers and then a function to move forward to the next question 
//       function checkWin() {
//         // If the word equals the blankLetters array when converted to string, set isWin to true
//         if (chosenWord === blanksLetters.join("")) {
//           // This value is used in the timer function to test if win condition is met
//           isWin = true;
//         }
//       }

// }



// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame);
