document.addEventListener("DOMContentLoaded", () => {
  const hideElement = (elementId) => {
    document.getElementById(elementId).style.display = "none";
  };

  const showElement = (elementId) => {
    document.getElementById(elementId).style.display = "block";
  };

  // Cacher la .card initialement
  hideElement("actualCard");

  // Afficher la .skeleton-card
  showElement("skeletonCard");

  // Temps d'affichage de la .skeleton-card (en millisecondes)
  const skeletonDisplayTime = 2500;

  setTimeout(() => {
    // Cacher la .skeleton-card après le temps défini
    hideElement("skeletonCard");

    // Afficher la .card
    showElement("actualCard");
  }, skeletonDisplayTime);
});
