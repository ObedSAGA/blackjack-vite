/**
 * This function return the value of the given card.
 * @param {String} card is a string representing a card in the deck.
 * @returns {Number} Returns a number representing the value of the card.
 */

export const cardValue = ( card ) => {

    const value = card.substring( 0, card.length - 1 );
    return ( isNaN( value ) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1;
}