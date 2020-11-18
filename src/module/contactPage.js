function init() {
    const mainContent = document.querySelector(".mainContent");
    const inner = document.getElementById("inner");
        inner.remove();
    const body = document.createElement("div");
        body.setAttribute("id", "inner");
        mainContent.appendChild(body);
};

function fillInner() {
    const body = document.getElementById("inner");
        body.style.background = "pink";
        body.textContent = "yoooo";
}

function contactPage() {
    init();
    fillInner();
};

export default contactPage;