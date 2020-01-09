// Outfit class instance
var outfit = new Outfit(generateRandomId());
var ids = [];

function generateRandomId() {
  return Math.floor(Math.random() * 100000);
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
var outfitCard = document.querySelector('.outfit');
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

var outfitCardContainer = document.querySelector('.outfit-section')

// Event Listeners
hatButtons.addEventListener('click', hatButtonEvents);
clothesButtons.addEventListener('click', clothesButtonEvents);
accessoriesButtons.addEventListener('click', accessoriesButtonEvents);
backgroundButtons.addEventListener('click', backgroundButtonEvents);
saveButton.addEventListener('click', saveButtonEvents);
savedOutfitsContainer.addEventListener('click', closeOutfitCard);
saveInput.addEventListener('input', enableSaveButton);
outfitCardContainer.addEventListener('click', dressBearHandeler);

window.onload = function () {
  loadOutfit();
};

//Event Handelers
function saveButtonEvents() {
  saveOutfit();
  resetBearItemsOnSave()
  resetButtonsOnSave();
  outfit = new Outfit(generateRandomId());
}

function hatButtonEvents(event) {
  var hatButton = event.target;
  if(!hatButton.classList.contains('hat-button')){
    return; // non-button clicked in hat container
  };
  var hatId = hatButton.getAttribute('id');
  outfit.addGarment(hatId, 'hat');
  highlightHatButtons(event);
  addHat(event);
};

function clothesButtonEvents() {
  var clothesButton = event.target;
  if(!clothesButton.classList.contains('clothes-button')){
    return;
  }
  var clothesId = clothesButton.getAttribute('id')
  outfit.addGarment(clothesId, 'clothing')
  highlightClothesButtons(event);
  addCloththing(event);
};

function backgroundButtonEvents() {
  var backgroundButton = event.target;
  if(!backgroundButton.classList.contains('background-button')){
    return;
  }
  var backgroundId = backgroundButton.getAttribute('id')
  outfit.addGarment(backgroundId, 'background')
  highlightBackgroundButtons(event)
  addBackground(event)
}

function accessoriesButtonEvents() {
  var accessoriesButton = event.target;
  if(!accessoriesButton.classList.contains('accessories-button')){
    return;
  }
  var accesoriesId = accessoriesButton.getAttribute('id')
  outfit.addGarment(accesoriesId, 'accesories')
  highlightAccessoriesButtons(event)
  addAccessory(event);
};

function dressBearHandeler() {
  grabBearObjOnClick();
}

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
      for (i = 0; i  < backgroundImages.length; i++) {
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

function createOutfitCard(saveOutfitName) {
  const newSavedOutfitCard = document.createElement('div');
  newSavedOutfitCard.classList.add('outfit');
  newSavedOutfitCard.classList.add(`${outfit.id}`);
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
  outfit.title = saveInput.value;
  var outfitJson = JSON.stringify(outfit);
  window.localStorage.setItem(outfit.id, outfitJson);
  for (var i = 0; i < window.localStorage.length; i++) {
    var key = window.localStorage.key(i);
    var parsedValue = JSON.parse(key);
    if (!ids.includes(outfit.id)) {
      ids.push(parsedValue);
      createOutfitCard(outfit.title);
      saveInput.value = '';
      return;
    };
  };
};


function loadOutfit() {
  for (var i = 0; i < window.localStorage.length; i++) {
    var key = window.localStorage.key(i)
    var getValue = window.localStorage.getItem(key);
    var parseOutfit = JSON.parse(getValue);
    outfit = parseOutfit
    createOutfitCard(outfit.title);
    outfit = new Outfit(generateRandomId())
  };
};

function closeOutfitCard(event) {
  var target = event.target;
  if(!target.classList.contains('close-button')) {
    return;
  };
  for (var i = 0; i < window.localStorage.length; i++) {
    var key = window.localStorage.key(i);
    if (target.parentNode.classList.contains(key)) {
    window.localStorage.removeItem(key);
    };
  };
  target.parentNode.remove();
};

function grabBearObjOnClick() {
  var clickedCard = event.target.classList.contains('outfit')
  for (var i = 0; i < window.localStorage.length; i++) {
    var key = window.localStorage.key(i);
    if (clickedCard && event.target.classList.contains(key)){
      var retrivedObject = window.localStorage.getItem(key)
      var bearOutfit = JSON.parse(retrivedObject);
      saveInput.value = bearOutfit.title;
      outfit.id = bearOutfit.id;
      dressBearHat(bearOutfit)
      dressBearClothes(bearOutfit)
      dressBearAcessories(bearOutfit)
      dressBearBackground(bearOutfit)
      enableSaveButton()
    };
  };
};

function dressBearHat(bearOutfit) {
  var hatId = bearOutfit.garments.hat
  for (i = 0; i < hatNodeList.length; i++){
    var hatButtons = hatNodeList[i].getAttribute('id');
    if (hatId === hatButtons){
        document.querySelector(`#${hatButtons}`).click()
    };
  };
};

function dressBearClothes(bearOutfit) {
  var clothesId = bearOutfit.garments.clothing
  for (i = 0; i < clothesNodeList.length; i++){
    var clothesButtons = clothesNodeList[i].getAttribute('id');
    if (clothesId === clothesButtons){
        document.querySelector(`#${clothesButtons}`).click()
    };
  };
};

function dressBearAcessories(bearOutfit) {
  var accessoriesId = bearOutfit.garments.accesories
  for (i = 0; i < accessoriesNodeList.length; i++){
    var accessoriesButtons = accessoriesNodeList[i].getAttribute('id');
    if (accessoriesId === accessoriesButtons){
        document.querySelector(`#${accessoriesButtons}`).click()
    };
  };
};

function dressBearBackground(bearOutfit) {
  var backgroundId = bearOutfit.garments.background
  for (i = 0; i < backgroundNodeList.length; i++){
    var backgroundButtons = backgroundNodeList[i].getAttribute('id');
    if (backgroundId === backgroundButtons){
        document.querySelector(`#${backgroundButtons}`).click()
    };
  };
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
  var clothingId = event.target.getAttribute('id');
  var clothingImage = document.querySelector(`.${clothingId}`);
  clothingImage.style.display = clothingImage.style.display === 'none' ? 'block' : 'block';
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
  var clothingId = event.target.getAttribute('id');
  var clothingImage = document.querySelector(`.${clothingId}`);
  clothingImage.style.display = clothingImage.style.display === 'none' ? 'block' : 'block';
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
  var clothingId = event.target.getAttribute('id');
  var clothingImage = document.querySelector(`.${clothingId}`);
  clothingImage.style.display = clothingImage.style.display === 'none' ? 'block' : 'block';
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
  var clothingId = event.target.getAttribute('id');
  var clothingImage = document.querySelector(`.${clothingId}`);
  clothingImage.style.display = clothingImage.style.display === 'none' ? 'block' : 'block';
};
