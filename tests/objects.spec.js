xdescribe("Objects", () => {

  /* Import exercices */
  // const exo1 = require('../objects/exo1');
  // const exo2 = require('../objects/exo2');
  // const exo3 = require('../objects/exo3');
  // const exo4 = require('../objects/exo4');
  // const exo5 = require('../objects/exo5');
  // const exo6 = require('../objects/exo6');
  // const exo7 = require('../objects/exo7');
  // const exo8 = require('../objects/exo8');
  // const exo9 = requireobjectses6/exo9');

  /* Test Exercice 1 */
  xdescribe('Objects - Exo 1', () => {
    it('should return true', () => {
      expect(exo1.isPropertyOf(['lastname', 'birthday'], {name: 'John', 'lastname': 'Smith', birthday: '15/05/2002'})).toBeTruthy();
    });

    it('should return false', () => {
      expect(exo1.isPropertyOf(['isAlive', 'birthday'], {name: 'John', 'lastname': 'Smith', birthday: '15/05/2002'})).toBeFalsy();
    });
  });

  /* Test Exercice 2 */
  xdescribe('Objects - Exo 2', () => {

    const v1 = new exo2.Voyage("Paris", "Moto", 5, 0);

    it('should have attribute "destination"', () => {
      expect(v1.hasOwnProperty('destination')).toBeTruthy();
    });

    it('should have attribute "vehicule"', () => {
      expect(v1.hasOwnProperty('vehicule')).toBeTruthy();
    });

    it('should have attribute "nbTravelers"', () => {
      expect(v1.hasOwnProperty('nbTravelers')).toBeTruthy();
    });

    it('should have attribute "nbKilometers"', () => {
      expect(v1.hasOwnProperty('nbKilometers')).toBeTruthy();
    });

    it('should have method "displayTravel"', () => {
      expect(v1.displayTravel).toBeDefined();
    });

    it('should have method "travel"', () => {
      expect(v1.travel).toBeDefined();
    });

    it('should display the travel', () => {
      expect(v1.displayTravel()).toEqual("5 voyageurs participent au voyage à destination de Paris à bord de : Moto");
    });

    it('should add kilometers', () => {
      v1.travel(20);
      expect(v1.nbKilometers).toEqual(20);
    });
  });

  /* Test Exercice 3 */
  xdescribe('Objects - Exo 3', () => {
    it('should return "banane"', () => {

    });

    it('should return ""', () => {

    });
  });
});
