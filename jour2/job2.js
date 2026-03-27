// Créez une balise <button> ayant comme id “button”.
// Lorsque l’on clique dessus, un <article> contenant le texte suivant est ajouté
// au contenu de la page : “L'important n'est pas la chute, mais l'atterrissage.”
// Si l'on clique à nouveau sur ce bouton, l’article disparaît.
// L’apparition / Disparition doit être gérée dans une fonction nommée
// “showhide()”.

 let button = document.getElementById('button');


 button.addEventListener('click', function showhide(){
    const article = document.getElementById("monArticle");
    if (article === null) {
        // L'article n'existe pas  on le crée
        const nouvelArticle = document.createElement("article");
        nouvelArticle.id = "monArticle";
        nouvelArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(nouvelArticle);
    } else {
        // L'article existe on le supprime
        article.remove();
    }
 });

