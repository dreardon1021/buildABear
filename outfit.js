var garmentObj = {};

class Outfit {
  constructor(id, garments, title, background) {
    this.id = id;
    this.garments = [];
    this.title = '';
    this.background = '';

  }

  addGarment(garment, garmentType) {
    garmentObj[garmentType] = garment;
    this.garments.push(garmentObj);
    localStorage.setItem(garmentType, garment);
    console.log('adding garment: ', garmentObj);
    console.log(localStorage.getItem(garmentType));
  }
}
