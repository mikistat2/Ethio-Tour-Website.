document.querySelector("#Hero").addEventListener("scroll" , function(){

     var topic = document.querySelector(".hero-container");

     topic.style.padding = "120px 20px 100px 20px" ;
     topic.style.paddingLeft = "20px";


})


document.querySelector("#Hero").addEventListener("click" , function(){

    var topic = document.querySelector(".hero-container");

    topic.style.padding = "120px 20px 100px 20px" ;
    topic.style.paddingLeft = "100px";
    


})

document.querySelector(".dark-mode-button button").addEventListener("click", function() {
    
    document.querySelector(".google-map").classList.toggle("dark-mode");
    
    this.textContent = this.textContent === "Light Mode" ? "Dark Mode" : "Light Mode";
});


 
var length = document.querySelectorAll("#endomic-animals img").length;
for(let i=0 ; i<length ; i++){



document.querySelectorAll("#endomic-animals img")[i].addEventListener("click" , function(){
    
    
    var trigger = this.classList.value;
    
    switch(trigger){

        case "walia-ibex":
            var sound = new Audio("animal-sound/walia-ibex.mp3");
            sound.play();
            break;

        case "red-fox":
            var sound = new Audio("animal-sound/red-fox.mp3");
            sound.play();
            break;

        case "Gelada-Baboon":
            var sound = new Audio("animal-sound/gelada-baboon.mp3");
            sound.play();
            break;

        case "Giant-Mole-rat":
            var sound = new Audio("animal-sound/giant-mole-rat.mp3");
            sound.play()
            break;

        case "bird3":
            var sound = new Audio("animal-sound/bird3.mp3");
            sound.play()
            break;

        

    }
} )

}