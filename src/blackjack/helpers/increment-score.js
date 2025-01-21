import { valueCard } from '../useCases'

/**
 * Funcion que actualiza la puntuacion en el HTML
 * @param {String} card Ejemplo: 'AS'
 * @param {Number} turn Ejemplo: 0 -> Player, 1 -> Computer
 * @param {Array<Number>} playersScore Variable global que almacena la puntacion de los contenedores
 * @param {NodeList<HTMLElement>} playersScoreHTML Nodos en el DOM que representa la puntuacion
 * @returns {Number} retorna la puntuacion actualizada
 */

export const incrementScore = (card, turn, playersScore, playersScoreHTML) => {
  playersScore[turn] += valueCard(card)
  console.log(playersScore[turn])
  console.log(playersScoreHTML[turn])
  playersScoreHTML[turn].innerText = playersScore[turn]

  return playersScore[turn]
}
