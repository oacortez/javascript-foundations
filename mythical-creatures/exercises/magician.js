class Magician {
  constructor(magicianName, clothing) {
    this.name = `The Great ${magicianName.name}`;
    this.assistant = magicianName.assistant;
    this.favoriteAccessory = magicianName.clothing || 'top hat';
    this.confidencePercentage = 10;
  }
  performIncantation(spell) {
    return `${spell}!`.toUpperCase();
  }
  performTrick() {
    this.confidencePercentage += 10;
    if(this.favoriteAccessory === 'cape') {
      return 'PULL DOVE FROM SLEEVE';
    }
      return 'PULL RABBIT FROM TOP HAT';
  }
  performShowStopper() {
    console.log('this', this.confidencePercentage);
      if(this.confidencePercentage != 110 || this.assistant === false) {
      return 'Oh no, this trick is not ready!';
    }
      if(this.confidencePercentage === 110) {
      return 'WOW! The magician totally just sawed that person in half!';
    }
  }
}







module.exports = Magician;
