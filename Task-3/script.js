
const specialBtn = document.getElementById("specialBtn");

const specialText = document.getElementById("specialText");


specialBtn.addEventListener("click", function() {

    specialText.textContent =
        "Today's Special: Creamy Cappuccino ☕";

});

const coffeeButtons =
    document.querySelectorAll(".coffeeBtn");


const selectedTitle =
    document.getElementById("selectedTitle");


const selectedDescription =
    document.getElementById("selectedDescription");


coffeeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const title =
            button.getAttribute("data-title");

        const description =
            button.getAttribute("data-description");


        selectedTitle.textContent = title;

        selectedDescription.textContent =
            description;

    });

});
