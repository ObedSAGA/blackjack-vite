/**
 * 
 * @param {String} card 
 * @returns {HTMLImageElement} returns an image
 */
export const createCardHTML = ( card ) => {

    if ( !card ) throw new Error("Card is required");

// <img class="carta" src="assets/cartas/2C.png">
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${ card }.png`; //3H, JD
    imgCard.classList.add('carta');

    return imgCard;
}