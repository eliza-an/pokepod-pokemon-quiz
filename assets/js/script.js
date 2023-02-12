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

        const questionTitle =$(`#qTitle` + x);
        let questionHeader = $(`<h2>`)
        questionHeader.attr("id", "qTitle" + x )
        questionHeader.text(questionsArray[x].question);
        questionTitle.append(questionHeader)



        
        
        
   x++ 
}

nextQuestion();
