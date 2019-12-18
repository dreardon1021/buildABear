// var Outfit = require('../outfit');
// var hatButtons = document.querySelector('.hats');
var clothesButtons = document.querySelector('.clothes');
var accessoriesButtons = document.querySelector('.accessories');
var backgrondButtons = document.querySelector('.backgrounds');
var hatNodeList = document.querySelectorAll('.hat-button');
var clothesNodeList = document.querySelectorAll('.clothes-button')
var acessoriesNodeList = document.querySelectorAll('.accessories-button')
var backgroundNodeList = document.querySelectorAll('.background-button')

// hatButtons.addEventListener('click', highlightHatTarget)
clothesButtons.addEventListener('click', highlightClothesTarget)
accessoriesButtons.addEventListener('click', highlightAccessoriesTarget)
backgrondButtons.addEventListener('click', highlightBackgroundTarget)

for(var i = 0; i < hatNodeList.length; i++) {
  hatNodeList[i].addEventListener('click', highlightHatTarget)
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
  for (i = 0; i < acessoriesNodeList.length; i++) {
    acessoriesNodeList[i].classList.remove('selected')
  };
  if(event.target.classList.contains('accessories-button')) {
    event.target.classList.add('selected');
  };
};

function highlightBackgroundTarget(event) {
  for (i = 0; i < backgroundNodeList.length; i++) {
    acessoriesNodeList[i].classList.remove('selected')
  };
  if(event.target.classList.contains('accessories-button')) {
    event.target.classList.add('selected');
  };
};
