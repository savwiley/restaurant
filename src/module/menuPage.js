const mainContent = document.querySelector(".mainContent");

function menuTest() {
    const testing = document.createElement("div");
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