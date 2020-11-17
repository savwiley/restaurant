function menuTest() {
    const mainContent = document.querySelector(".mainContent");
    const inner = document.getElementById("inner");
        inner.remove();
    const testing = document.createElement("div");
        testing.setAttribute("id", "inner");
        testing.style.width = "100px";
        testing.style.height = "100px";
        testing.style.background = "green";
        mainContent.appendChild(testing);
    mainContent.style.background = "hotpink";
};

function menuPage() {
    menuTest();
};

export default menuPage;