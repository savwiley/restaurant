import initialPageLoad from "./module/initialPageLoad";
import homePage from "./module/homePage";
import menuPage from "./module/menuPage";

run();

const run = (() => {
    initialPageLoad();
    homePage();
    events();
})();

function events() {
    const homeBtn = document.getElementById("homeBtn");
        homeBtn.addEventListener('click', homePage);
    const menuBtn = document.getElementById("menuBtn");
        menuBtn.addEventListener('click', menuPage);
};