/*
  Ecrire une fonction "searchOcc"
  qui nous renvoie l'index d'une occurrence dans un tableau.
  Si l'occurrence est introuvable dans le tableau, renvoyer -1;
  
  Prototype:
      nbr searchOcc(arr, occurence);

  Fonctions interdites:
      - Array.prototype.indexOf
*/

//  écrire votre code sous ce commentaire
function searchOcc(arr, occ){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === occ) return i;
  }
  return (-1);
}

/*
  Test 1
  Résultat attendu : 2
*/
searchOcc(["Salut", "ça", "va", "?"], "va");

/*
  Test 2
  Résultat attendu : -1
*/
searchOcc(["Salut", "ça", "va", "?"], "Ahahahah");

/* DO NOT TOUCH */
module.exports = {
  searchOcc: searchOcc
}
