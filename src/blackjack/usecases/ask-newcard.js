
/**
 * This function give a new card in the current turn.
 * @param {Array<String>} deck is a string array
 * @returns {String} return a card from deck
 */

export const askNewCard = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No cards available in the deck';
    }
    const card = deck.pop();
    return card;
}