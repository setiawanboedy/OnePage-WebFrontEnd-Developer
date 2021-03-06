import "regenerator-runtime";
// component
import "./script/components/nav-bar.js";
import "./script/components/landing-section.js";
import "./script/components/corona-section.js";
import "./script/components/article-section.js";
import "./script/components/tips-section.js";
import "./script/components/subscribe-section.js";
import "./script/components/footer-section.js";
// image
import "./image/icon.png";
import "./image/Logo.png";
import "./image/landing.png";
import "./image/bg-mid-top.png";
import "./image/bg-right-midd.png";
import "./image/bg-right-top.png";
import "./image/bg-top-left.png";
import "./image/ring1.png";
import "./image/ring2.png";
import "./image/imageArtikel.png";
import "./image/bg-artikel.png";
import "./image/subrek.png";
import "./image/footer.png";
import "./image/cucitangan.png";
import "./image/distance.png";
import "./image/jalan-jalan.png";
import "./image/joging.png";
import "./image/stayhome.png";
import "./image/blank-image.png";
import "./image/preloader.gif";

// plugin
import "./style/bootstrap.min.css";
import "./style/typography.css";
// style
import "./style/style.css";
import "./style/global/_global.css";
import "./style/global/_variables.css";


import navbarFixed from "./script/view/navbar-fixed.js";
import getDataIndonesia from "./script/data/data-corona.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", navbarFixed);
document.addEventListener("DOMContentLoaded", getDataIndonesia);
document.addEventListener("DOMContentLoaded", main);