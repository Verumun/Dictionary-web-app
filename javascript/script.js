const head = document.getElementById("header");
const phonetic = document.getElementById("phonetic");
const partsOfSpeech = document.getElementById("partsOfSpeech");
const meanning = document.getElementById("mean");

const data = fetch("../api.json")
  .then((response) => response.json())
  .then((data) => {
    const gender = data.results[0].gender;
    console.log(gender);

    // const location = data.results.map((result) =>{
    //     // return result.location.coordinates.latitude;
    //     return result.login.username;
    // })

    // console.log(...location)

    // head.innerHTML = `${data.results.map((result) => {
    //   return result.gender;
    // })}`;
  });

// const data = require('../api.json')

// console.log(data.results.gender)

// const date = fetch("../javascript/diction.json")
//   .then((response) => response.json())
//   .then((data) => {
//     head.innerHTML = `${data.map((result) => {
//         return result.word;
//       })}`;
//   });

let word = "keyboard";
const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(...data);


    // phonetic.innerHTML = `${data.map(result)}`
    // res = data[0]
    data.map((res) => {
      phonetic.innerHTML = res.phonetic;
      head.innerHTML = res.word;
      partsOfSpeech.innerHTML = res.meanings[0].partOfSpeech;

      //   res.meanings[1].definitions.map((def) => {
      //     console.log(def);
      //   });

      const definitionsContainer = document.getElementById(
        "definitionsContainer"
      );
      const meanings = res.meanings[0].definitions;
      console.log(meanings);
      let counter = 0;

      meanings.forEach((meaning) => {
        // const partOfSpeech = meaning.partOfSpeech;
        const definitionsList = meaning;

        console.log(definitionsList);

        const definition = meaning.definition;
        const definitionItem = document.createElement("div");
        definitionItem.classList.add("definition-item");

        const definitionText = document.createElement("p");
        definitionText.innerHTML = `${definition}`;
        definitionItem.appendChild(definitionText);
        definitionsContainer.appendChild(definitionItem);
      });

      // console.log(res.meanings[0].partOfSpeech)
    });
  });
