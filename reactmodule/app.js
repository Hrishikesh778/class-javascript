import navbar from "./navbar.js";
import footer from "./footer.js";
import cards from "./cards.js";
import { navbarArr } from "./data.js";
import { cardData } from "./data.js";



function app(){
    return `
    <div class='nav'>
        ${navbar(navbarArr)}
    </div>
    ${cards(cardData)}
    ${footer()}
    `
}

export {app, navbarArr}