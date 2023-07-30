const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('.noscroll');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click',function(){

    if(header.classList.contains('open')){ //close the menu
        // body.classList.remove('noscroll');
        header.classList.remove('open');
//For each loop is used it iterate through all elements that has has fade class & changes its class
        fadeElems.forEach(function(element){ 
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }else{ //open the menu
        // body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
});
