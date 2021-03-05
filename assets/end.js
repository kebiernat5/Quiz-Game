var username = document.getElementById("initials");
var finalScore = document.getElementById(".finalScore")

submit.addEventListener('click', saveScore);
function saveScore(event){
    //prevent default (refresh)
    event.preventDefault();
   // record initials with score to local storage


   
   var currentScore = {
       score: finalScore,
       name: username.value,
    }
    
    
    // highScores.push(currentScore);
    console.log(currentScore)
    
};
// import {userScore} from  "assets/script.js"