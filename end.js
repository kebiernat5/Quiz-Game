var mostRecentScore = localStorage.getItem(mostRecentScore);
// Creating a variable to be able to add initials to the local storage from the input text
var username = document.getElementById(".username");
username.addEventListener("keyup", => {
    console.log(username.value);
});
// Creating the variable to activate the button when the user clicks it after text has been entered
var saveHighScoreBtn = document.getElementById(saveScoreBtn)
// Creating event based on when the user inputs their information into the input box
// username.addEventListener("change", () => {
//   saveHighScoreBtn.enabled = username.value;
// })

saveHighScore = (e) => {
  console.log("clicked the save button")
  e.preventDefault();
};