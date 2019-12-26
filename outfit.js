class Outfit {
  constructor(id, garments, title, background) {
    this.id = id;
    this.garments = [];
    this.title = '';
    this.background = '';

  }

  addGarment(garment, garmetType) {
    var garmentObj = {};
    garmentObj[garmetType] = garment;
    console.log('adding garment: ', garmentObj);
    this.garments.push(garmentObj);
  }
}
