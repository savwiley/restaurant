import initialPageLoad from "./module/initialPageLoad";
import homePage from "./module/homePage";
import menuPage from "./module/menuPage";
import contactPage from "./module/contactPage";

const run = (() => {
    initialPageLoad();
    homePage();
})();

const homeBtn = document.getElementById("homeBtn");
    homeBtn.addEventListener('click', homePage);
const menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener('click', menuPage);
const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener('click', contactPage);