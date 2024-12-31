import navbar from "./navbar.js";
import footer from "./footer.js";
import { navbarArr } from "./data.js";
document.getElementById('about').innerHTML = navbar(navbarArr) + footer()