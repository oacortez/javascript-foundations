class Snack {
  constructor(snackType) {
    this.deliciousLevel = "extra";
    this.type = snackType;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }
  getEaten() {
    this.amount -= 10;
    if(this.amount <= 20) {
      this.cuttingItClose = true;
    }
  }
  checkForHealthy() {
    if(this.type.toLowerCase().includes('fruit')){
      return true;
    } else {
      return false;
      }
    }
  }


module.exports = Snack;
