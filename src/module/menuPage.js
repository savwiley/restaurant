function init() {
    const mainContent = document.querySelector(".mainContent");
    const inner = document.getElementById("inner");
        inner.remove();
    const body = document.createElement("div");
        body.setAttribute("id", "inner");
        mainContent.appendChild(body);
};

function flavors() {
    const body = document.getElementById("inner");
        const flavBoard = document.createElement("div");
            flavBoard.setAttribute("class", "flavors");
            body.appendChild(flavBoard);
            const flavHeader = document.createElement("h1");
                flavHeader.textContent = "33 Flavors!";
                flavHeader.setAttribute("id", "flavHeader");
                flavBoard.appendChild(flavHeader);
            const colOne = document.createElement("div");
                colOne.setAttribute("id", "columnOne");
                colOne.textContent = "Vanilla * † \r\n Chocolate * \r\n Strawberry * \r\n Butter Pecan § \r\n Praline § \r\n Raspberry † \r\n Pineapple * † \r\n Cherry Jubilee \r\n Mango * † \r\n Lemon * \r\n Orange *";
                flavBoard.appendChild(colOne);
            const colTwo = document.createElement("div");
                colTwo.setAttribute("id", "columnTwo");
                colTwo.textContent = "Watermelon * \r\n Coconut * \r\n Caramel \r\n Turtle § \r\n Peanut Butter § \r\n Green Tea * † \r\n Cookies'n'Cream \r\n Cookie Dough \r\n Hot Fudge \r\n Chocolate Chip * \r\n Mint * †";
                flavBoard.appendChild(colTwo);
            const colThree = document.createElement("div");
                colThree.setAttribute("id", "columnThree");
                colThree.textContent = "Mint Chocolate Chip * \r\n Peppermint * \r\n Pistachio * † § \r\n Cotton Candy \r\n Birthday Cake \r\n Cheesecake \r\n Pumpkin Spice \r\n Rum Raisin † \r\n Banana Nut † § \r\n Rocky Road § \r\n Licorice Twist *";
                flavBoard.appendChild(colThree);
            const warnings = document.createElement("div");
                warnings.setAttribute("class", "warnings");
                const warnVegan = document.createElement("div");
                    warnVegan.setAttribute("id", "vegan");
                    warnVegan.textContent = "VEGAN OPTION AVAILABLE *";
                    warnings.appendChild(warnVegan);
                const warnSugar = document.createElement("div");
                    warnSugar.setAttribute("id", "sugar");
                    warnSugar.textContent = "SUGAR-FREE †";
                    warnings.appendChild(warnSugar);
                const warnNuts = document.createElement("div");
                    warnNuts.setAttribute("id", "nuts");
                    warnNuts.textContent = "CONTAINS NUTS §";
                    warnings.appendChild(warnNuts);
                flavBoard.appendChild(warnings);
<<<<<<< HEAD
            const toppings = document.createElement("h1");
                toppings.setAttribute("id", "toppings");
                toppings.textContent = "Over 100 Toppings!"
                flavBoard.appendChild(toppings);
};

=======
};

/*
NON-DAIRY/VEGAN / SUGAR-FREE / CONTAINS NUTS

BOWLS / CONES / SUNDAES / BANANA SPLITS / CAKES
*/

>>>>>>> 2ca9ebb9e290b7cc04de359fc9346fb62e730855
function menu(img, title, desc, price) {
    const body = document.getElementById("inner");
        const itemCard = document.createElement("div");
            itemCard.setAttribute("class", "menuItem");
            itemCard.style.background = `url("${img}") center/cover`;
            const itemTitle = document.createElement("div");
                itemTitle.setAttribute("id", "menuTitle");
                itemTitle.textContent = title;
                itemCard.appendChild(itemTitle);
            const itemPrice = document.createElement("div");
                itemPrice.setAttribute("id", "menuPrice");
                itemPrice.textContent = price;
                itemCard.appendChild(itemPrice);
            const itemDesc = document.createElement("div");
                itemDesc.setAttribute("id", "menuDesc");
                itemDesc.textContent = desc;
                itemCard.appendChild(itemDesc);
        body.appendChild(itemCard);;
};

function runMenu() {
    menu("../images/pexels-yurii-hlei-1425174.jpg", "Cones", "Try our ice cream scoop by scoop with your choice of waffle cones and toppings.", "$2 per scope");
    menu("../images/pexels-jer-chung-2156698.jpg", "Bowls", "Enjoy your own custom made sundae with over 100 fresh toppings to choose from.", "$2 per oz.");
    menu("../images/pexels-jeswin-thomas-5570887.jpg", "Banana Splits", "Three scoops of your choice with bananas, whip cream, cherries, and optional nuts. It doesn't get better than this.", "$8");
    menu("../images/pexels-jasmine-lew-140831.jpg", "Ice Cream Cakes", "We now offer custom made to order ice cream cakes! A round, eight-inch, two-layered cake with your choices of two ice creams flavors, designs, and fresh toppings.", "$30");
    menu("../images/pexels-julia-kuzenkov-1132348.jpg", "Gallon Buckets", "Enjoy our ice cream at home, too! You can buy your own gallon bucket of whatever flavor you desire. Maximum of two flavors per bucket.", "$15");
    menu("../images/pexels-mikkel-bendix-978947.jpg", "Dog Friendly Treats", "Your dog can also enjoy their own scoop of animal-safe ice cream.", "$1 per scoop");
};

function menuPage() {
    init();
    flavors();
    runMenu();
};

export default menuPage;