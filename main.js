var outfit = new Outfit({id: generateRandomId()});

function generateRandomId() {
  return Math.floor(Math.random() * 1000);
}

console.log(outfit.id)


// var outfit = new Outfit ('');
var hatNodeList = document.querySelectorAll('.hat-button');
var clothesNodeList = document.querySelectorAll('.clothes-button')
var accessoriesNodeList = document.querySelectorAll('.accessories-button')
var backgroundNodeList = document.querySelectorAll('.background-button')

for(var i = 0; i < hatNodeList.length; i++) {
  hatNodeList[i].addEventListener('click', highlightHatTarget)
}

for(var i = 0; i < clothesNodeList.length; i++) {
  clothesNodeList[i].addEventListener('click', highlightClothesTarget)
}

for(var i = 0; i < accessoriesNodeList.length; i++) {
  accessoriesNodeList[i].addEventListener('click', highlightAccessoriesTarget)
}

for(var i = 0; i < backgroundNodeList.length; i++) {
  backgroundNodeList[i].addEventListener('click', highlightBackgroundTarget)
}

function highlightHatTarget(event) {
  for (i = 0; i < hatNodeList.length; i++) {
    hatNodeList[i].classList.remove('selected')
  };
  if(event.target.classList.contains('hat-button')) {
    event.target.classList.add('selected');
  };
};

function highlightClothesTarget(event) {
  for (i = 0; i < clothesNodeList.length; i++) {
    clothesNodeList[i].classList.remove('selected')
  };
  if(event.target.classList.contains('clothes-button')) {
    event.target.classList.add('selected');
  };
};

function highlightAccessoriesTarget(event) {
  for (i = 0; i < accessoriesNodeList.length; i++) {
    accessoriesNodeList[i].classList.remove('selected')
  };
  if(event.target.classList.contains('accessories-button')) {
    event.target.classList.add('selected');
  };
};

function highlightBackgroundTarget(event) {
  for (i = 0; i < backgroundNodeList.length; i++) {
    backgroundNodeList[i].classList.remove('selected')
  };
  if(event.target.classList.contains('background-button')) {
    event.target.classList.add('selected');
  };
};
