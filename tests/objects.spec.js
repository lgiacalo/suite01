describe("Objects", () => {

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
    it('should return [2, 6, 8]', () => {

    });

    it('should return []', () => {
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
