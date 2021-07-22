class LunchBox {
  constructor(owner) {
    this.owner = owner.owner;
    this.material = owner.madeOf;
    this.shape = owner.shape;
    this.color = owner.color;
    this.snacks = [];
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    if(snack.isInLunchBox === false) {
      return snack.isInLunchBox = true;
    }
  }
  findHealthySnacks() {
    var healthySnacksSelection = [];
    for(var i = 0; i < this.snacks.length; i++) {
      if(this.snacks[i].checkForHealthy()) {
         healthySnacksSelection.push(this.snacks[i].type)
       }
    }
    return healthySnacksSelection
  }
}

module.exports = LunchBox;
