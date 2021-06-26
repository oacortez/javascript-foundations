class Pirate {
  constructor(pirateName, pirateJob) {
    this.name = pirateName;
    this.job = pirateJob || 'scallywag';
    this.cursed = false;
    this.booty = 0;
  }
  robShip() {
    if(this.booty < 500) {
      this.booty += 100
      return 'YAARRR!'
    } else {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!'
    }
  }
  liftCurse() {
      if(this.booty >= 300) {
        this.booty = 200;
        this.cursed = false;
        return 'Your curse has been lifted!';
        }
        if(this.booty === 100) {
          return 'You don\'t need to lift a curse!'
        }
      }
  }








module.exports = Pirate;
