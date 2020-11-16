const mainContent = document.querySelector(".mainContent");

function test() {
    const testing = document.createElement("div");
        testing.style.width = "100px";
        testing.style.height = "100px";
        testing.style.background = "blue";
        mainContent.appendChild(testing);
    mainContent.style.background = "green";
};

function homePage() {
    test();
};

export default homePage;