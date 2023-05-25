const fruitsArray = [
  {
    name: 'apple',
    img: 'image/apple.png',
  },
  {
    name: 'avocado',
    img: 'image/avocado.png',
  },
  {
    name: 'cherry',
    img: 'image/cherry.png',
  },

  {
    name: 'kiwi',
    img: 'image/kiwi.png',
  },

  {
    name: 'pomo',
    img: 'image/pomo.png',
  },
  {
    name: 'straberry',
    img: 'image/straberry.png',
  },
  {
    name: 'berry',
    img: 'image/berry.png',
  },
  {
    name: 'orange',
    img: 'image/orange.png',
  },
  {
    name: 'apple',
    img: 'image/apple.png',
  },
  {
    name: 'avocado',
    img: 'image/avocado.png',
  },
  {
    name: 'cherry',
    img: 'image/cherry.png',
  },

  {
    name: 'kiwi',
    img: 'image/kiwi.png',
  },

  {
    name: 'pomo',
    img: 'image/pomo.png',
  },
  {
    name: 'straberry',
    img: 'image/straberry.png',
  },
  {
    name: 'berry',
    img: 'image/berry.png',
  },
  {
    name: 'orange',
    img: 'image/orange.png',
  },
]

// shuffle randomly elements of fruits array;

fruitsArray.sort(() => 0.5 - Math.random())
const display = document.querySelector('.container')
const score = document.querySelector('.score')
const result = document.querySelector('.result')
let chosenArray = []
let chosenArrayId = []
const cardsWonArray = []

const createBoard = () => {
  for (let i = 0; i < fruitsArray.length; i++) {
    const imgCard = document.createElement('img')
    imgCard.setAttribute('src', 'image/blank.png')
    imgCard.setAttribute('data-id', i)
    display.appendChild(imgCard)
    imgCard.addEventListener('click', flipCard)
  }
}
createBoard()
//flipCard function
function flipCard(e) {
  let cardId = e.target.getAttribute('data-id')
  fruitsArray[cardId]
  chosenArray.push(fruitsArray[cardId].name)
  chosenArrayId.push(cardId)
  e.target.setAttribute('src', fruitsArray[cardId].img)
  //
  if (chosenArray.length == 2) {
    setTimeout(checkMatch, 700)
  }
}

//checkMatch function
const checkMatch = () => {
  const optionOneId = chosenArrayId[0]
  const optionTwoId = chosenArrayId[1]
  const cards = document.querySelectorAll('img')
  if (optionOneId != optionTwoId) {
    if (chosenArray[0] == chosenArray[1]) {
      //add sound
      let sound1 = new Audio('sound/s1.wav')
      sound1.play()
      // add text
      result.innerText = 'You found a match!'
      result.setAttribute(
        'class',
        'result animate__heartBeat animate__infinite',
      )
      setTimeout(() => {
        result.innerText = ''
        result.setAttribute('class', 'result animate__animated')
      }, 1300)
      cards[optionOneId].setAttribute('src', 'image/white.png')
      cards[optionTwoId].setAttribute('src', 'image/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWonArray.push(chosenArray)
    } else {
      //add sound
      let sound2 = new Audio('sound/s4.wav')
      sound2.play()
      cards[optionOneId].setAttribute('src', 'image/blank.png')
      cards[optionTwoId].setAttribute('src', 'image/blank.png')
    }
  } else {
    cards[optionOneId].setAttribute('src', 'image/blank.png')
    cards[optionTwoId].setAttribute('src', 'image/blank.png')
  }
  score.innerText = 'Score: ' + cardsWonArray.length
  chosenArray = []
  chosenArrayId = []

  if (cardsWonArray.length == fruitsArray.length / 2) {
    score.innerText = 'Congratulation!'
    result.innerText = 'Congratulation!'
    //add sound
    let sound2 = new Audio('sound/s5.wav')
    sound2.play()
    result.style.fontStyle = 'cursive'
    result.setAttribute('class', 'result animate__heartBeat animate__infinite')
    setTimeout(() => {
      result.innerText = ''
      score.innerText = ''
      result.setAttribute('class', '')
    }, 5000)
  }
}
function playAgain() {
  window.location.reload()
}
