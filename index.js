
 

var numDrums = document.querySelectorAll(".drum").length


for (var i = 0; i<numDrums; i++){

 document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);

    buttonAni(buttonInnerHtml);
   
 })

};

//keyboard press

document.addEventListener("keydown", function(event) {

    

    buttonAni(event.key);

    makeSound(event.key);

});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
        break;
 
        case "a": 
         var tom2 = new Audio("tom-2.mp3");
         tom2.play();
        break;
 
        case "s": 
        var tom3 = new Audio("tom-3.mp3");
        tom3.play();
       break;
 
       case "d": 
       var tom4 = new Audio("tom-4.mp3");
       tom4.play();
      break;
 
      case "j": 
      var KB = new Audio("kick-bass.mp3");
      KB.play();
     break;
 
     case "k": 
     var snare = new Audio("snare.mp3");
     snare.play();
    break;
 
    case "l": 
    var crash = new Audio("crash.mp3");
    crash.play();
   break;
 
    }
}




function buttonAni(currentKey) {

  var activeButton =  document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
      activeButton.classList.remove("pressed");
  }, 100);

}

