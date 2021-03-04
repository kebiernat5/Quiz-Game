// To Do:
// click the start button
var startButton = document.querySelector("#start");
var clock = document.querySelector("#timer");
var starterHeader = document.querySelector("#startPrompt");
var time = 500;


questionContainer.style.display = "none";

var questions = [
  {
    text: "Who wrote Hamilton An American Musical?",
    answers: ["Lin Manuel Miranda", "Barack Obama", "Tupac", "The Roots"],
    correctAnswer: 1,
  },
  {
    text: "Who wrote Hamilton An American Musical?",
    answers: ["Lin Manuel Miranda", "Barack Obama", "Tupac", "The Roots"],
    correctAnswer: 1,
  },
  {
    text: "Who wrote Hamilton An American Musical?",
    answers: ["Lin Manuel Miranda", "Barack Obama", "Tupac", "The Roots"],
    correctAnswer: 1,
  },
  {
    text: "Who wrote Hamilton An American Musical?",
    answers: ["Lin Manuel Miranda", "Barack Obama", "Tupac", "The Roots"],
    correctAnswer: 1,
  },
  {
    text: "Who wrote Hamilton An American Musical?",
    answers: ["Lin Manuel Miranda", "Barack Obama", "Tupac", "The Roots"],
    correctAnswer: 1,
  },
]

startButton.addEventListener("click", function (e) {
    startTimer();
    displayQuestion();
});

function startTimer() {
  setInterval(function (){
    time--;
    clock.textContent = time;
  }, 1000);
}

function displayQuestion() {
  // hide the text and start button
  startButton.style.visibility = "hidden";
  starterHeader.style.display = "none";
  // display question 1
  questionContainer.style.display = "block";
  questionText.textContent = questions[0].text;

  // render the answers
  questions[0].answers.forEach(function (item) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = item;
    answers.append(answerBtn);

    answerBtn.addEventListener("click", function (e){
      questionText.style.display = "none";
      questionContainer.style.display = "none";


      displayQuestion2();
    })
  })
}

function displayQuestion2() {
  // hide the text and start button
  startButton.style.visibility = "hidden";
  starterHeader.style.display = "none";
  displayQuestion.style.display = "hidden";
  // display question 2
  questionContainer.style.display = "block";
  questionText.textContent = questions[0].text;

  // render the answers
  questions[1].answers.forEach(function (item) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = item;
    answers.append(answerBtn);

    answerBtn.addEventListener("click", function (e){
      questionText.style.display = "none";
      questionContainer.style.display = "none";


      displayQuestion3();
    })
  })
}

function displayQuestion3() {
  // hide the text and start button
  startButton.style.visibility = "hidden";
  // starterHeader.style.display = "none";
  // display question 3
  questionContainer.style.display = "block";
  questionText.textContent = questions[0].text;

  // render the answers
  questions[2].answers.forEach(function (item) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = item;
    answers.append(answerBtn);

    answerBtn.addEventListener("click", function (e){
      questionText.style.display = "none";
      questionContainer.style.display = "none";


      displayQuestion4();
    })
  })
}

function displayQuestion4() {
  // hide the text and start button
  startButton.style.visibility = "hidden";
  starterHeader.style.display = "none";
  // display question 4
  questionContainer.style.display = "block";
  questionText.textContent = questions[0].text;

  // render the answers
  questions[3].answers.forEach(function (item) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = item;
    answers.append(answerBtn);

    answerBtn.addEventListener("click", function (e){
      questionText.style.display = "none";
      questionContainer.style.display = "none";


      displayQuestion5();
    })
  })
}

function displayQuestion5() {
  // hide the text and start button
  startButton.style.visibility = "hidden";
  starterHeader.style.display = "none";
  // display question 5
  questionContainer.style.display = "block";
  questionText.textContent = questions[0].text;

  // render the answers
  questions[4].answers.forEach(function (item) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = item;
    answers.append(answerBtn);

    answerBtn.addEventListener("click", function (e){
      questionText.style.display = "none";
      questionContainer.style.display = "none";


      displayQuestion5();
    })
  })
}

















































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
