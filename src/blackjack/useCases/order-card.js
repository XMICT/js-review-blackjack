/**
 * Esta funcion ordena una nueva carta
 * @param {Array<String>} deck Ejemplo: ['AC','2D','8S']
 * @returns {String} retorna una nueva carta
 */

export const orderCard = (deck) => {
  if (!deck || deck.length === 0) throw new Error('No hay cartas en el deck')

  return deck.pop()
}
