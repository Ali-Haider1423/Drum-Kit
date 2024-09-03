//Constructor function of javascript
// function House_keeper(name, yaersofexperience, languages) {
//     this.name = name;
//     this.yaersofexperience = yaersofexperience;
//     this.language = languages;
//     this.clean = function () {
//         alert("Cleaning in progress...");
//     }
// }
// var housekeeper1 = new House_keeper("Kainat", 5, ["English", "Urdu", "French"]);
// housekeeper1.clean();
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = "white";
    });
}
function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
    }
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    addanimation(event.key);
});
for (var i = 0; i <= document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        makesound(key);
        addanimation(key);
    })
    // if (i === 0) {
    //     document.querySelectorAll("button")[i].addEventListener("click", function () {
    //         var audio = new Audio('./sounds/tom-1.mp3');
    //         audio.play();
    //     });
    // }
    // else if (i === 1) {
    //     document.querySelectorAll("button")[i].addEventListener("click", function () {
    //         var audio = new Audio('./sounds/tom-2.mp3');
    //         audio.play();
    //     });
    // }
    // else if (i === 2) {
    //     document.querySelectorAll("button")[i].addEventListener("click", function () {
    //         var audio = new Audio('./sounds/tom-3.mp3');
    //         audio.play();
    //     });
    // }
    // else if (i === 3) {
    //     document.querySelectorAll("button")[i].addEventListener("click", function () {
    //         var audio = new Audio('./sounds/tom-4.mp3');
    //         audio.play();
    //     });
    // }
    // else if (i === 4) {
    //     document.querySelectorAll("button")[i].addEventListener("click", function () {
    //         var audio = new Audio('./sounds/crash.mp3');
    //         audio.play();
    //     });
    // }
    // else if (i === 5) {
    //     document.querySelectorAll("button")[i].addEventListener("click", function () {
    //         var audio = new Audio('./sounds/kick-bass.mp3');
    //         audio.play();
    //     });
    // }
    // else if (i === 6) {
    //     document.querySelectorAll("button")[i].addEventListener("click", function () {
    //         var audio = new Audio('./sounds/snare.mp3');
    //         audio.play();
    //     });
    // }
}
function addanimation(currentbutton) {

    document.querySelector("." + currentbutton).addClass("pressed");
    setTimeout(function () {
        document.querySelector("." + currentbutton).removeClass("pressed");
    }, 100);
}
