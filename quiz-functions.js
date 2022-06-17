let containerNode = document.getElementById("container-hide");
let introNode = document.getElementById("show");
let startBtn = document.getElementById("start-btn");
let submitBtn = document.getElementById("submit-hide");
let scoreNode = document.getElementById("score-hide");
let scoreElement = document.getElementById("score");
let percentageElement = document.getElementById("percentage-score");

let score = 0;
let totalMarks = 10;

function goToQuizPage() {
  introNode.setAttribute("id", "intro-hide");
  containerNode.setAttribute("id", "");
  submitBtn.setAttribute("id", "");
}

function showScore() {
  //set the dom nodes
  scoreNode.setAttribute("id", "");
  containerNode.setAttribute("id", "container-hide");
  submitBtn.setAttribute("id", "submit-hide");

  //set the score of the player
  scoreElement.innerText += `  ${score}`;
  let percentage = (score / totalMarks) * 100;
  percentageElement.innerText += `  ${percentage}%`;
}

function addScore(e) {
  e.target.style.backgroundColor = "green";
  score++;
}

function handleWrongAnswer(e) {
  e.target.style.backgroundColor = "red";
}

function retakeQuiz() {
  window.location.reload();
  containerNode.setAttribute("id", "");
  scoreNode.setAttribute("id", "score-hide");
  submitBtn.setAttribute("id", "");
}
