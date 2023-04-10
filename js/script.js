function CLOSE_SIDEBAR() {
   document.querySelector('.sidebar').classList.add('closed');
}

function OPEN_SIDEBAR() {
   document.querySelector('.sidebar').classList.remove('closed');
}

var animationStatus = false;
var animationControlBtn = document.querySelector('.animation-control');
var staticMagicEye = document.querySelector('.magic-eye-static');
var animatedMagicEye = document.querySelector('.magic-eye-ani');
var animatedMagicBrush = document.querySelector('.magic-brush-ani');4

function MINI_HOVER() {
   animationControlBtn.style.bottom = '4vh'
}

function MINI_HOVER_ALT() {
   animationControlBtn.style.bottom = '5vh'
}

function TOGGLE_ANIMATION() {
   if (animationStatus === true) {
      animationStatus = false
      animatedMagicBrush.classList.add('hidden');

      staticMagicEye.classList.remove('hidden');
      staticMagicEye.classList.add('shown');

      animatedMagicEye.classList.remove('shown');
      animatedMagicEye.classList.add('hidden');
   }
   else {
      animationStatus = true
      animatedMagicBrush.classList.remove('hidden');


      staticMagicEye.classList.remove('shown');
      staticMagicEye.classList.add('hidden');
      
      animatedMagicEye.classList.remove('hidden');
      animatedMagicEye.classList.add('shown');
   }
}