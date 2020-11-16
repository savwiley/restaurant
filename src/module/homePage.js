const content = document.querySelector("div#content");

const test = (() => {
    const testing = document.createElement("div");
        testing.style.width = "400px";
        testing.style.height = "400px";
        testing.style.background = "hotpink";
        content.appendChild(testing);
    content.style.background = "green";
})();



export default homePage;