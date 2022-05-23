function generateRandomNumber(num) {
return Math.floor(Math.random() * num)
}
const selectionGen = {
  personality: ['friendly', 'sassy', 'evil', 'strong']
}

let personalityType = []
for (let prop in selectionGen) {
  let optionIdx = generateRandomNumber(selectionGen[prop].length)
  switch(prop) {
  case 'personality':
  personalityType.push(`You are "${selectionGen[prop][optionIdx]}"`);
  break;
  default:
  personalityType.push('Sorry, something went wrong!')
};


function formatType(type) {
  const formatted = personalityType.join('\n')
  console.log(formatted)
}
formatType(personalityType);
};

