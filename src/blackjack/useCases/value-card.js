/**
 * Funcion que retorna el valor numerico de una carta
 * @param {String} card Ejemplo: 'AC'
 * @returns {Number} retorna el valor numerico de la carta
 */

export const valueCard = (card) => {
  if (!card) throw new Error('Carta no existe')

  const value = card.substring(0, card.length - 1)

  return isNaN(value) // Condicion 1: Validar si es un numero
    ? value === 'A'
      ? 11
      : 10 // Condicion 2: Si el valor es un As = 11, si es J,Q,K = 10
    : value * 1
}
