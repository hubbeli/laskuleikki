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

let correctCount = 0; // oikein vastatut
let incorrectCount = 0; // väärin vastatut
let correctAnswer;
let isAnswered = false; // Estää klikkaukset oikean vastauksen jälkeen

const updateAnswerCounts = () => {
    document.querySelector('#correct-count').value = correctCount;
    document.querySelector('#incorrect-count').value = incorrectCount;
}
addEventListener("DOMContentLoaded", () => {
    updateAnswerCounts(); // päivittää laskurit
});

// Funktio eläinten näyttämiseen
function showRandomAnimals() {
    animalContainer.innerHTML = "";
    numberContainer.innerHTML = "";
    feedback.innerHTML = "";
    isAnswered = false; // Nollataan klikkausesto uuden kysymyksen alussa

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
    if (isAnswered) return; // Estää klikkauksen oikean vastauksen jälkeen
    if (selectedNumber === correctAnswer) {
        feedback.innerHTML = `<p><img src="img/smile.png" alt="Oikein" class="feedback-icon"><br>Hyvin pelattu! Oikea vastaus on tosiaan ${correctAnswer}.</p>`; // Oikea vastaus
        correctCount++;  // kasvattaa oikein-laskuria

        // Luodaan uusi peli -painike, jonka sisällä on teksti ja traktori-kuvake
        const newGameButton = document.createElement("button");
        newGameButton.classList.add("new-game-button");
        newGameButton.onclick = showRandomAnimals; // Käynnistää uuden pelin klikkauksella

        // Lisätään teksti ja kuva painikkeen sisään
        const newGameText = document.createElement("span");
        newGameText.textContent = "Pelaa uudelleen"; // Teksti painikkeessa
        newGameText.classList.add("new-game-text");

        // Lisätään traktori, jonka klikkaaminen aloittaa uuden pelin
        const tractorIcon = document.createElement("img");
        tractorIcon.src = "img/tractor.png";
        tractorIcon.alt = "Pelaa uudelleen";
        tractorIcon.classList.add("tractor-icon");

        newGameButton.appendChild(newGameText);
        newGameButton.appendChild(tractorIcon);

        // Lisätään painike feedback-elementtiin
        feedback.appendChild(newGameButton);

        isAnswered = true; // Estää lisää klikkauksia oikean vastauksen jälkeen
    } else {
        feedback.innerHTML = `<p><img src="img/sad.png" alt="Väärin" class="feedback-icon"><br>Ei ihan, yritähän uudelleen!</p>`; // Väärä vastaus
        incorrectCount++; // kasvattaa väärin-laskuria
    }

    // Tallennetaan pisteet sessionStorageen
    sessionStorage.setItem("correctCount", correctCount);
    sessionStorage.setItem("incorrectCount", incorrectCount);
    
    updateAnswerCounts();
}

// Kutsutaan funktiota, kun sivu latautuu
showRandomAnimals();