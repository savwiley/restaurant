function init() {
    const mainContent = document.querySelector(".mainContent");
    const inner = document.getElementById("inner");
        inner.remove();
    const body = document.createElement("div");
        body.setAttribute("id", "inner");
        mainContent.appendChild(body);
};

function covid() {
    const body = document.getElementById("inner");
        const corona = document.createElement("div");
            corona.setAttribute("class", "covid");
            const coronaHeader = document.createElement("h2");
                coronaHeader.setAttribute("id", "covidHeader");
                coronaHeader.textContent = "COVID-19 RESTRICTIONS";
                corona.appendChild(coronaHeader);
            const coronaBody = document.createElement("div");
                coronaBody.setAttribute("id", "covidBody");
                coronaBody.textContent = "To keep you, your family, and our employees safe, we offer drive-thru, pick-up, and outdoor dining. Indoor dining is temporaily closed. Masks must be worn in store.";
                corona.appendChild(coronaBody);
            body.appendChild(corona);
};

function homeImage() {
    const body = document.getElementById("inner");
        const img = document.createElement("div");
            img.setAttribute("class", "homeImage");
            const text = document.createElement("div");
                text.setAttribute("id", "text")
                text.textContent = "Best Ice Cream in Town";
                img.appendChild(text);
            body.appendChild(img);
};

function blurb() {
    const body = document.getElementById("inner");
        const header = document.createElement("h1");
            header.textContent = "Try Our Newest Flavors!";
            header.setAttribute("id", "homeHeader");
            body.appendChild(header);
        const blurbText = document.createElement("p");
            blurbText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel auctor lectus. Nulla non est id lorem vehicula ornare. Morbi ante mi, porta et luctus id, pulvinar nec dui. Sed quis venenatis nisi. Fusce a ipsum sed velit efficitur convallis. Fusce eleifend facilisis nisl, nec sodales eros cursus non. Sed nunc elit, faucibus eu quam sed, tincidunt fermentum dolor. \r\n \r\n"
            blurbText.textContent += "Phasellus placerat magna tincidunt ipsum suscipit, ac placerat lorem volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tincidunt vitae purus a finibus. Sed lacinia fermentum interdum. Morbi eget lacus consectetur, faucibus ex quis, pharetra quam. Quisque nec commodo quam. Duis sed risus bibendum, posuere eros non, pretium diam. Etiam consectetur laoreet est, nec suscipit eros malesuada vitae. \r\n \r\n"
            blurbText.textContent += "Suspendisse at lorem a mi dignissim luctus. Phasellus enim turpis, tempor at tempor sit amet, lacinia sed lacus. Aliquam urna sapien, bibendum et metus at, ornare ullamcorper tortor. Donec elementum congue diam, sit amet ornare quam mollis hendrerit. Nullam nec ultricies sem. Vivamus a elit bibendum, scelerisque augue et, feugiat purus. Ut tempor vulputate velit, vitae elementum sapien dignissim eget. Aenean pulvinar velit faucibus, posuere velit eget, dapibus justo. Aenean tristique dolor eget leo hendrerit rutrum."
            body.appendChild(blurbText);
}

/*
add pictures of "new flavors"
something about the owners??
covid restrictions
*/

function homePage() {
    init();
<<<<<<< HEAD
    covid();
=======
>>>>>>> 2ca9ebb9e290b7cc04de359fc9346fb62e730855
    homeImage();
    blurb();
};

export default homePage;