// const head = document.getElementById("header");
// const phoneticEl = document.getElementById("phonetic");
// const partsOfSpeechOneEl = document.getElementById("parts-of-speech-one");
// const partsOfSpeechTwoEl = document.getElementById("parts-of-speech-two");
// const meanning = document.getElementById("mean");
// const definitionsContainer = document.getElementById("definitionsContainerOne");
// const definitionsContainerTwo = document.getElementById(
//   "definitionsContainerTwo"
// );
// const synonymEl = document.getElementById("synonym");
// const exampleEl = document.getElementById("example");
// const body = document.body;
// const searchInput = document.querySelector('input[type="text"]');

// let word = 'maximum'
// const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

// // console.log(data)

// head.innerHTML = `${word}`;

// fetch(apiURL)
//   .then((response) => response.json())
//   .then((data) => {

//     const meaningsOne = data[0].meanings[0];
//     const meaningsTwo = data[0].meanings[0];

//     console.log(data[0].meanings[1]);
//     console.log(data[0].meanings);

//     const synonyms = meaningsOne.synonyms || [];

//     const partsOfSpeechOne = meaningsOne.partOfSpeech || "";
//     const partsOfSpeechTwo = meaningsTwo.partOfSpeech || "";
//     const phonetic = data[0].phonetic;

//     const definitionTwo = meaningsTwo.definitions[0]?.definition || "";
//     // console.log(partsOfSpeechTwo)
//     console.log(meaningsTwo);

//     exampleEl.innerText = `${meaningsTwo.definitions[0]?.example}`;
//     definitionsContainerTwo.innerText = `${definitionTwo}`;
//     partsOfSpeechTwoEl.innerText = `${partsOfSpeechTwo}`;
//     partsOfSpeechOneEl.innerText = `${partsOfSpeechOne}`;
//     phoneticEl.innerText = `${phonetic}`;

//     console.log(meaningsOne);

//     meaningsOne.definitions.slice(0, 3).forEach((meaning) => {
//       const { definition } = meaning;
//       const definitionItem = document.createElement("div");
//       definitionItem.classList.add("definition-item");

//       const bulletPoint = document.createElement("span");
//       bulletPoint.classList.add("bullet-point");
//       bulletPoint.textContent = "\u2022"; // Unicode character for bullet point

//       const definitionText = document.createElement("p");
//       definitionText.textContent = definition;

//       definitionItem.appendChild(bulletPoint);
//       definitionItem.appendChild(definitionText);
//       definitionsContainer.appendChild(definitionItem);

//       synonymEl.innerText = `${synonyms}`;
//     });
//   });

// // script.js

const toggleSwitch = document.getElementById("toggle");
const bodyElement = document.body;

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    enableDarkMode();
    console.log("checked");
  } else {
    enableLightMode();
    console.log("unchecked");
  }
});

function enableDarkMode() {
  bodyElement.classList.add("dark-mode");
  bodyElement.classList.remove("light-mode");
}

function enableLightMode() {
  bodyElement.classList.add("light-mode");
  bodyElement.classList.remove("dark-mode");
}

// Dropdown Select Menu
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  btn_text = optionMenu.querySelector(".Btn-text");


selectBtn.addEventListener("click", ()=>{
  optionMenu.classList.toggle('active')
})  

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    btn_text.innerText = selectedOption;
    
    optionMenu.classList.remove('active')
  });
});




// const searchInput = document.querySelector('input[type="text"]');
const searchInput = document.getElementById("searchInput");
const head = document.getElementById("header");
const phoneticEl = document.getElementById("phonetic");
const partsOfSpeechOneEl = document.getElementById("parts-of-speech-one");
const partsOfSpeechTwoEl = document.getElementById("parts-of-speech-two");
const definitionsContainer = document.getElementById("definitionsContainerOne");
const definitionsContainerTwo = document.getElementById(
  "definitionsContainerTwo"
);
const synonymEl = document.getElementById("synonym");
const exampleEl = document.getElementById("example");
const body = document.body;

// Function to fetch and display word data
function fetchAndDisplayWord(word) {
  const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  head.innerHTML = `${word}`;
  definitionsContainer.innerHTML = "";
  definitionsContainerTwo.innerHTML = "";
  synonymEl.innerText = "";
  exampleEl.innerText = "";

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        displayNoResults();
        return;
      }

      const meaningsOne = data[0].meanings[0];
      const meaningsTwo = data[0].meanings[1];
      const meaningsThree = data[0].meanings[2];
      const meaningsFour = data[0].meanings[3];
      const synonyms = meaningsOne.synonyms || [];
      const partsOfSpeechOne = meaningsOne.partOfSpeech || "";
      const partsOfSpeechTwo = meaningsTwo.partOfSpeech || "";
      const phonetic = data[0].phonetic;
      const definitionTwo = meaningsTwo.definitions[0]?.definition || "";

      exampleEl.innerText = `${meaningsTwo.definitions[0]?.example}`;
      definitionsContainerTwo.innerText = `${definitionTwo}`;
      partsOfSpeechTwoEl.innerText = `${partsOfSpeechTwo}`;
      partsOfSpeechOneEl.innerText = `${partsOfSpeechOne}`;
      phoneticEl.innerText = `${phonetic}`;

      meaningsOne.definitions.slice(0, 3).forEach((meaning) => {
        const { definition } = meaning;
        const definitionItem = document.createElement("div");
        definitionItem.classList.add("definition-item");

        const bulletPoint = document.createElement("span");
        bulletPoint.classList.add("bullet-point");
        bulletPoint.textContent = "\u2022"; // Unicode character for bullet point

        const definitionText = document.createElement("p");
        definitionText.textContent = definition;

        definitionItem.appendChild(bulletPoint);
        definitionItem.appendChild(definitionText);
        definitionsContainer.appendChild(definitionItem);

        synonymEl.innerText = `${synonyms}`;
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Function to display "No Results" message
function displayNoResults() {
  head.innerText = "No Results Found";
}

// Event listener for search input
searchInput.addEventListener("keyup", function (event) {
  const word = event.target.value.trim();

  if (word !== "") {
    fetchAndDisplayWord(word);
  } else {
    displayNoResults();
  }
});
