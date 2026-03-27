// Créez un formulaire permettant de trier ces données.
// Il doit contenir les champs suivants :
// ➔ id (input type text),
// ➔ nom (input type text),
// ➔ type (liste déroulante <select>)
// ➔ filtrer (input type button).

// Lorsque l’on clique sur “filtrer”, le script doit, à l’aide de Fetch, récupérer le
// contenu du fichier et lister les éléments répondant aux critères sélectionnés
// en les affichant sur une page HTML.

let button = document.getElementById('button');
let select = document.getElementById('pet-select');
let option = document.getElementById('obt-select');

  

button.addEventListener('click', async function(){
    const url = "pokemon.json";
         try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const results = await response.json();
            console.log(results);
     
              // le boucle principale pour fetcher les ensembles des données   
            results.forEach(data => {
                let id = document.createElement("p");
                id.style
                // affichages de id 
                id.textContent = data.id;
                document.body.appendChild(id);

                // le boucle pour parcourir le sous tableaux 
                for (const key in data.name) {
                    let name = document.createElement("p");
                    const element = data.name[key];
                    name.textContent = `${key} : ${element}`           
                    document.body.appendChild(name);
                }
                let type = document.createElement("p");
                for (const key in data.type) {
                    const element = data.type[key];
                    type.textContent = `${key} : ${element}`           
                    document.body.appendChild(type);
                }
            });
        
        
            
        } catch (error) {
           console.error(error.message);
         }
    
    
})