// Outfit class instance
var outfit = new Outfit(generateRandomId());

function generateRandomId() {
  return Math.floor(Math.random() * 1000);
};

//clothing button containers
var hatButtons = document.querySelector('.hat-button-container');
var clothesButtons = document.querySelector('.clothes-button-container');
var accessoriesButtons = document.querySelector('.accessories-button-container');
var backgroundButtons = document.querySelector('.background-button-container');
//outfit items
var saveButton = document.querySelector('.save');
var savedOutfitsContainer = document.querySelector('.outfit-section');
var saveInput = document.querySelector('.saveInput');
var saveOutfitName = document.querySelector('.outfit');
// node lists
var hatNodeList = document.querySelectorAll('.hat-button');
var clothesNodeList = document.querySelectorAll( '.clothes-button');
var accessoriesNodeList = document.querySelectorAll('.accessories-button');
var backgroundNodeList = document.querySelectorAll('.background-button');
//image lists
var hatImages = document.querySelectorAll('.hat');
var clothesImages = document.querySelectorAll('.clothing');
var accessoriesImages = document.querySelectorAll('.accessory');
var backgroundImages = document.querySelectorAll('.background');

// Event Listeners
hatButtons.addEventListener('click', hatButtonEvents);
clothesButtons.addEventListener('click', clothesButtonEvents);
accessoriesButtons.addEventListener('click', accessoriesButtonEvents);
backgroundButtons.addEventListener('click', backgroundButtonEvents);
saveButton.addEventListener('click', saveButtonEvents);
savedOutfitsContainer.addEventListener('click', closeOutfitCard);
saveInput.addEventListener('input', enableSaveButton);

//Event Handelers
function saveButtonEvents() {
  saveOutfit();
  resetBearItemsOnSave()
  resetButtonsOnSave();
  var outfit = new Outfit(generateRandomId());
};

function hatButtonEvents(event) {
  var hatButton = event.target;
  if(!hatButton.classList.contains('hat-button')){
    return; // non-button clicked in hat container
  };
  var hatId = hatButton.getAttribute('data-id');
  outfit.addGarment(hatId, 'hat');
  highlightHatButtons(event);
  addHat(event);
};

function clothesButtonEvents() {
  var clothesButton = event.target;
  if(!clothesButton.classList.contains('clothes-button')){
    return; // non-button clicked in clothes container
  }
  var clothesId = clothesButton.getAttribute('data-id')
  outfit.addGarment(clothesId, 'clothing')
  highlightClothesButtons(event);
  addCloththing(event);
};

function backgroundButtonEvents() {
  var backgroundButton = event.target;
  if(!backgroundButton.classList.contains('background-button')){
    return; // non-button clicked in background container
  }
  var backgroundId = backgroundButton.getAttribute('data-id')
  outfit.addGarment(backgroundId, 'background')
  highlightBackgroundButtons(event)
  addBackground(event)
}

function accessoriesButtonEvents() {
  var accessoriesButton = event.target;
  if(!accessoriesButton.classList.contains('accessories-button')){
    return;
  }
  var accesoriesId = accessoriesButton.getAttribute('data-id')
  outfit.addGarment(accesoriesId, 'accesories')
  highlightAccessoriesButtons(event)
  addAccessory(event);
};

//Enables the save button upon input
function enableSaveButton() {
  if (saveInput.value != '') {
    saveButton.disabled = false;
  };
};


function resetBearItemsOnSave() {
  if (event.target.classList.contains('save')) {
      for (i = 0; i < hatImages.length; i++) {
        hatImages[i].style.display = (hatImages[i].style.display === 'block' ? 'none' : '');
    };
      for (i = 0; i < clothesImages.length; i++) {
        clothesImages[i].style.display = (clothesImages[i].style.display === 'block' ? 'none' : '');
    };
      for (i = 0; i < accessoriesImages.length; i++) {
        accessoriesImages[i].style.display = (accessoriesImages[i].style.display === 'block' ? 'none' : '');
    };
      for (i = 0; i < backgroundImages.length; i++) {
        backgroundImages[i].style.display = (backgroundImages[i].style.display === 'block' ? 'none' : '');
    };
  };
};

function resetButtonsOnSave() {
  if (event.target.classList.contains('save')) {
    for (i = 0; i < hatNodeList.length; i++) {
      hatNodeList[i].classList.remove('selected');
    };
    for (i = 0; i < clothesNodeList.length; i++) {
      clothesNodeList[i].classList.remove('selected');
    };
    for (i = 0; i < accessoriesNodeList.length; i++) {
      accessoriesNodeList[i].classList.remove('selected');
    };
    for (i = 0; i < backgroundNodeList.length; i++) {
      backgroundNodeList[i].classList.remove('selected');
    };
  };
};

// This function is creating a new child <div> element for the saved outfit
// the img src and alt are the children of the div
// add the newSavedOutfitCard (child) to the outfit-section div (parent) element
// textnode is a child as well - it's the text that is entered into the save input
function createOutfitCard(saveOutfitName){
  const newSavedOutfitCard = document.createElement('div');
  newSavedOutfitCard.classList.add('outfit');
  const text = document.createTextNode(saveOutfitName);
  const closeButton = document.createElement('img');
  closeButton.classList.add('close-button');
  closeButton.setAttribute('src','assets/close.svg');
  closeButton.setAttribute('alt','closing X');
  newSavedOutfitCard.appendChild(text);
  newSavedOutfitCard.appendChild(closeButton);
  savedOutfitsContainer.appendChild(newSavedOutfitCard);
};

// Outfit save cards
function saveOutfit() {
  if (saveInput.value == '') {
    return;
  };
  outfit.title = saveInput.value;
  // took outfit.title from class because title is already being created there
  saveInput.value = '';

  var outfitJson = JSON.stringify(outfit);
  // can stringify the outfit because it is already json friendly
  localStorage.setItem(outfit.id, outfitJson);
  // using the outfit.id as the key because that "should" be uniquie for all outfits
  console.log(outfitJson);

  createOutfitCard(outfit.title);
};


function loadOutfit(id){
  var outfitJson = localStorage.getItem(id);
  if(!outfitJson){
    return;
  }
  var outfit = JSON.parse(outfitJson);
  createOutfitCard(outfit.title);
}

// function parsedCards(keyName) {
//   var grabCard = localStorage.getItem(keyName);
//   var parsedCard = JSON.parse(grabCard);
//   createOutfitCard(parsedCard)
// }

function closeOutfitCard(event) {
  var target = event.target;
  if(!target.classList.contains('close-button')) {
    return;
  };
  target.parentNode.remove();
};

function highlightHatButtons(event) {
if (event.target.className === 'hat-button') {
  for (i = 0; i < hatNodeList.length; i++) {
    hatNodeList[i].classList.remove('selected');
    };
  event.target.classList.add('selected');
  };
};

function addHat(event) {
  if (event.target.classList.contains('hat-button')) {
      for (i = 0; i < hatImages.length; i++) {
      hatImages[i].style.display = (hatImages[i].style.display === 'block' ? 'none' : '');
    };
  };
  var clothingId = event.target.getAttribute('data-id');
  var clothingImage = document.querySelector(`.${clothingId}`);
  clothingImage.style.display = clothingImage.style.display === 'none' ? '' : 'block';
};

function highlightClothesButtons(event) {
  if (event.target.className === 'clothes-button') {
    for (i = 0; i < clothesNodeList.length; i++) {
      clothesNodeList[i].classList.remove('selected');
    };
    event.target.classList.add('selected');
  };
};

function addCloththing(event) {
  if (event.target.classList.contains('clothes-button')) {
      for (i = 0; i < clothesImages.length; i++) {
      clothesImages[i].style.display = (clothesImages[i].style.display === 'block' ? 'none' : '');
    };
  };
  var clothingId = event.target.getAttribute('data-id');
  var clothingImage = document.querySelector(`.${clothingId}`);
  clothingImage.style.display = clothingImage.style.display === 'none' ? '' : 'block';
};

function highlightAccessoriesButtons(event) {
  if (event.target.className === 'accessories-button') {
    for (i = 0; i < accessoriesNodeList.length; i++) {
      accessoriesNodeList[i].classList.remove('selected');
    };
    event.target.classList.add('selected');
  };
};

function addAccessory(event) {
  if (event.target.classList.contains('accessories-button')) {
      for (i = 0; i < accessoriesImages.length; i++) {
      accessoriesImages[i].style.display = (accessoriesImages[i].style.display === 'block' ? 'none' : '');
    };
  };
  var clothingId = event.target.getAttribute('data-id');
  var clothingImage = document.querySelector(`.${clothingId}`);
  clothingImage.style.display = clothingImage.style.display === 'none' ? '' : 'block';
};

function highlightBackgroundButtons(event) {
  if (event.target.className === 'background-button') {
    for (i = 0; i < backgroundNodeList.length; i++) {
      backgroundNodeList[i].classList.remove('selected');
    };
    event.target.classList.add('selected');
  };
};

function addBackground(event) {
  if (event.target.classList.contains('background-button')) {
      for (i = 0; i < backgroundImages.length; i++) {
      backgroundImages[i].style.display = (backgroundImages[i].style.display === 'block' ? 'none' : '');
    };
  };
  var clothingId = event.target.getAttribute('data-id');
  var clothingImage = document.querySelector(`.${clothingId}`);
  clothingImage.style.display = clothingImage.style.display === 'none' ? '' : 'block';
};
