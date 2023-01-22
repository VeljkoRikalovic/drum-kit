
for ( i = 0; i<document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('button')[i].addEventListener
('click', zvuk)
}

let jedan = new Audio('sounds/crash.mp3')
let dva = new Audio('sounds/kick-bass.mp3')
let tri = new Audio('sounds/snare.mp3')
let cetiri = new Audio('sounds/tom-1.mp3')
let pet = new Audio('sounds/tom-2.mp3')
let sest = new Audio('sounds/tom-3.mp3')
let sedam = new Audio('sounds/tom-4.mp3')

function zvuk(){
    console.log(this.innerHTML)
    if(this.innerHTML == 'w'){return jedan.play()}
    else if(this.innerHTML == 'a'){return dva.play()}
    else if(this.innerHTML == 's'){return tri.play()}
    else if(this.innerHTML == 'd'){return cetiri.play()}
    else if(this.innerHTML == 'j'){return pet.play()}
    else if(this.innerHTML == 'k'){return sest.play()}
    else if(this.innerHTML == 'l'){return sedam.play()}
}

document.addEventListener('keydown', function(bla){
    if(bla.key == 'w'){return jedan.play()}
    else if(bla.key == 'a'){return dva.play()}
    else if(bla.key == 's'){return tri.play()}
    else if(bla.key == 'd'){return cetiri.play()}
    else if(bla.key == 'j'){return pet.play()}
    else if(bla.key == 'k'){return sest.play()}
    else if(bla.key == 'l'){return sedam.play()}
})
