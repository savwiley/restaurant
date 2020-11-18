function init() {
    const mainContent = document.querySelector(".mainContent");
    const inner = document.getElementById("inner");
        inner.remove();
    const body = document.createElement("div");
        body.setAttribute("id", "inner");
        body.textContent = "I'm a menu";
        mainContent.appendChild(body);
};

function fillInner() {
    const body = document.getElementById("inner");
        body.style.background = "green";
        body.textContent = "yoooo";
}

function menuPage() {
    init();
    fillInner();
};

export default menuPage;