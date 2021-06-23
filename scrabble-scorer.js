// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {

	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
      
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
  console.log(`Score for '${word}': \n${letterPoints}`);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some Scrabble! \n \nEnter a word to score: ");
   return word = input.question();
}

function simpleScore (word){
  console.log(word.length); 
  return word.length;
} 

function vowelBonusScore (word) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let toLowerWord = word.toLowerCase();
  let score = 0;
  for (let i = 0; i < toLowerWord.length; i++){
    if (vowels.includes(toLowerWord[i])===true) {
      score += 3;
    }else{
      score += 1;
    }
  } 
  console.log(`Score for '${word}': ${score}`);
  return score;
}   

function scrabbleScore (word) {

  word = word.toLowerCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    for (newPointStructureKey in newPointStructure){
      if (newPointStructureKey.includes(word[i])){
        score += Number(newPointStructure[newPointStructureKey]);
      }else if (word[i] === ' ') {
      }
    } 
  }
  console.log(`Score for '${word}': ${score}`);
  return score;
}

let scoringAlgorithms = [ 
  {name: 'Simple', description: 'One point per character', scoringFunction: simpleScore},

  {name: 'Vowel Bonus', description: 'Vowels are worth 3 points', scoringFunction: vowelBonusScore},

  {name: 'Scrabble', description: 'Uses scrabble point system', scoringFunction: scrabbleScore},
]; 

function scorerPrompt() {
  
  console.log(`Which scoring algorithm would you like to use?\n \n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description} \n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description} \n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\n`);

  let userInput = Number(input.question('Enter 0, 1, or 2: '));
      if (userInput === 0) {
        return scoringAlgorithms[0].scoringFunction(word);
      } else if(userInput === 1) {
        return scoringAlgorithms[1].scoringFunction(word);
      } else if(userInput === 2) {
        return scoringAlgorithms[2].scoringFunction(word);
      } else {
        console.log('\nAlert: invalid input!!!\n');
        return scorerPrompt();
      }
    }

function transform(oldPointStructure){
  
  let newPointStructureObject = {};
  let letters = [];
  let index = 0;
  for (oldPointStructureKey in oldPointStructure) {
    letters [index] = oldPointStructure[oldPointStructureKey];
    for (let lettersArrIndex = 0; lettersArrIndex < letters[index].length; lettersArrIndex++){
    newPointStructureObject[letters[index][lettersArrIndex].toLowerCase()] = oldPointStructureKey;
    }
    index ++;
  }
  return newPointStructureObject;
}

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};