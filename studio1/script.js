(function() {
  'use strict';
  console.log('reading js');

  const form = document.querySelector("#myForm");
  const madlib = document.querySelector("#madlib");
  const missing = document.querySelector("#missing");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    const noun1 = document.querySelector("#noun1").value;
    const animal = document.querySelector("#animal").value;
    const lengthOfTime1 = document.querySelector("#lengthOfTime1").value;
    const distance = document.querySelector("#distance").value;
    const adjFood = document.querySelector("#adjFood").value;
    const petName = document.querySelector("#petName").value;
    const powerEmotion = document.querySelector("#powerEmotion").value;
    const bodyPart = document.querySelector("#bodyPart").value;
    const adj = document.querySelector("#adj").value;
    const number = document.querySelector("#number").value;
    const lengthOfTime2 = document.querySelector("#lengthOfTime2").value;
    const location = document.querySelector("#location").value;

    let myText;
    let missingText;

    if(noun1 == ''){
        missingText = "Please provide a noun"
        document.querySelector('#noun1').focus();
        missing.innerHTML = missingText;
    }
    else if(animal == ''){
        missingText = "Please provide an animal"
        document.querySelector('#animal').focus();
        missing.innerHTML = missingText;
    }
    else if(lengthOfTime1 == ''){
        missingText = "Please provide a length of time"
        document.querySelector('#lengthOfTime1').focus();
        missing.innerHTML = missingText;
    }
    else if(distance == ''){
        missingText = "Please provide a distance"
        document.querySelector('#distance').focus();
        missing.innerHTML = missingText;
    }
    else if(adjFood == ''){
        missingText = "Please provide an adjective describing food"
        document.querySelector('#adjFood').focus();
        missing.innerHTML = missingText
    }
    else if(petName == ''){
        missingText = "Please provide a pet name"
        document.querySelector('#petName').focus();
        missing.innerHTML = missingText;
    }
    else if(powerEmotion == ''){
        missingText = "Please provide a powerful emotion"
        document.querySelector('#powerEmotion').focus();
        missing.innerHTML = missingText;
    }
    else if(bodyPart == ''){
        missingText = "Please provide a body part"
        document.querySelector('#bodyPart').focus();
        missing.innerHTML = missingText;
    }
    else if(adj == ''){
        missingText = "Please provide an adjective"
        document.querySelector('#adjective').focus();
        missing.innerHTML = missingText
    }
    else if(number == ''){
        missingText = "Please provide a number"
        document.querySelector('#number').focus();
        missing.innerHTML = missingText;
    }
    else if(adj == ''){
        missingText = "Please provide an adjective"
        document.querySelector('#adj').focus();
        missing.innerHTML = missingText;
    }
    else if(lengthOfTime2 == ''){
        missingText = "Please provide another length of time"
        document.querySelector('#lengthOfTime2').focus();
        missing.innerHTML = missingText;
    }
    else if(location == ''){
        missingText = "Please provide a location"
        document.querySelector('#location').focus();
        missing.innerHTML = missingText;
    }
    
    else {
        myText = `${lengthOfTime1} ago, in a galaxy ${distance} away, A universe was in strife over the last chocolate bar. Not just any chocolate bar, but the very last ${adjFood} ${petName} in existence. Prior to the ${adjFood} ${petName}’s sudden scarcity, the chocolate bar was widely regarded as one of the greatest delicacies of the universe. People would travel far and wide to experience the ${powerEmotion} that the infused ${animal} ${bodyPart} would reportedly cause. As the universal economy would inevitably collapse due to ${adj} ${noun1}, the ${adjFood} ${petName} would be chosen as the primary currency of the universe as nobody could deny its value. Such widespread use of the chocolate bar would quickly exhaust cocoa bean supply around the universe. But it was too late, people had already tasted the glory of the ${adjFood} ${petName}, and they wanted MORE. Entire civilizations would crumble over the search for another bar, until there were none left. These dark times would go down in history as the CHOCOLATE WARS. An estimated total of ${number} gazillion souls would be lost; the greatest tragedy known to the universe.

        ${lengthOfTime2} would pass. The universe was a wasteland; the yearn for that ${powerEmotion} that the ${animal} ${bodyPart} infused ${adjFood} ${petName} would cause, grew stronger by the moment. However, the whereabouts of a secret factory located in ${location} creating the ${adjFood} ${petName} would spread on the streets. It seems that the CHOCOLATE WARS had just begun…`;

        document.querySelector("#noun1").value = '';
        document.querySelector("#animal").value = '';
        document.querySelector("#lengthOfTime1").value = '';
        document.querySelector("#distance").value = '';
        document.querySelector("#adjFood").value = '';
        document.querySelector("#petName").value = '';
        document.querySelector("#powerEmotion").value = '';
        document.querySelector("#bodyPart").value = '';
        document.querySelector("#adj").value = '';
        document.querySelector("#number").value = '';
        document.querySelector("#lengthOfTime2").value = '';
        document.querySelector("#location").value = '';
        document.getElementById('overlay').className = 'showing';
        madlib.innerHTML = myText;
    }

    });

    document.querySelector('.close').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
        madlib.innerHTML = '';
        missing.innerHTML = '';
    });
  
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
            madlib.innerHTML = '';
            missing.innerHTML = '';
        }



  });



}());
