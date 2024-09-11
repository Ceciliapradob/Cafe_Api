document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://api.sampleapis.com/coffee/hot";

    function loadCoffeeOptions() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Datos de café:", data);
                displayCoffeeOptions(data);
            })
            .catch(error => console.error("Error al cargar los datos:", error));
    }

    function displayCoffeeOptions(coffees) {
        const coffeeOptionsDiv = document.getElementById("coffee-options");

        coffees.forEach(coffee => {
            const button = document.createElement("button");
            button.innerText = coffee.title;
            button.addEventListener("click", () => fillCoffeeCup(coffee));
            coffeeOptionsDiv.appendChild(button);
        });
    }

    function fillCoffeeCup(coffee) {
        const coffeeFillDiv = document.querySelector(".coffee-fill");
        coffeeFillDiv.style.height = "100%"; // Simula el vaso lleno
        alert(`¡Has seleccionado ${coffee.title}!`);

        displayCoffeeImage(coffee.image);
    }

    function displayCoffeeImage(imageUrl) {
        let coffeeImage = document.querySelector(".coffee-image");

        if (!coffeeImage) {
            coffeeImage = document.createElement("img");
            coffeeImage.className = "coffee-image";
            document.querySelector(".container").appendChild(coffeeImage);
        }

        coffeeImage.src = imageUrl;
    }

    loadCoffeeOptions();
});
