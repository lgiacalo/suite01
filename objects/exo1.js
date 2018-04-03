/*
  Entraînement Object.prototype.hasOwnProperty

  Ecrire une fonction "isPropertyOf"
  qui teste si les propriétés passées en paramètre sont bien une propriété de
  l'objet

  Prototype:
      bool isPropertyOf(arr, obj);
*/

//  écrire votre code sous ce commentaire

/*
  Test 1
  Résultat attendu : true
*/

isPropertyOf(['lastname', 'birthday'], {name: 'John', 'lastname': 'Smith', birthday: '15/05/2002'});

/*
  Test 2
  Résultat attendu : false
*/

isPropertyOf(['isAlive', 'birthday'], {name: 'John', 'lastname': 'Smith', birthday: '15/05/2002'});

/* DO NOT TOUCH */
module.exports = {
  isPropertyOf: isPropertyOf
}
