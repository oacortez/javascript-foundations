class Centaur {
  constructor(centaurName, typeObj) {
    this.name = centaurName.name;
    this.breed = centaurName.type;
    this.cranky = false;
    this.standing = true;
    this.crankMeter = 0;
    this.layingDown = false;
  }
  shootBow() {
    return this.exercise('Twang!!!');
  }
  run() {
    return this.exercise('Clop clop clop clop!!!');
  }
  exercise(soundEffect) {
    if(this.crankMeter >= 2 || this.layingDown === true) {
      this.crankMeter += 1;
      this.cranky = true;
      return 'NO!';
    } else {
      this.crankMeter += 1;
      return soundEffect;
    }
  }

  sleep() {
    if(this.standing === true){
      return 'NO!'
    } else {
      this.resetCranky();
      return 'ZZZZ'
    }
  }
  layDown() {
    this.switchPosition();
  }
  standUp() {
    this.switchPosition();
  }
  switchPosition() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }

  resetCranky() {
    this.crankMeter = 0;
    this.cranky = false;
  }

  drinkPotion() {
    if(this.standing === false) {
      return 'Not while I\'m laying down!';
    } else {
      this.resetCranky();
    }
  }
}








module.exports = Centaur;
