// job 1 
let head = document.getElementById('head');

head.addEventListener('click', () => {
  alert('Hello JavaScript')
});



// job3

function affichage(){
    console.log('Hello JavaScript')
}
affichage()



// job5

function afficherJoursSemaines(){
    let joursSemaines = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'semedi', 'dimenche'];
    for (let i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);        
    }
}
afficherJoursSemaines();


// job6
// Créez une fonction “fizzbuzz” qui ne prend pas de paramètre. Dans cette
// fonction, affichez dans la console web les nombres de 1 à 151. Remplacez
// certains nombres par un mot selon les conditions suivantes :
// ➔ Si le nombre est un multiple de 3, affichez “Fizz”.
// ➔ Si le nombre est un multiple de 5, affichez “Buzz”.
// ➔ Si le nombre est un multiple de 3 et de 5, affichez “FizzBuzz”.


let i = 1;

function fizzbuzz() {
  while (i <= 151) {
        if (i % 3 === 0 && i % 5 === 0) {
             console.log(i, "est un FizzBuzz");
        } 
         else if (i % 3 === 0) {
          console.log(i, "est un Fizz");
        } 
        else if (i % 5 === 0) {
            console.log(i, "est un Buzz");
        } 
        else {
        console.log(i);
        }
    i++; 
  }
}

fizzbuzz();

// job7

//  Créez une fonction “jourTravaille” qui prend en paramètre une date au
// format Date. Si la date correspond à un jour férié de l’année 2024, la fonction
// affiche “Le jour mois année est un jour férié”. Si elle correspond à un samedi_3
// ou un dimanche, alors le message affiché est “Non, jour mois année est un
// week-end”, sinon afficher “Oui, jour mois année est un jour travaillé” ou jour,
// mois et année correspond aux paramètres passés à la fonction.

function jourTravaille () {
    
}