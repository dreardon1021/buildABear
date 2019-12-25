var outfit = new Outfit({id: generateRandomId()});

function generateRandomId() {
  return Math.floor(Math.random() * 1000);
}
//button lists
var hatButtons = document.querySelector('.hat-button-container');
var clothesButtons = document.querySelector('.clothes-button-container');
var accessoriesButtons = document.querySelector('.accessories-button-container');
var backgroundButtons = document.querySelector('.background-button-container');
// node lists
var hatNodeList = document.querySelectorAll('.hat-button');
var clothesNodeList = document.querySelectorAll( '.clothes-button');
var accessoriesNodeList = document.querySelectorAll('.accessories-button');
var backgroundNodeList = document.querySelectorAll('.background-button');
var hatImages = document.querySelectorAll('.hat');
var clothesImages = document.querySelectorAll('.clothing')
var backgroundImages = document.querySelectorAll('.background')

hatButtons.addEventListener('click', hatButtonEvents);
clothesButtons.addEventListener('click', clothesButtonEvents)
backgroundButtons.addEventListener('click', backgroundButtonEvents)


function hatButtonEvents() {
  highlightHatButtons(event);
  addHat(event);
}

function clothesButtonEvents() {
  highlightClothesButtons(event);
  addCloththing(event);
}

function backgroundButtonEvents() {
  highlightBackgroundButtons(event)
  addBackground(event)
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

function highlightClothesButtons(event) {
  if (event.target.className === 'clothes-button') {
    for (i = 0; i < clothesNodeList.length; i++) {
      clothesNodeList[i].classList.remove('selected')
    };
    event.target.classList.add('selected')
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
}

accessoriesButtons.addEventListener('click', function(event) {
  if (event.target.className === 'accessories-button') {
    for (i = 0; i < accessoriesNodeList.length; i++) {
      accessoriesNodeList[i].classList.remove('selected')
    };
    event.target.classList.add('selected')
  };
});

function highlightBackgroundButtons(event) {
  if (event.target.className === 'background-button') {
    for (i = 0; i < backgroundNodeList.length; i++) {
      backgroundNodeList[i].classList.remove('selected')
    };
    event.target.classList.add('selected')
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
