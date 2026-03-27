// Créez une balise <button> ayant comme id “button”.
// Créez une balise <p> ayant comme id “compteur” et contenant “0”.
// Ce contenu doit évoluer proportionnellement au nombre d'événements clic
// reçu par le bouton.
// ATTENTION : Vous ne devez pas utiliser “onclick()” dans votre HTML
// La fonction permettant d’effectuer la modification doit s'appeler “addOne()”.

let button = document.getElementById('button');
let Pcompteur = document.getElementById('compteur');
compteur = 0;


button.addEventListener('click', function addOne(){
    compteur ++;
    Pcompteur.textContent = compteur;


   
   console.log(compteur);
   
})