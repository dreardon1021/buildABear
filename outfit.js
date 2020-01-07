var garmentObj = {};

class Outfit {
  constructor(id, title) {
    this.id = id;
    this.garments = garmentObj;
    this.title = '';
    console.log(this);
  }

  addGarment(garment, garmentType) {
    garmentObj[garmentType] = garment;
  }
}
