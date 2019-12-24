// Outfit class instance
var outfit = new Outfit(generateRandomId());

function generateRandomId() {
  return Math.floor(Math.random() * 1000);
}
console.log(outfit)

function addHat() {
outfit.addGarments('hat');
}


var hatButtons = document.querySelector('.hat-button-container');
var clothesButtons = document.querySelector('.clothes-button-container');
var accessoriesButtons = document.querySelector('.accessories-button-container');
var backgroundButtons = document.querySelector('.background-button-container');
var saveButton = document.querySelector('.save');
var saveCard = document.querySelector('.outfit-section');
var saveInput = document.querySelector('.saveInput');
var closeButton = document.querySelector('.close-button');
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
closeButton.addEventListener('click', closeOutfitCard);

// Outfit save cards
function saveOutfit() {
  saveOutfitName = saveInput.value;
  // if (saveInput)
  console.log(saveOutfitName);
}

function closeOutfitCard(event) {
  if(event.target.classList.contains('close-button')) {
    event.target.parentNode.remove();
  }
}


function hatButtonEvents() {
  highlightHatButtons();
  addHat(event);
}


function highlightHatButtons() {
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
