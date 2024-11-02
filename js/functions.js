const animalContainer = document.getElementById("animal-container");
const numberContainer = document.getElementById("number-container");
const feedback = document.getElementById("feedback");

const animals = [
    "img/cow.png",
    "img/duck.png",
    "img/horse.png",
    "img/pig.png",
    "img/sheep.png",
];

let correctAnswer;

// Funktio eläinten näyttämiseen
function showRandomAnimals() {
    animalContainer.innerHTML = "";
    numberContainer.innerHTML = "";

    const randomAnimal = animals[Math.floor(Math.random() * animals.length)]; // Valitaan satunnainen eläinkuva
    const animalCount = Math.floor(Math.random() * 10) + 1; // Valitaan satunnainen määrä (1–10) eläinkuvia
    correctAnswer = Math.floor(Math.random() * 10) + 1; // Asetetaan oikea vastaus

    for (let i = 0; i < correctAnswer; i++) {
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
            img.onclick = () => checkAnswer(i); // Tarkistaa vastauksen klikkauksesta
            numberContainer.appendChild(img);
        }
}

// Vastausten tarkistus
function checkAnswer(selectedNumber) {
    if (selectedNumber === correctAnswer) {
        feedback.innerHTML = "<img src='img/smile.png' alt='Oikein!' />"; // Oikea vastaus
    } else {
        feedback.innerHTML = "<img src='img/sad.png' alt='Väärin!' />"; // Väärä vastaus
    }
}

// Kutsutaan funktiota, kun sivu latautuu
showRandomAnimals();