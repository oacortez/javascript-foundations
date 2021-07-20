class Snowman {
constructor(snowmanMaterials) {
  this.carrots = snowmanMaterials.carrots;
  this.coal = snowmanMaterials.coal;
  this.buttons = snowmanMaterials.buttons;
  this.snowballs = snowmanMaterials.snowballs;
  this.magicHat = false;
  }
  canWearMagicHat() {
    if(this.coal >= 2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2){
      return this.magicHat = true;
    } else {
      this.magicHat = false;
      }
    }
  }
module.exports = Snowman;
