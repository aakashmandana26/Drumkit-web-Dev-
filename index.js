var numberOfDrumButtons = document.querySelectorAll("button").length;

for(var x=0; x<numberOfDrumButtons; x++){

    // event listener to listen to mouse button clicks on button class and perform a function

    document.querySelectorAll("button")[x].addEventListener('click', function (){

        var btnClick = this.innerText;                      //this keyword records the location of cursor on button click

        makeSound(btnClick);                                //function to play sound on listening button click

        buttonAnimation(btnClick);
    })


    }

// event listener to listen to keydown and record the key pressed and  perform function

document.addEventListener ("keydown", function (event){     //event (not a keyword) records the keyboard key pressed 

    var btnClick = event.key;                               //event.key returns the name of the key pressed

    makeSound(btnClick);

    buttonAnimation(btnClick);


})

// function to play sound on listening to button clicks and keydowns

function makeSound(btnClick){
    switch(btnClick){
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

    }

}

function buttonAnimation(btnClick){
    document.querySelector("."+btnClick).classList.add('pressed')
    
    setTimeout(function (){document.querySelector("."+btnClick).classList.remove('pressed')},100)
    
    
}