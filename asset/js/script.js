// Récupération des données html
const circles = document.querySelectorAll("div.circle");
const score = document.querySelector("span");

// Séléction aléatoire d'un élément de cercle
function selectRandomCircle() {
  // Supprimez la classe "mole" de tous les cercles
  circles.forEach((circle) => {
    circle.classList.remove("mole");
  });

  // Générez un randomIndex pour sélectionner
  const randomIndex = Math.floor(Math.random() * circles.length);

  // Récupérez l'élément de cercle correspondant à randomIndex
  const randomCircle = circles[randomIndex];

  // Ajoutez la classe "mole"
  randomCircle.classList.add("mole");

  // Supprimez la classe "mole"
  setTimeout(() => {
    randomCircle.classList.remove("mole");
  }, Math.random() * 3000 + 1000); // Délai aléatoire entre 1 et 4 secondes
}

// Appelez la fonction selectRandomCircle() à intervalles réguliers
setInterval(selectRandomCircle, 1000); // Sélectionnez un cercle toutes les seconde

// Ajout d'un événement "click" à chaque cercle
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    if (circle.classList.contains("mole")) {
      // Ajouter 10 point au score
      let currentScore = parseInt(score.textContent);
      currentScore += 10;
      score.textContent = currentScore < 10 ? `0${currentScore}` : currentScore;

      // Supprimer la classe "mole"
      circle.classList.remove("mole");
    }
  });
});
