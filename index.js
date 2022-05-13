function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const generalBase = {
    mood: ['sad', 'stressed', 'happy', 'depressed'],
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
