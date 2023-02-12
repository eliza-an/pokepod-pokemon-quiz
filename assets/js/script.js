const question = document.getElementById("question");
const answerForm = document.getElementById("answerForm");

let currentQuestion = 0;
const questions = [
  {
    text: "What's your favourite season?",
    answers: [
      { text: "Spring", value: 0, dataIndex: "Pikachu" },
      { text: "Summer", value: 0, dataIndex: "Snorlax" },
      { text: "Autumn", value: 0, dataIndex: "Squirtle" },
      { text: "Winter", value: 0, dataIndex: "Charmander" },
    ],
  },
  {
    text: "What's your favourite colour?",
    answers: [
      { text: "green", value: 0, dataIndex: "Pikachu" },
      { text: "yellow", value: 0, dataIndex: "Snorlax" },
      { text: "Red", value: 0, dataIndex: "Squirtle" },
      { text: "Blue", value: 0, dataIndex: "Charmander" },
    ],
  },
  {
    text: "On a night out with you your best mate gets in a fight. Where are you?",
    answers: [
      { text: "Leading peace talks", value: 0, dataIndex: "Pikachu" },
      { text: "Throwing the first punch", value: 0, dataIndex: "Snorlax" },
      { text: "Grabbing the popcorn", value: 0, dataIndex: "Squirtle" },
      {
        text: "Running back into the bar and hiding in the toilets",
        value: 0,
        dataIndex: "Charmander",
      },
    ],
  },
  {
    text: "In the training montage of your life, what's the sountrack?",
    answers: [
      { text: "Slow, pensive indie-folk", value: 0, dataIndex: "Pikachu" },
      {
        text: "Hyperpop remixes of songs that were already pretty hyper",
        value: 0,
        dataIndex: "Snorlax",
      },
      { text: "Classic rock", value: 0, dataIndex: "Squirtle" },
      {
        text: "Ballads!",
        value: 0,
        dataIndex: "Charmander",
      },
    ],
  },
];

let scores = {
  Pikachu: 0,
  Snorlax: 0,
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
        window.location.href = "results.html";
      } else {
        renderQuestion();
      }
    });

    answerForm.appendChild(button);
  });
}

renderQuestion();
