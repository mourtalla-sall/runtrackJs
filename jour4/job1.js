// Créez un <button> ayant comme id “button”. Créez un fichier expression.txt
// contenant votre expression favorite.
// Lorsqu’un utilisateur clique sur le bouton, à l’aide de Fetch, récupérez le
// contenu du fichier expression.txt, placez-le dans un paragraphe <p> et
// insérez-le dans le corps de votre page.


let button = document.getElementById('button');
button.addEventListener('click', function (){
   
    async function getData() {
        const url = "expression.txt";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.text();
            console.log(result);
            let paragraphe = document.createElement("p");  
            paragraphe.textContent = result
            document.body.appendChild(paragraphe);
  
        } catch (error) {
            console.error(error.message);
        }
    }
    getData();
    // let paragraphe = document.createElement("p");
    // paragraphe.textContent = result
  
}) 