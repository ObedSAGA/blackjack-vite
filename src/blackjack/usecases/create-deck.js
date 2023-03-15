import _ from 'underscore';

/**
 * This function creates a new deck.
 * @param {Array<String>} cardTypes Ex. ['C','D','H','S']
 * @param {Array<String>} especialCardTypes Ex. ['A','J','Q','K']
 * @returns {Array<String>} return and array with the new deck
 */
export const createDeck = (cardTypes, especialCardTypes) => {

    if ( !cardTypes || cardTypes.length === 0 ) 
        throw new Error( 'cardTypes are required as an array of strings');
    
    if ( !especialCardTypes || especialCardTypes.length === 0 ) 
        throw new Error( 'cardTypes are required as an array of strings');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let type of cardTypes ) {
            deck.push( i + type);
        }
    }

    for( let type of cardTypes ) {
        for( let esp of especialCardTypes ) {
            deck.push( esp + type);
        }
    }
    deck = _.shuffle( deck );

    return deck;
}
