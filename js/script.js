function CLOSE_SIDEBAR() {
   document.querySelector('.sidebar').classList.add('closed');

   for (let i = 0; i < sideBarLinks.length; i++) {
      const navLink = sideBarLinks[i];

      setTimeout(() => {
         navLink.style.animation = ""
      }, 400);
   }
}

function OPEN_SIDEBAR() {

   document.querySelector('.sidebar').classList.remove('closed');

   for (let i = 0; i < sideBarLinks.length; i++) {
      const navLink = sideBarLinks[i];

      setTimeout(() => {
         navLink.style.animation = `.2s fadeInLeft ${i * 0.1}s linear both`
      }, 400);
   }
}

var animationStatus = false;
var animationControlBtn = document.querySelector('.animation-control');
var staticMagicEye = document.querySelector('.magic-eye-static');
var animatedMagicEye = document.querySelector('.magic-eye-ani');
var animatedMagicBrush = document.querySelector('.magic-brush-ani');
var cardBlurBase = document.querySelector('.blur-base');
var sunSet = document.querySelector('#sunset');
var shootingStars = document.getElementsByClassName('shooting-star');
var sideBarLinks = document.getElementsByClassName('sidebar-link');

function MINI_HOVER() {
   animationControlBtn.style.bottom = '4vh'
}

function MINI_HOVER_ALT() {
   animationControlBtn.style.bottom = '5vh'
}

function TOGGLE_ANIMATION() {
   if (animationStatus === true) {
      animationStatus = false;

      //decrase opacity of magic brush, then hide it in dom
      setTimeout(() => {
         animatedMagicBrush.classList.add('hidden');

         setTimeout(() => {
            animatedMagicBrush.style.display = "none"
         }, 100)
         
      }, 800)

      staticMagicEye.classList.remove('hidden');
      staticMagicEye.classList.add('shown');

      animatedMagicEye.classList.remove('shown');
      animatedMagicEye.classList.add('hidden');

      cardBlurBase.classList.remove('transparent');
      sunSet.classList.remove('scaled')
      animationControlBtn.classList.remove('static')

      for (let i = 0; i < shootingStars.length; i++) {
         const shootingStar = shootingStars[i];

         shootingStar.style.display = 'block';

      
      }
   }
   else {
      animationStatus = true;
      
      //make magic brush visible in dom, then increase opacity
      //after which translate the shooting stars
      setTimeout(() => {
         animatedMagicBrush.style.display = "block"
         

         setTimeout(() => {
            animatedMagicBrush.classList.remove('hidden');
         }, 300);


         for (let i = 0; i < shootingStars.length; i++) {
            const shootingStar = shootingStars[i];

            shootingStar.style.display = 'block'
            //delay second star a lil bit
            if (i === 1) {     
               setTimeout(() => {
                  shootingStar.classList.add('translated');
               }, 38)
            }
            else {           
               shootingStar.classList.add('translated');
            }   
         }
         
      }, 1000)

      //hide stars and return to origin once translate
      setTimeout(() => {
         for (let i = 0; i < shootingStars.length; i++) {
            const shootingStar = shootingStars[i]; 

            shootingStar.style.display = 'none'
            shootingStar.classList.remove('translated');
         }
      }, 2000)


      //NOTE TO SELF: TIMEOUTS ISN'T THE BEST WAY TO GO ABOUT THIS :)


      staticMagicEye.classList.remove('shown');
      staticMagicEye.classList.add('hidden');
      
      animatedMagicEye.classList.remove('hidden');
      animatedMagicEye.classList.add('shown');

      cardBlurBase.classList.add('transparent');
      sunSet.classList.add('scaled')
      animationControlBtn.classList.add('static')
   }
}