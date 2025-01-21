import _ from 'underscore'

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} numbers Ejemplo: [2,3,4,5,6,7,8,9,10,'A','J','K','Q']
 * @param {Array<String>} sticks Ejemplo: ['C','D','H','S']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const createDeck = (numbers, sticks) => {
  if (!sticks || sticks.length === 0) throw new Error('sticks obligatorio como un arreglo de string')
  if (!numbers || numbers.length === 0) throw new Error('numbers obligatorio como un arreglo de string')

  const deck = []
  for (const number of numbers) {
    for (const stick of sticks) {
      deck.push(number + stick)
    }
  }

  return _.shuffle(deck) // Genera de forma aleatoria los elementos del array
}
