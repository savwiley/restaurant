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
        const foot = document.createElement("div");
            foot.setAttribute("id", "foot");
            footer.appendChild(foot);

            const location = document.createElement("div");
                location.setAttribute("id", "footLoc");
                location.textContent = "4973 Lake Forest Dr. \r\nGarden City, NY 11530 \r\n \r\n555-555-8403";
                foot.appendChild(location);

            const social = document.createElement("div");
                social.setAttribute("id", "social");
                const twitter = document.createElement("i");
                    twitter.setAttribute("class", "fab fa-twitter");
                    social.appendChild(twitter);
                const facebook = document.createElement("i");
                    facebook.setAttribute("class", "fab fa-facebook-f");
                    social.appendChild(facebook);
                const yelp = document.createElement("i");
                    yelp.setAttribute("class", "fab fa-yelp");
                    social.appendChild(yelp);
                foot.appendChild(social);

        const credits = document.createElement("div");
            const gitCred = document.createElement("a");
                const gitLogo = document.createElement("i");
                    gitLogo.setAttribute("class", "fab fa-github");
                    gitCred.appendChild(gitLogo);
                gitCred.href = "https://github.com/savwiley/restaurant";
                credits.appendChild(gitCred);
            const wpCred = document.createElement("a");
                wpCred.innerHTML = "\r\n made with webpack";
                wpCred.href = "https://webpack.js.org/";
                credits.appendChild(wpCred);
            const pexelsCred = document.createElement("a");
                pexelsCred.innerHTML = "images from pexels";
                pexelsCred.href = "https://www.pexels.com/";
                credits.appendChild(pexelsCred);
            const logoCred = document.createElement("a");
                logoCred.innerHTML = "logo from freepik";
                logoCred.href = "https://www.freepik.com/";
                credits.appendChild(logoCred);
            const year = document.createElement("span");
                year.textContent = "\r\n© 2020";
                credits.appendChild(year);
            footer.appendChild(credits);

        content.appendChild(footer);
};

function initialPageLoad() {
    createHeader();
    createNav();
    createBody();
    createFooter();
};


export default initialPageLoad;