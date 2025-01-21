/**
 * Esta funcion inserta una imagen de una carta en el HTML
 * @param {String} card Ejemplo: 'AS'
 * @param {Number} turn Ejemplo: 0 -> Player, 1 -> Computer
 * @param {NodeList<HTMLElement>} containersCardsHTML Contenedores del maso
 */

export const createCard = (card, turn, containersCardsHTML) => {
  const cardImage = document.createElement('img')

  cardImage.classList.add('card')
  cardImage.src = `/js-review-blackjack/assets/cards/${card}.png`

  containersCardsHTML[turn].append(cardImage)
}
