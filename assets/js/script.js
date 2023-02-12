const launch = $(`#launchScreen`);
const startBtn = $(`#startBtn`);
const question = $(`#question`);
const options = $(`#options`);
let answerA = $(`.answerA`);
let answerB = $(`.answerB`);
let answerC = $(`.answerC`);
let answerD = $(`.answerD`);

let snorlax = 0;
let pikachu = 0;
let bulbasaur = 0;
let squirtle = 0;
let charmander = 0;

answerA.on(`click`, nextQuestion());
answerB.on(`click`, nextQuestion());
answerC.on(`click`, nextQuestion());
answerD.on(`click`, nextQuestion());

function nextQuestion() {

    let x = 1

    const questionTitle = $(`#qTitle` + x);
    let questionHeader = $(`<h2>`)
    questionHeader.attr("id", "qTitle" + x)
    questionHeader.text(questionsArray[x].question);
    questionTitle.append(questionHeader)
    x++
}