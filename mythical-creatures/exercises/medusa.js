var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(newMedusa) {
    this.name = newMedusa;
    this.statues = [];
  }
  gazeAtVictim(person) {
    var statue = new Statue(person.name);
    if(this.statues.length < 3) {
      this.statues.push(statue);
    } else if(this.statues.length === 3){
      this.statues.push(statue);
      var freePerson = new Person(this.statues.shift().name);
      freePerson.mood = 'relieved';
      return freePerson;
      }
    }
  }






module.exports = Medusa, Person, Statue;
