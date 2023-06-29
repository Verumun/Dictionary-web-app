const head = document.getElementById("header");
const phoneticEl = document.getElementById("phonetic");
const partsOfSpeechOneEl = document.getElementById("parts-of-speech-one");
const partsOfSpeechTwoEl = document.getElementById("parts-of-speech-two");
const meanning = document.getElementById("mean");
const definitionsContainer = document.getElementById("definitionsContainerOne");
const definitionsContainerTwo = document.getElementById("definitionsContainerTwo")
const synonymEl = document.getElementById('synonym');
const exampleEl = document.getElementById('example');


// Input
const toggle = document.getElementById('input')



const word = "keyboard";
const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

// console.log(data)

head.innerHTML = `${word}`

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const meaningsOne = data[0].meanings[0];
    const meaningsTwo = data[0].meanings[0];

    console.log(data[0].meanings[1])
    console.log(data[0].meanings)


    const synonyms = meaningsOne.synonyms || [];

    const partsOfSpeechOne = meaningsOne.partOfSpeech || "";
    const partsOfSpeechTwo = meaningsTwo.partOfSpeech || "";
    const phonetic = data[0].phonetic;

    const definitionTwo = meaningsTwo.definitions[0]?.definition || "";
    // console.log(partsOfSpeechTwo)
    console.log(meaningsTwo)
    


    exampleEl.innerText = `${meaningsTwo.definitions[0]?.example}`
    definitionsContainerTwo.innerText = `${definitionTwo}`
    partsOfSpeechTwoEl.innerText = `${partsOfSpeechTwo}`
    partsOfSpeechOneEl.innerText = `${partsOfSpeechOne}`
    phoneticEl.innerText = `${phonetic}`;

    console.log(meaningsOne)
    

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
  });



  function updateMoon(){
    
  }

  toggle.addEventListener('change',function(){

  })

 