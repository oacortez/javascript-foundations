class Dragon {
  constructor(dragonName, owner) {
    this.name = dragonName;
    this.rider = owner;
    this.hungry = true;
    this.food = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat(){
    this.food += 1;
    if(this.food >= 3) {
      return this.hungry = false;
      }
    }
  }









module.exports = Dragon;
