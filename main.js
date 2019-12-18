var outfits = require('outfit.js');

hatButtons.addEventListener('click', highlightTarget)

var hatButtons = document.querySelector('.col1-buttons')
var hatNodeList = document.querySelectorAll('.hat-button')


function highlightTarget(event) {
  console.log('hi')
  for (i = 0; i < hatNodeList.length; i++) {
    hatNodeList[i].classList.remove('selected')
  };
  if(event.target.classList.contains('hat-button')) {
    event.target.classList.add('selected');
  };
};
