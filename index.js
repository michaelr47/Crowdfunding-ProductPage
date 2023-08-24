
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    let closeIcon = document.querySelector('.close');
  
    hamburger.style.display = 'none';
    closeIcon.style.display = 'block';
   


})

window.addEventListener('resize', () => {
    let hamburger = document.querySelector('.hamburger');
    let windowSizeX = window.innerWidth;
    
    if (windowSizeX >= 768) {
        hamburger.style.display = 'none';

    } else {
        hamburger.style.display = 'block'
    }
});

document.addEventListener('DOMContentLoaded', () => {

    let windowSizeX = window.innerWidth;
    if (windowSizeX >= 768) {
        hamburger.style.display = 'none';
    }
});

