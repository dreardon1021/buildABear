var outfit = new Outfit({id: generateRandomId()});

function generateRandomId() {
  return Math.floor(Math.random() * 1000);
}

var hatButtons = document.querySelector('.hat-button-container');
var clothesButtons = document.querySelector('.clothes-button-container');
var accessoriesButtons = document.querySelector('.accessories-button-container');
var backgroundButtons = document.querySelector('.background-button-container');
var hatNodeList = document.querySelectorAll('.hat-button');
var clothesNodeList = document.querySelectorAll( '.clothes-button');
var accessoriesNodeList = document.querySelectorAll('.accessories-button');
var backgroundNodeList = document.querySelectorAll('.background-button');
var hatImages = document.querySelectorAll('.hats');

hatButtons.addEventListener('click', hatButtonEvents);


function hatButtonEvents() {
  highlightHatButtons();
  addHat();
}


function highlightHatButtons() {
if (event.target.className === 'hat-button') {
  for (i = 0; i < hatNodeList.length; i++) {
    hatNodeList[i].classList.remove('selected')
    };
  event.target.classList.add('selected')
  };
};


function addHat() {
  // for (i = 0; i < hatImages.length; i++) {
  //   if (event.target.className.contains('hat-button')) {
  //   console.log('hats')
  //   hatImages[i].style.display = 'none';
  //   };
  // };
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
