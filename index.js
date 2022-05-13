function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const generalBase = {
    mood: ['sad', 'stressed', 'happy', 'depressed'],
    motivationalOutput: ['I am thankful for my struggle because without it I would not have come across my strength.', 
    'You cannot start the next chapter of your life if you keep re-reading the last one.','There is only one happiness in this life, to love and be loved.',
    'Even the darkest night will end and the sun will rise.'],
    advice: ['try to think of one or more things you are grateful for', 'Ground yourself, take a deep breath and find joy in the uniqueness of now', 'Be proud of yourself, to love and be loved is what makes this life magic.', 'Remember that this too shall pass, everything is temporary.']
  }
  
  let intimateBase = []
  
  
  for(let prop in generalBase) {
    let optionIdx = generateRandomNumber(generalBase[prop].length)


    switch(prop) {
      case 'mood':
        intimateBase.push(`If you are feeling "${generalBase[prop][optionIdx]}".`)
        break
      case 'motivationalOutput':
        intimateBase.push(`It is known that "${generalBase[prop][optionIdx]}".`)
        break
      case 'advice':
        intimateBase.push(`You should: "${generalBase[prop][optionIdx]}".`)
        break
      default:
        intimateBase.push('Something went wrong.')
    }
  }

  function formatBase(base) {

    const formatted = intimateBase.join('\n')
    console.log(formatted)
  }
  
  formatBase(intimateBase);
