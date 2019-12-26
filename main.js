// Outfit class instance
var outfit = new Outfit(generateRandomId());

function generateRandomId() {
  return Math.floor(Math.random() * 1000);
}
console.log(outfit)


var hatButtons = document.querySelector('.hat-button-container');
var clothesButtons = document.querySelector('.clothes-button-container');
var accessoriesButtons = document.querySelector('.accessories-button-container');
var backgroundButtons = document.querySelector('.background-button-container');
var saveButton = document.querySelector('.save');
var savedOutfitsContainer = document.querySelector('.outfit-section');
var saveInput = document.querySelector('.saveInput');
var saveOutfitName = document.querySelector('.outfit');

// node lists
var hatNodeList = document.querySelectorAll('.hat-button');
var clothesNodeList = document.querySelectorAll( '.clothes-button');
var accessoriesNodeList = document.querySelectorAll('.accessories-button');
var backgroundNodeList = document.querySelectorAll('.background-button');
var hatImages = document.querySelectorAll('.hat');

// Event Handlers
hatButtons.addEventListener('click', hatButtonEvents);
saveButton.addEventListener('click', saveOutfit);
savedOutfitsContainer.addEventListener('click', closeOutfitCard);

// Outfit save cards
function saveOutfit() {
  if (saveInput.value == '') {
    return;
  }
  saveOutfitName = saveInput.value;
  saveInput.value = '';
  createOutfitCard(saveOutfitName);
}

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
}

function closeOutfitCard(event) {
  var target = event.target;
  if(!target.classList.contains('close-button')) {
    return;
  }
  target.parentNode.remove();
}

function hatButtonEvents(event) {
  var hatButton = event.target;
  if(!hatButton.classList.contains('hat-button')){
    return; // non-button clicked in hat container
  }
  highlightHatButtons(event);
  var hatId = hatButton.getAttribute('data-id');
  console.log(hatId);
  outfit.addGarment(hatId, 'hat');
  addHat(event);
}

function highlightHatButtons(event) {
if (event.target.className === 'hat-button') {
  for (i = 0; i < hatNodeList.length; i++) {
    hatNodeList[i].classList.remove('selected')
    };
  event.target.classList.add('selected')
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

clothesButtons.addEventListener('click', function(event) {
  if (event.target.className === 'clothes-button') {
    for (i = 0; i < clothesNodeList.length; i++) {
      clothesNodeList[i].classList.remove('selected')
    };
    event.target.classList.add('selected')
  };
});

accessoriesButtons.addEventListener('click', function(event) {
  if (event.target.className === 'accessories-button') {
    for (i = 0; i < accessoriesNodeList.length; i++) {
      accessoriesNodeList[i].classList.remove('selected')
    };
    event.target.classList.add('selected')
  };
});

backgroundButtons.addEventListener('click', function(event) {
  if (event.target.className === 'background-button') {
    for (i = 0; i < backgroundNodeList.length; i++) {
      backgroundNodeList[i].classList.remove('selected')
    };
    event.target.classList.add('selected')
  };
});
