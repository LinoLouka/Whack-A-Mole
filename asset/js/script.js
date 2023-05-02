//Récupération des données html
const circles = document.querySelectorAll("div.circle");
const score = document.querySelector("span");

// Fonction pour sélectionner un élément de cercle aléatoire
function selectRandomCircle() {
  // Supprimez la classe "mole" de tous les cercles
  circles.forEach((circle) => {
    circle.classList.remove("mole");
  });

  // Générez un index aléatoire pour sélectionner un élément de cercle
  const randomIndex = Math.floor(Math.random() * circles.length);

  // Récupérez l'élément de cercle correspondant à l'index aléatoire
  const randomCircle = circles[randomIndex];

  // Ajoutez la classe "mole" à l'élément de cercle sélectionné
  randomCircle.classList.add("mole");

  // Supprimez la classe "mole" de l'élément de cercle après un délai aléatoire
  setTimeout(() => {
    randomCircle.classList.remove("mole");
  }, Math.random() * 3000 + 1000); // Délai aléatoire entre 1 et 4 secondes
}

// Appelez la fonction selectRandomCircle() à intervalles réguliers pour sélectionner un cercle aléatoire
setInterval(selectRandomCircle, 1000); // Sélectionnez un cercle toutes les 1 seconde

// Ajouter un écouteur d'événement "click" à chaque cercle
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    if (circle.classList.contains("mole")) {
      // Ajouter 1 point au score
      let currentScore = parseInt(score.textContent);
      currentScore++;
      score.textContent = currentScore < 10 ? `0${currentScore}` : currentScore;

      // Supprimer la classe "mole" du cercle pour le faire disparaître
      circle.classList.remove("mole");
    }
  });
});
