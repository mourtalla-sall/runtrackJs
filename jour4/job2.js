// Créez une fonction JavaScript “jsonValueKey()” qui prend en paramètre une
// chaîne de caractères au format JSON et une clé.
// Cette fonction retourne la valeur liée à cette clé dans la chaîne de
// caractères.
// Par exemple :
// Et la clé est “city”, la fonction retourne “Marseille”.


   let  users = {
        firstname : 'Mourtalla ',
        lastname : 'Sall',
        age : 23,
        city : 'Marseille',
        address : '154 bd Strasbours',
        proffession : 'Student'
        
    }

function jsonValueKey(object, key){//retourne le bon attribut
    console.log(object[key])
    

}
jsonValueKey(users, "city");


   
 
