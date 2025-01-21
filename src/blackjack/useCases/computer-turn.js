// Turno de Computadora

import { createCard, incrementScore } from '../helpers'
import { orderCard } from './order-card'

/**
 * Funcion que simula el turno de la computadora y evalua el ganador
 * @param {Number} score Puntuacion del jugador -> [15]
 * @param {Array<Number>} deck Maso del juego -> [9S, AC, AD]
 * @param {Array<Number>} playersScore Puntuacion del jugador y la computadora -> [15, 21]
 * @param {NodeList<HTMLElement>} playersScoreHTML Nodos en el DOM que representa la puntuacion
 * @param {NodeList<HTMLElement} containersCardsHTML Contenedores del maso
 */

export const computerTurn = (score, deck, playersScore, playersScoreHTML, containersCardsHTML) => {
  // const computerIndex = playersScore.length - 1
  const playerIndex = playersScore.length - 1
  let computerScore = playersScore[playerIndex]

  do {
    const card = orderCard(deck)

    computerScore = incrementScore(card, playerIndex, playersScore, playersScoreHTML)
    createCard(card, playerIndex, containersCardsHTML)

    if (computerScore > 21) break
  // eslint-disable-next-line no-unmodified-loop-condition
  } while (computerScore <= score && score <= 21)

  determineWinner(playersScore)
}

const determineWinner = (playersScore) => {
  const [score, computerScore] = playersScore

  setTimeout(() => {
    let message = ''

    if (score === 21) message = 'Ganaste!'
    else if (score > 21) message = 'Perdiste!'
    else if (computerScore > 21) message = 'Ganaste!'
    else if (computerScore < score) message = 'Ganaste!'
    else if (computerScore > score) message = 'Perdiste!'
    else if (computerScore === score) message = 'Empate!'

    // eslint-disable-next-line no-undef
    alert(message)
  }, 100)
}
