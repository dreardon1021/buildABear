var garmentObj = {};
var saveButton = document.querySelector('.save');
saveButton.addEventListener('click', clearObj);

class Outfit {
  constructor(id) {
    this.id = id;
    this.garments = garmentObj;
    this.title = '';
  };

  addGarment(garment, garmentType) {
    garmentObj[garmentType] = garment;
  };
};

function clearObj() {
  garmentObj = {};
};
