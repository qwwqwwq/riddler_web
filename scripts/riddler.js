
"use strict";
window.addEventListener('DOMContentLoaded', function(){
    console.log("dom content is ready!");
    let menu = document.querySelector('#menu');
    console.log(menu);
    menu.addEventListener('click',function(ev){
        ev.preventDefault();
        let nav = document.querySelector('nav.primary');
        console.log(nav);
        if (nav.classList.contains('displayonpage')) {
            nav.classList.remove('displayonpage'); 
        } else {
            nav.classList.add('displayonpage');
        }
    });
});

  // How do I add a click listener so that when you click an image (in the "riddles.html" doc) it changes to another image? Also do I have to hard code this for every individual riddle? // 

function changeImg() {
    var image = document.getElementById('lettera');
        if (image.src.match("img/more.jpg")) {
                                image.src = "images/letter_a answer.png";
                            }
                            else {
                                image.src = "images/A_riddle-01.jpg";
                            }
                        }