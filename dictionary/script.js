var search = document.getElementById("search")
var button = document.getElementById("button")
var infoDisplayer = document.getElementById("infoDisplayer")
const dictionary = {
    "yes": {
      partOfSpeech: 'noun',
      definitions: [
        'Used to give an affirmative response.',
        'Used as a response to someone addressing one or otherwise trying to attract one\'s attention.',
      ],
    },
    "panacea": {
      partOfSpeech: 'noun',
      definitions: ['An answer or solution for all problems or difficulties.'],
    },
    "concatenation": {
      partOfSpeech: 'noun',
      definitions: ['A series of interconnected or interdependent things or events.'],
    },
    "saw": {
      partOfSpeech: 'verb',
      definitions: [
        'Cut (something) using a saw.',
        'Make rapid to-and-fro motions in cutting something or in playing a stringed instrument.',
      ],
    },
    "found": {
      partOfSpeech: 'adjective',
      definitions: [
        'Having been discovered by chance or unexpectedly.',
        '(of a ship) Equipped; Supplied.',
      ],
    },
    "crane": {
      partOfSpeech: 'verb',
      definitions: [
        'Stretch out one\'s body or neck in order to see something.',
        'Move (a heavy object) with a crane.',
      ],
    },
    "minute": {
      partOfSpeech: 'noun',
      definitions: [
        'A period of time equal to sixty seconds or a sixtieth of an hour.',
        'A sixtieth of a degree of angular measurement (symbol: ʹ)',
      ],
    },
    "grotesque": {
      partOfSpeech: 'adjective',
      definitions: ['Comically or repulsively ugly or distorted.'],
    },
    "label": {
      partOfSpeech: 'noun',
      definitions: ['A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it.'],
    },
    "debacle": {
      partOfSpeech: 'noun',
      definitions: ['A sudden and ignominious failure; a fiasco.'],
    },
  };
function showDefintion(){
  infoDisplayer.innerText = "";
  var word = search.value

  if(dictionary.hasOwnProperty(word)){
    console.log("the word was found")
    var wordInfo = dictionary[word];

    var partOfSpeech = document.createElement("p");
        partOfSpeech.textContent = " Part of Speech: 1. " + wordInfo.partOfSpeech; 
        infoDisplayer.appendChild(partOfSpeech);

       
        var definitionsTitle = document.createElement("p");
        definitionsTitle.textContent = "Definitions: 2. " + wordInfo.definition; 
        infoDisplayer.appendChild(definitionsTitle);

        var definitionsList = document.createElement("ul");
        wordInfo.definitions.forEach(function (definition, index) {
            var listItem = document.createElement("li");
            listItem.textContent = (index + 1) + ". " + definition; 
            definitionsList.appendChild(listItem);
        });
        infoDisplayer.appendChild(definitionsList);

    } else {
        console.log("the word was not found");
       
        var notFoundMessage = document.createElement("p");
        notFoundMessage.textContent = "Word not found in the dictionary.";
        infoDisplayer.appendChild(notFoundMessage);
    }
        
  } 
  

button.addEventListener("click",showDefintion);