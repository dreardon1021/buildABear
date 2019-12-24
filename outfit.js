class Outfit {
  constructor(id, garments, title, background) {
    this.id = id;
    this.garments = [];
    this.title = '';
    this.background = '';

  }

  addGarments(garment) {
    this.garments.push(garment);
  }
}
