//récupération des données html
const score = document.querySelector("div.score");
const circle = document.querySelectorAll("div.circle");

//Création du texte de score
let point; //point gagné dans le jeu
const text = document.createElement("p");
text.className = "texte";
score.appendChild(text);
text.textContent = "score: " + point;

//Event d'apparation des taupes
