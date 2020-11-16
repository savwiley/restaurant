const content = document.querySelector("body");

const createHeader = (() => {
    const header = document.createElement("header");
        header.setAttribute("class", "header")
        content.appendChild(header);
    const logo = document.createElement("img");
        logo.setAttribute("src", "../images/ice-cream.svg");
        logo.setAttribute("id", "logo");
        header.appendChild(logo);
    const name = document.createElement("h1");
        name.textContent = "The Ice Cream Shoppe";
        header.appendChild(name);
})();

const createNav = (() => {
    const nav = document.createElement("div");
        nav.setAttribute("class", "nav");
            const homeBtn = document.createElement("div");
                homeBtn.setAttribute("class", "navBtn");
                homeBtn.setAttribute("id", "homeBtn");
                homeBtn.textContent = "Home";
                nav.appendChild(homeBtn);
            const menuBtn = document.createElement("div");
                menuBtn.setAttribute("class", "navBtn");
                menuBtn.setAttribute("id", "menuBtn");
                menuBtn.textContent = "Menu";
                nav.appendChild(menuBtn);
            const contactBtn = document.createElement("div");
                contactBtn.setAttribute("class", "navBtn");
                contactBtn.setAttribute("id", "contactBtn");
                contactBtn.textContent = "Contact";
                nav.appendChild(contactBtn);
        content.appendChild(nav);
})();

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

/* images are too large for git, figure it out */