import _ from 'underscore';
import { askNewCard, cardValue, createDeck, computerTurn, createCardHTML } from './usecases'
/**
 * String representation of a card:
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

// Global variables
let   deck              = [];
const cardTypes         = ['C','D','H','S'];
const especialCardTypes = ['A','J','Q','K'];

let playerPoints = 0;
let pcPoints     = 0;

//

// HTML references
const btnAskCard   = document.querySelector('#btnAskCard');
const btnStop = document.querySelector('#btnStop');
const btnNew   = document.querySelector('#btnNew');
const divePlayerCards     = document.querySelector('#jugador-cartas');
const divPcCards = document.querySelector('#computadora-cartas');
const pointsHTML = document.querySelectorAll('small');
//

// Create a new deck and assign it to deck variable
deck = createDeck( cardTypes, especialCardTypes );
//

// Events
btnAskCard.addEventListener('click', () => {

    const card = askNewCard( deck );
    
    playerPoints = playerPoints + cardValue( card );
    pointsHTML[0].innerText = playerPoints;

    const imgCarta = createCardHTML( card );
    divePlayerCards.append( imgCarta );

    if ( playerPoints > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnAskCard.disabled   = true;
        btnStop.disabled = true;
        computerTurn( playerPoints, pointsHTML[1], divPcCards, deck );

    } else if ( playerPoints === 21 ) {
        console.warn('21, genial!');
        btnAskCard.disabled   = true;
        btnStop.disabled = true;
        computerTurn( playerPoints, pointsHTML[1], divPcCards, deck );
    }
});

btnStop.addEventListener('click', () => {
    btnAskCard.disabled   = true;
    btnStop.disabled = true;

    computerTurn( playerPoints, pointsHTML[1], divPcCards, deck );
});

btnNew.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = createDeck(cardTypes, especialCardTypes);

    playerPoints = 0;
    pcPoints = 0;
    
    pointsHTML[0].innerText = 0;
    pointsHTML[1].innerText = 0;

    divPcCards.innerHTML = '';
    divePlayerCards.innerHTML = '';

    btnAskCard.disabled   = false;
    btnStop.disabled = false;
});
//