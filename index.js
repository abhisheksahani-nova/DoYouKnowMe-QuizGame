var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

// Highscore data//

var highscores = [

  {name: "Tanay", score: 3},
  {name: "Samay", score: 2}

];


// Array of Object //
var questions = [

  {question: "What I am most passionate about?  ", answer: "life"},

  {question: "Who is my favourite Superhero?  ", answer: "Goku"},

  {question: "My favourite travel destination would be?  ", answer: "Himalaya"}

];

function welcome(){

  var username = readlineSync.question("What's your name? ");

  console.log("Welcome "+ username + " to DO YOU KNOW Abhishek?");

}


//play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("right!"));
    score++;

  }else{
    console.log(chalk.red("wrong!"));

  }

  console.log(chalk.hex('#FF5F01')('current score :  '), score);
  console.log("------------");

}

function game(){
  questions.map((currentQuestion) => {
    play(currentQuestion.question, currentQuestion.answer);
  })
}

function showScores(){

  console.log(chalk.hex('08F7FE')("YaY! you SCORED :  "), chalk.hex('#08F7FE')(score));

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highscores.map(score => console.log(chalk.hex('00FECA')(score.name), "  :  ", chalk.hex('00FECA')(score.score)))
}



welcome();
game();
showScores();