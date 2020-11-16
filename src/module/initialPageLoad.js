const content = document.querySelector("div#content");

const createHeader = ((img) => {
    const header = document.createElement("header");
        header.setAttribute("class", "header")
        content.appendChild(header);
    const logo = document.createElement("img");
        logo.setAttribute("src", img);
        logo.setAttribute("id", "logo");
        header.appendChild(logo);
    const name = document.createElement("h1");
        name.textContent = "The Ice Cream Shoppe";
        header.appendChild(name);
})("../images/ice-cream.svg");

const createFooter = (() => {
    const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.innerHTML = '<a href="https://github.com/savwiley/restaurant">by savwiley</a>';
        footer.innerHTML += " | "
        footer.innerHTML += "made with webpack \r\n"
        footer.innerHTML += "images from pexels";
        footer.innerHTML += " | "
        footer.innerHTML += "logo from freepik \r\n"
        content.appendChild(footer);
})();


export default initialPageLoad;

/* maybe change links to logo images */