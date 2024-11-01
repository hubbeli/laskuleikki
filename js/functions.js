const animalContainer = document.getElementById("animal-container");

const animals = [
    "img/cow.png",
    "img/duck.png",
    "img/horse.png",
    "img/pig.png",
    "img/sheep.png",
];

// Funktio eläinten näyttämiseen
function showRandomAnimals() {
    animalContainer.innerHTML = ""; // Tyhjennetään säiliö

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
}

// Kutsutaan funktiota, kun sivu latautuu
showRandomAnimals();