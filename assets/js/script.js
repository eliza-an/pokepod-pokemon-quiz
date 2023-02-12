// import{questions}from`./questions`;
const launch = document.querySelector(`#launchScreen`);
const startBtn = document.querySelector(`#startBtn`);
const question = document.querySelector(`#question`);
const options = document.querySelector(`#options`);


let snorlax=0;
let pikachu=0;
let bulbasaur=0;
let squirtle=0;
let charmander=0;

function nextQuestion() {
    let x = 1
    for(let i = 0; i < questionsArray.length; i++) {
        let questionHeader = $(`<h2>`)
        questionHeader.text(questionsArray[i].question)
        question.append(questionHeader)
        console.log(questionHeader)


        
        
        const questionTitle = document.querySelector(`#qTitle` + x);
    }
}

nextQuestion();
