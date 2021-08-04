window.addEventListener('DOMContentLoaded', function(){
    console.log("dom content is ready!");
    let menu = document.querySelector('#menu');
    console.log(menu);
    menu.addEventListener('click', function(ev){
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