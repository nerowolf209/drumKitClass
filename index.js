var buttons = document.querySelectorAll(".drum")

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function() {
          handleClick(this.classList[0]);
          buttonAnimation(this.classList[0])
        });
      };  


      document.addEventListener("keydown", function(event) {
      handleClick(event.key)
      buttonAnimation(event.key)
    });

function handleClick(buttonPressed){
    console.log(buttonPressed)
    var audio = document.getElementById("myAudio");
    if (buttonPressed === 'w'){
        audio.setAttribute("src", "sounds/crash.mp3");
        audio.play();
    }
    else if (buttonPressed === 'a') {
        audio.setAttribute("src", "sounds/kick-bass.mp3");
        audio.play();
    }
    else if (buttonPressed === 's') {
        audio.setAttribute("src", "sounds/snare.mp3");
        audio.play();
    }
    else if (buttonPressed === 'd') {
        audio.setAttribute("src", "sounds/tom-1.mp3");
        audio.play();
    }
    else if (buttonPressed === 'j') {
        audio.setAttribute("src", "sounds/tom-2.mp3");
        audio.play();
    }
    else if (buttonPressed === 'k') {
        audio.setAttribute("src", "sounds/tom-3.mp3");
        audio.play();
    }
    else if (buttonPressed === 'l') {
        audio.setAttribute("src", "sounds/tom-4.mp3");
        audio.play();
    }
    return
}


function buttonAnimation(keyPressed){
    console.log("buttonAnimation start")
    try{
        document.querySelector(`.${keyPressed}`).classList.toggle("pressed");
        console.log("buttonAnimation Tried")

        setTimeout(function(){
            document.querySelector(`.${keyPressed}`).classList.toggle("pressed");
        },100)
    }
    catch{
        return
    }
}