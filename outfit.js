var garmentObj = {};

class Outfit {
  constructor(id, garments, title, background) {
    this.id = id;
    this.garments = [];
    this.title = '';
    this.background = '';

  }

  addGarment(garment, garmetType) {
    garmentObj[garmetType] = garment;
    this.garments.push(garmentObj);
    console.log('adding garment: ', garmentObj);
  }
}
