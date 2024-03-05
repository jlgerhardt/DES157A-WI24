(function() {
  'use strict';
  console.log('reading js');


  //script for the border when hovering
  const images = document.querySelectorAll('.hoverborder');

  images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
      image.style.border = '2px solid black';
    });

    image.addEventListener('mouseout', function() {
      image.style.border = '2px solid #f7f7ea';
    });

  });

  //callouts
  const thoughts = document.querySelector("#thoughts");
  const waves = document.querySelector("#waves");
  const sky = document.querySelector("#sky");
  const turrel = document.querySelector("#turrel");
  const human = document.querySelector("#human");
  const untitled = document.querySelector("#untitled");

  //overlay1
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

  //overlay2
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

  //overlay3
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

  //overlay4
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

  //overlay5
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

  //overlay6
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

    //   // Event listener for the back button to navigate to the landing page
    // images.addEventListener("click", function(e) {
    //     e.preventDefault();
    //     document.querySelectorAll("main").className = "hidden";
    // });

    // // Event listener for clicking on the main story link to go to full page
    // const clickTwenty = document.querySelector("#twenty");
    // clickTwenty.addEventListener("click", function(e) {
    //     e.preventDefault();
    //     document.querySelector("#header").className = "hidden";
    //     document.querySelector("#overview").className = "hidden";
    //     document.querySelector("main").className = "showing";
    // });

}());
