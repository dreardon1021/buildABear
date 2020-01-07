var garmentObj = {};
var saveButton = document.querySelector('.save');
saveButton.addEventListener('click', clearObj);

class Outfit {
  constructor(id, title) {
    this.id = id;
    this.garments = garmentObj;
    this.title = '';
    // console.log(this);
  };

  addGarment(garment, garmentType) {
    garmentObj[garmentType] = garment;
  };
};

function clearObj() {
  garmentObj = {};
};
