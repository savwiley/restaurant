const content = document.querySelector("div#content");

function createHeader() {
    const header = document.createElement("header");
        header.setAttribute("class", "header")
        const logo = document.createElement("img");
            logo.setAttribute("src", "../images/ice-cream.svg");
            logo.setAttribute("id", "logo");
            header.appendChild(logo);
        const name = document.createElement("h1");
            name.textContent = "The Ice Cream Shoppe";
            header.appendChild(name);
        content.appendChild(header);
};

function createNav() {
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
};

function createBody() {
    const mainBody = document.createElement("main");
        mainBody.setAttribute("id", "mainBody");
            const mainContent = document.createElement("p");
            mainContent.setAttribute("class", "mainContent");
                const inner = document.createElement("p");
                inner.setAttribute("id", "inner");
                mainContent.appendChild(inner);
            mainBody.appendChild(mainContent);
        content.appendChild(mainBody);
};

function createFooter() {
    const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        const gitCred = document.createElement("a");
            gitCred.innerHTML = "by savwiley";
            gitCred.href = "https://github.com/savwiley/restaurant";
            footer.appendChild(gitCred);
        const wpCred = document.createElement("a");
            wpCred.innerHTML = "made with webpack";
            wpCred.href = "https://github.com/savwiley/restaurant";
            footer.appendChild(wpCred);
        const pexelsCred = document.createElement("a");
            pexelsCred.innerHTML = "images from pexels";
            pexelsCred.href = "https://github.com/savwiley/restaurant";
            footer.appendChild(pexelsCred);
        const logoCred = document.createElement("a");
            logoCred.innerHTML = "logo from freepik";
            logoCred.href = "https://github.com/savwiley/restaurant";
            footer.appendChild(logoCred);
        content.appendChild(footer);
};

function initialPageLoad() {
    createHeader();
    createNav();
    createBody();
    createFooter();
};


export default initialPageLoad;

/* maybe change links to logo images 
maybe add social media to footer*/

/* images are too large for git, figure it out */

/* https://theodinproject.com/lessons/restaurant-page */