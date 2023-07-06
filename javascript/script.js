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
const moon = document.getElementById('moon');


function enableDarkMode() {
  bodyElement.classList.add("dark-mode");
  bodyElement.classList.remove("light-mode");
}

function enableLightMode() {
  bodyElement.classList.add("light-mode");
  bodyElement.classList.remove("dark-mode");
}

// Moon toggle
let clicked = false;
function toggleMoon(){
  if(clicked){
    enableDarkMode()
  }else{
    enableLightMode()
  }

  toggleSwitch.checked = clicked;
  clicked = !clicked;
}
moon.addEventListener('click', toggleMoon)
toggleSwitch.addEventListener('change', function() {
  toggleMoon();
});

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


// -----------Spinner-------
const spinner = document.getElementById('spinner');

function showSpinner(){
  spinner.style.display = "block";
}

function hideSpinner(){
  spinner.style.display = "none";
}




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
  // hideSpinner()
  showSpinner()
  
  const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  head.innerHTML = `${word}`;
  definitionsContainer.innerHTML = "";
  definitionsContainerTwo.innerHTML = "";
  synonymEl.innerText = "";
  exampleEl.innerText = "";

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      hideSpinner()
      if (data.length === 0) {
        displayNoResults();
        return;
      }

      const meaningsOne = data[0].meanings[0];
      const meaningsTwo = data[0].meanings[1];
      const meaningsThree = data[0].meanings[2];
      const meaningsFour = data[0].meanings[3];
      const synonyms = meaningsOne.synonyms || [];
      const partsOfSpeechOne = meaningsOne && meaningsOne.partOfSpeech ? meaningsOne.partOfSpeech : "";
      const partsOfSpeechTwo = meaningsTwo && meaningsTwo.partOfSpeech ? meaningsTwo.partOfSpeech : "";
      

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

      showContent()
      hideSpinner()
    })
    .catch((error) => {
      console.log("Error:", error);
      
    });
}

// Function to show the content section
function showContent() {
  const contentSection = document.querySelector('.content');
  contentSection.style.display = 'block';
}

// const searchButton = document.getElementById("searchButton");

// // Event listener for search button
// searchButton.addEventListener("click", function () {
//   searchWord();
// });

// // Event listener for Enter key press
// document.addEventListener("keyup", function (event) {
//   if (event.key === "Enter" && event.target.id === "searchInput") {
//     searchWord();
//   }
// });

// // Function to search for the word
// function searchWord() {
//   const searchInput = document.getElementById("searchInput");

//   if (searchInput) {
//     const word = searchInput.value.trim();

//     if (word !== '') {
//       fetchAndDisplayWord(word);
//     } else {
//       displayNoResults();
//     }
//   }
// }

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  // Event listener for search button
  searchButton.addEventListener("click", function () {
    searchWord();
  });

  // Event listener for Enter key press
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchWord();
    }
  });

  // Function to search for the word
  function searchWord() {
    const word = searchInput.value.trim();

    if (word !== '') {
      fetchAndDisplayWord(word);
    } else {
      // displayNoResults();
      clearResults();
    }
  }

  // Rest of your code...
});

function clearResults() {
  searchInput.value = '';
  head.innerHTML = '';
  definitionsContainer.innerHTML = '';
  definitionsContainerTwo.innerHTML = '';
  synonymEl.innerText = '';
  exampleEl.innerText = '';
  partsOfSpeechOneEl.innerText = '';
  partsOfSpeechTwoEl.innerText = '';
  phoneticEl.innerText = '';
}

