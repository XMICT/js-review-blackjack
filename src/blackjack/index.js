/* eslint-disable indent */
/* eslint-disable one-var */

// import { createDeck as createNewDeck } from './useCases/create-deck';
import { createCard, incrementScore } from './helpers'
import { createDeck, orderCard, computerTurn } from './useCases'

let deck = [],
    playersScore = []

const sticks = ['C', 'D', 'H', 'S'],
      numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'J', 'K', 'Q']

// Referencias del HTML
const btnNew = document.querySelector('#btn-new'),
      btnStop = document.querySelector('#btn-stop'),
      btnOrder = document.querySelector('#btn-order')

const containersCardsHTML = document.querySelectorAll('.box-cards'),
      playersScoreHTML = document.querySelectorAll('small')

// ================ Optimizaciones ================
const initGame = (numPlayers = 2) => {
  deck = createDeck(numbers, sticks)
  playersScore = []

  for (let i = 0; i < numPlayers; i++) {
    playersScore.push(0)
  }
}

// ================ Eventos ================
btnOrder.addEventListener('click', () => {
  const card = orderCard(deck)

  const playerScore = incrementScore(card, 0, playersScore, playersScoreHTML)
  createCard(card, 0, containersCardsHTML)

  if (playerScore > 21) {
    console.warn('Perdiste')
    btnOrder.disabled = true
    btnStop.disabled = true

    computerTurn(playerScore, deck, playersScore, playersScoreHTML, containersCardsHTML)
  } else if (playerScore === 21) {
    console.warn('21, Genial!')
    btnStop.disabled = true
    btnOrder.disabled = true

    computerTurn(playerScore, deck, playersScore, playersScoreHTML, containersCardsHTML)
  }
})

btnNew.addEventListener('click', () => {
  initGame()

  btnStop.disabled = false
  btnOrder.disabled = false

  playersScoreHTML.forEach((score) => (score.innerText = '0'))
  containersCardsHTML.forEach((container) => (container.innerHTML = ''))
})

btnStop.addEventListener('click', () => {
  btnStop.disabled = true
  btnOrder.disabled = true

  computerTurn(playersScore[0], deck, playersScore, playersScoreHTML, containersCardsHTML)
})

initGame()
