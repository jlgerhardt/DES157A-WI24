(function() {
  'use strict';
  console.log('reading js');

  const images = document.querySelectorAll('.hoverborder');

  images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
      image.style.border = '2px solid black';
    });

    image.addEventListener('mouseout', function() {
      image.style.border = '2px solid #f7f7ea';
    });

  });

  const thoughts = document.querySelector("#thoughts");
  const waves = document.querySelector("#waves");
  const sky = document.querySelector("#sky");
  const turrel = document.querySelector("#turrel");
  const human = document.querySelector("#human");
  const untitled = document.querySelector("#untitled");

  thoughts.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('overlay1').className = 'showing';
    });

  document.querySelector('.close1').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay1').className = 'hidden';
    });
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.getElementById('overlay1').className = 'hidden';
    }
  });

  waves.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('overlay2').className = 'showing';
    });

  document.querySelector('.close2').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay2').className = 'hidden';
    });
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.getElementById('overlay2').className = 'hidden';
    }
  });

  sky.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('overlay3').className = 'showing';
    });

  document.querySelector('.close3').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay3').className = 'hidden';
    });
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.getElementById('overlay3').className = 'hidden';
    }
  });

  turrel.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('overlay4').className = 'showing';
    });

  document.querySelector('.close4').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay4').className = 'hidden';
    });
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.getElementById('overlay4').className = 'hidden';
    }
  });

  human.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('overlay5').className = 'showing';
    });

  document.querySelector('.close5').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay5').className = 'hidden';
    });
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.getElementById('overlay5').className = 'hidden';
    }
  });

  untitled.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('overlay6').className = 'showing';
    });

  document.querySelector('.close6').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay6').className = 'hidden';
    });
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.getElementById('overlay6').className = 'hidden';
    }
  });

}());
