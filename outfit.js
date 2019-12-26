class Outfit {
  constructor(id, garments, title, background) {
    this.id = id;
    this.garments = [];
    this.title = '';
    this.background = '';

  }

  addGarment(garment) {
    console.log('adding garment: ', garment);
    this.garments.push(garment);
  }
}
