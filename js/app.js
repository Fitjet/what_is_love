// var MainBlock = document.querySelector('.block');
// var headerButton = document.querySelector('.page-header__button');

// headerMain.classList.remove('page-header--nojs');

// headerButton.addEventListener('click', function() {
//   if (headerMain.classList.contains('page-header--nav-closed')) {
//     headerMain.classList.remove('page-header--nav-closed');
//     headerMain.classList.add('page-header--nav-opened');
//   } else {
//     headerMain.classList.add('page-header--nav-closed');
//     headerMain.classList.remove('page-header--nav-opened');
//   }
// });
var Block = document.querySelector('.block')
var bgArray = ["url('../img/valday.jpeg')", "url('../img/valbg.jpg')", "url('../img/valbg1.webp')","url('../img/valbg2.jpg')"];
var textArray = ["В этот небольшой подарочек<br>Я постарался вложить <span class=\"block__iskorka\">всего себя</span>", "И хоть <span class=\"block__iskorka\">мы</span> сравнительно недавно знакомы...<br>Я могу точно сказать, что ты<br> очень <span class=\"block__iskorka\">дорогой</span> для меня человек", "Прости если <span class=\"block__iskorka\">хоть чем-то</span> обидел ♥<br>Прими эту <span class=\"block__iskorka\">небольшую валентику</span> от меня"];
var i = 0;

Block.addEventListener('click', function() {
  document.body.style.backgroundImage = bgArray[i];

  if( i < 3) {
    document.querySelector('.block__desc').innerHTML = textArray[i];
  };

  if( i == 3) {
    document.querySelector('.block--0').innerHTML = "<img class=\"val__border\" src=\"../img/heart2.png\" alt=\"Сдесь должна быть валентинка\"><img class=\"val__main\" src=\"../img/love.png\">";
    Block.style.padding = "0";
    Block.style.borderRadius = "50%";
    Block.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  };

  if( i == 4) {
    document.querySelector('.block--0').innerHTML = "<p class=\"block__desc\">♥ Я не смогу тебя забыть ♥</p>";
    Block.style.padding = "2px";
    Block.style.borderRadius = "5px";
    Block.style.backgroundColor = "#000";
  }

  if( i >= 5) {
    location.reload()
  }

  i++;
});

// function changeBg() {
//   var bgs = [
//       '../img/valday.jpeg',
//       '../img/valbg1.webp',
//       '../img/valbg2.jpg',
//   ];
//   var t = 10;
//   setInterval (function (){
//       var bg = bgs.shift();
//       document.body.style.background = 'background-image: url("'+bg+'")';
//       bgs.push(p);
//   }, t * 1000);
// }
