import { askNewCard, cardValue, createCardHTML } from "./";

/**
 * Manage computer turn
 * @param {Number} minPoints Minimum points for the computer to win the game
 * @param {HTMLElement} pointsHTML HTML elements to display points
 * @param {HTMLElement} divPcCards HTML elements to display to show the cards
 * @param {Array<String>} deck Card deck
 */
export const computerTurn = ( minPoints, pointsHTML, divPcCards, deck = [] ) => {

    if ( !minPoints ) throw new Error("minPoints are required");
    if ( !pointsHTML ) throw new Error("pointsHTML is required");

    let pcPoints = 0;

    do {
        const card = askNewCard( deck );

        pcPoints = pcPoints + cardValue( card );
        pointsHTML.innerText = pcPoints;
        
        const imgCard = createCardHTML( card );
        divPcCards.append( imgCard );

        if( minPoints > 21 ) {
            break;
        }

    } while(  ( pcPoints < minPoints )  && ( minPoints <= 21 ) );

    setTimeout(() => {
        if( pcPoints === minPoints ) {
            alert('Empate :(');
        } else if ( minPoints > 21 ) {
            alert('¡Has perdido!')
        } else if( pcPoints > 21 ) {
            alert('¡Enhorabuena! jugador ganador');
        } else {
            alert('¡Has perdido!')
        }
    }, 100 );
}