var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });

}


document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key){

    if (key === 'w') {
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        return; 
    }

    else if (key === 'a') {
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        return; 
    }

    else if (key === 's') {
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        return; 
    }

    else  if (key === 'd') {
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        return; 
    }

    else if (key === 'j') {
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        return; 
    }

    else if (key === 'k') {
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        return; 
    }

    else if (key === 'l') {
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        return; 
    }

    else{
        alert("Invalid Key");
    }

}

function buttonAnimation(currentKey){
    
    var activeKey = document.querySelector("." + currentKey);

    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}







