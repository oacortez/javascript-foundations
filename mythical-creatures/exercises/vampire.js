class Vampire {
  constructor(vampireName, pet) {
    this.name = vampireName;
    this.pet = pet || 'bat';
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink() {
      if(this.ouncesDrank < 50) {
        this.ouncesDrank += 10;
      } else {
        return 'I\'m too full to drink anymore!'
      }
      return this.thirsty = false;
  }
}






module.exports = Vampire;
