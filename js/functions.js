const animalContainer = document.getElementById("animal-container");
const numberContainer = document.getElementById("number-container");

const animals = [
    "img/cow.png",
    "img/duck.png",
    "img/horse.png",
    "img/pig.png",
    "img/sheep.png",
];

// Funktio eläinten näyttämiseen
function showRandomAnimals() {
    animalContainer.innerHTML = "";
    numberContainer.innerHTML = "";

    // Valitaan satunnainen eläinkuva
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    
    // Valitaan satunnainen määrä (1–10) eläinkuvia
    const animalCount = Math.floor(Math.random() * 10) + 1;

    // Lisätään valittu eläinkuva animalContaineriin oikea määrä kertoja
    for (let i = 0; i < animalCount; i++) {
        const img = document.createElement("img");
        img.src = randomAnimal; // Määritellään valitun eläimen kuva lähteeksi
        img.classList.add("animal"); // Luokka tyyliä varten
        animalContainer.appendChild(img); // Lisätään kuva säiliöön
    }

        // Luo numerokuvakkeet
        for (let i = 1; i <= 10; i++) {
            const img = document.createElement("img");
            img.src = `img/number${i}.png`;
            img.classList.add("number-button");
            numberContainer.appendChild(img);
        }
}

// Kutsutaan funktiota, kun sivu latautuu
showRandomAnimals();