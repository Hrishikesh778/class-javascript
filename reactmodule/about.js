import navbar from "./navbar.js";
import footer from "./footer.js";

document.getElementById('about').innerHTML = navbar(['Home', 'About',  'Contact']) + footer()