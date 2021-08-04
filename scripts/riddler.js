"use strict";
let riddles = [
    "lettera",
    "fishingline",
    "leaves",
    "god",
    "river",
    "ice",
    "heart",
    "wine",
    "wave"
]

window.addEventListener('DOMContentLoaded', function(){
    console.log("dom content is ready!");

    riddles.forEach((riddle, i) => {
        let riddleImage = document.getElementById(riddle);

        riddleImage.addEventListener('click', function(ev){
            console.log(riddle + " clicked!")
            let riddleText = document.getElementById(riddle + '-answer');
            let visibility = riddleText.style.visibility;

            if (visibility === "hidden") {
                riddleText.style.visibility = "visible";
            } else if (visibility === "visible") {
                riddleText.style.visibility = "hidden";
            } else {
                riddleText.style.visibility = "visible";
            }
        });
    });
}
);
