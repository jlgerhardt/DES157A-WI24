(function() {
  'use strict';
  console.log('reading js');

  const form = document.querySelector("#myForm");
  const madlib = document.querySelector("#madlib");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    const noun1 = document.querySelector("#noun1").value;
    const noun2 = document.querySelector("#noun2").value;
    const adj = document.querySelector("#adj").value;
    const verb = document.querySelector("#verb").value;
    const verb2 = document.querySelector("#verb2").value;

    let myText;

    if(noun1 == ''){
        myText = "Please provide a noun"
        document.querySelector('#noun1').focus();
    }
    else if(noun2 == ''){
        myText = "Please provide another noun"
        document.querySelector('#noun2').focus();
    }
    else if(adj == ''){
        myText = "Please provide an adjective"
        document.querySelector('#adj').focus();
    }
    else if(verb == ''){
        myText = "Please provide a verb"
        document.querySelector('#verb').focus();
    }
    else if(verb2 == ''){
        myText = "Please provide another verb"
        document.querySelector('#verb').focus();
    }
    else {
        myText = `Here are the words you submitted: ${noun1}, ${noun2}, ${adj}, ${verb}, and ${verb2}`;
        document.querySelector('#noun1').value = '';
        document.querySelector('#noun2').value = '';
        document.querySelector('#adj').value = '';
        document.querySelector('#verb').value = '';
    }

    madlib.innerHTML = myText;
  });

}());
