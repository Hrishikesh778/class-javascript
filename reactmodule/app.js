import footer from "./footer.js";
import cards from "./cards.js";
import navbar from "./navbar.js";

function app() {
    let arr = ['Home', 'About',  'Contact', 'services', 'Help']

    return ` 
    ${navbar(arr)}
    ${cards("./image/camera.jfif", "A girl standing with a camera")}
    ${cards("./image/download_(1).jfif", "A girl standing with a camera")}
    ${cards("./image/ww.jfif", "A girl standing with a camera")}
    ${footer()}
    `
}

export default app