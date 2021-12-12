//images
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const List = [
    ['Spring', 'Sakura - Nightcore', "sakuranightcore.mp3", 'url(sakuragif.gif)'],
    ['Rain', '【Free】Lucky', "freelucky.mp3", 'url(raingif.gif)'],
    ['Star', 'Melancholy Galaxy', "melancholygalaxy.mp3", 'url(stargif.gif)'],
    ['Spring', 'Sakura - Nightcore', "sakuranightcore.mp3", 'url(sakuragif.gif)'],
    ['Rain', '【Free】Lucky', "freelucky.mp3", 'url(raingif.gif)']
];

//buttons
const prevbt = document.querySelector(".prevbt");
const nextbt = document.querySelector(".nextbt");

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";



function nextslide() {

    //image slider
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    document.getElementById('theme').innerHTML = List[counter][0];
    document.getElementById('tit').innerHTML = List[counter][1];
    document.getElementById('player').src = List[counter][2];
    document.getElementById('abc').style.backgroundImage = List[counter][3]
}

function lastslide() {

    //image slider
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    document.getElementById('theme').innerHTML = List[counter][0];
    document.getElementById('tit').innerHTML = List[counter][1];
    document.getElementById('player').src = List[counter][2];
    document.getElementById('abc').style.backgroundImage = List[counter][3]

}

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === "lastclone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if (carouselImages[counter].id === "firstclone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

})


// music



var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function() {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

playbtn.addEventListener("click", playpause);

player.onplay = function() {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}

player.onpause = function() {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function() {
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);
    //progress
    let duration = player.duration;
    prog = Math.floor((ct * 100) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}

// var rainsong = new Audio("freelucky.mp3");
// var starsong = new Audio("melancholygalaxy.mp3");
// var springsong = new Audio("sakuranightcore.mp3");

// function Musicplay() {
//     if (carouselImages[counter].id === "rain") {
//         rainsong.play();
//     }
//     if (carouselImages[counter].id === "star") {
//         starsong.play();
//     }
//     if (carouselImages[counter].id === "spring") {
//         springsong.play();
//     }
// }




// var starsong = document.getElementsById("starsong");
// var springsong = document.getElementById("springsong");

// function Musicplay() {
//     if (carouselImages[counter].id === "rain") {
//         player.play();
//     }
//     if (carouselImages[counter].id === "star") {
//         starsong.play();
//     }

//     if (carouselImages[counter].id === "spring") {
//         springsong.play();
//     }
// }

// Musicplay();