const question = document.getElementById("question");
const answerForm = document.getElementById("answerForm");

let currentQuestion = 0;
const questions = [
  {
    text: "What's your favourite season?",
    answers: [
      { text: "Spring", value: 0, dataIndex: "Bulbasaur" },
      { text: "Summer", value: 0, dataIndex: "Pikachu" },
      { text: "Autumn", value: 0, dataIndex: "Charmander" },
      { text: "Winter", value: 0, dataIndex: "Squirtle" },
    ],
  },
  {
    text: "What's your favourite colour?",
    answers: [
      { text: "green", value: 0, dataIndex: "Bulbasaur" },
      { text: "yellow", value: 0, dataIndex: "Pikachu" },
      { text: "Red", value: 0, dataIndex: "Charmander" },
      { text: "Blue", value: 0, dataIndex: "Squirtle" },
    ],
  },
  {
    text: "On a night out with you your best mate gets in a fight. Where are you?",
    answers: [
      { text: "Leading peace talks", value: 0, dataIndex: "Bulbasaur" },
      { text: "Throwing the first punch", value: 0, dataIndex: "Pikachu" },
      { text: "Grabbing the popcorn", value: 0, dataIndex: "Charmander" },
      {
        text: "Running back into the bar and hiding in the toilets",
        value: 0,
        dataIndex: "Squirtle",
      },
    ],
  },
  {
    text: "In the training montage of your life, what's the sountrack?",
    answers: [
      { text: "Slow, pensive indie-folk", value: 0, dataIndex: "Bulbasaur" },
      {
        text: "Hyperpop remixes of songs that were already pretty hyper",
        value: 0,
        dataIndex: "Pikachu",
      },
      { text: "Classic rock", value: 0, dataIndex: "Charmander" },
      {
        text: "Ballads!",
        value: 0,
        dataIndex: "Squirtle",
      },
    ],
  },
  {
    text: "What would you rather have handy if you're stranded on a desert island?",
    answers: [
      {
        text: "A stack of books you'll finally have time to get through",
        value: 0,
        dataIndex: "Bulbasaur",
      },
      {
        text: "A few of your closest friends",
        value: 0,
        dataIndex: "Pikachu",
      },
      {
        text: "A survival guide and a first aid kit",
        value: 0,
        dataIndex: "Charmander",
      },
      {
        text: "Swimwear, beachball, sunlotion",
        value: 0,
        dataIndex: "Squirtle",
      },
    ],
  },
  {
    text: "What's your dream holiday destination?",
    answers: [
      { text: "A nice cabin in a forest", value: 0, dataIndex: "Bulbasaur" },
      {
        text: "In the city",
        value: 0,
        dataIndex: "Pikachu",
      },
      { text: "Beachside", value: 0, dataIndex: "Charmander" },
      {
        text: "Snowy mountains",
        value: 0,
        dataIndex: "Squirtle",
      },
    ],
  },
  {
    text: "You have to survive on just one of the below foods for the next year. What's your pick?",
    answers: [
      { text: "Plant-based everything", value: 0, dataIndex: "Bulbasaur" },
      {
        text: "Pizza",
        value: 0,
        dataIndex: "Pikachu",
      },
      { text: "Dessert", value: 0, dataIndex: "Charmander" },
      {
        text: "Can a person survive on cheese alone? Let's find out!",
        value: 0,
        dataIndex: "Squirtle",
      },
    ],
  },
  {
    text: "Who were you in high school?",
    answers: [
      { text: "Top of the class", value: 0, dataIndex: "Bulbasaur" },
      {
        text: "Everyone's friend",
        value: 0,
        dataIndex: "Pikachu",
      },
      {
        text: "The class clown/detention magnet",
        value: 0,
        dataIndex: "Charmander",
      },
      {
        text: "Ballads!",
        value: 0,
        dataIndex: "Squirtle",
      },
    ],
  },
  {
    text: "It's your pick for movie night. What are we watching?",
    answers: [
      {
        text: "A horror so creepy that even you get nightmares",
        value: 0,
        dataIndex: "Bulbasaur",
      },
      {
        text: "A good comedy or cheesy rom-com",
        value: 0,
        dataIndex: "Pikachu",
      },
      { text: "Action! (get it?)", value: 0, dataIndex: "Charmander" },
      {
        text: "Something older than your parents",
        value: 0,
        dataIndex: "Squirtle",
      },
    ],
  },
];

let scores = {
  Pikachu: 0,
  Bulbasaur: 0,
  Squirtle: 0,
  Charmander: 0,
};

function renderQuestion() {
  const currentAnswers = questions[currentQuestion].answers;
  answerForm.innerHTML = "";

  question.innerText = questions[currentQuestion].text;

  currentAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.name = "answer";
    button.classList = "btn btn-primary";
    button.textContent = answer.text;
    button.id = answer.dataIndex;

    button.addEventListener("click", function () {
      event.preventDefault();
      const selectedIndex = questions[currentQuestion].answers.findIndex(
        (a) => a.text === this.textContent
      );
      questions[currentQuestion].answers[selectedIndex].value += 1;

      const selectedDataIndex =
        questions[currentQuestion].answers[selectedIndex].dataIndex;
      scores[selectedDataIndex] +=
        questions[currentQuestion].answers[selectedIndex].value;

      currentQuestion++;
      if (currentQuestion === questions.length) {
        console.log("Your scores:", scores);
        window.location.href = "results.html?scores=" + JSON.stringify(scores);
      } else {
        renderQuestion();
      }
    });

    answerForm.appendChild(button);
  });
}

renderQuestion();
/*
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
*/
