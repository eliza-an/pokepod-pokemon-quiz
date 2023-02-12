const launch = $(`#launchScreen`);
const startBtn = $(`#startBtn`);
const question = $(`#question`);
const options = $(`#options`);


let snorlax=0;
let pikachu=0;
let bulbasaur=0;
let squirtle=0;
let charmander=0;

function nextQuestion() {
    let x = 1
    for(let i = 0; i < questionsArray.length; i++) {
        let questionHeader = $(`<h2>`)
        questionHeader.text(JSON.stringify(questionsArray[i].question));
        question.append(questionHeader)



        
        
        const questionTitle = document.querySelector(`#qTitle` + x);
    }
}

nextQuestion();
