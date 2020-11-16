import initialPageLoad from "./module/initialPageLoad";
import homePage from "./module/homePage";

const run = (() => {
    initialPageLoad();
    homePage();
    events();
})();

function events() {
    const homeBtn = document.querySelector("#homeBtn");
    homeBtn.addEventListener('click', homePage);
}