let hamburgerIcon = document.querySelector('.hamburger-div');

hamburgerIcon.addEventListener('click', () => {
    let closeIcon = document.querySelector('.close');
    closeIcon.style.display = 'block';
    hamburgerIcon.style.display = 'none';
   

})

window.addEventListener('resize', () => {
    let hamburgerIcon = document.querySelector('.hamburger-div');
    let windowSizeX = window.innerWidth;
    
    if (windowSizeX >= 768) {
        hamburgerIcon.style.display = 'none';

    } else {
        hamburgerIcon.style.display = 'block'
    }
});

document.addEventListener('DOMContentLoaded', () => {

    let windowSizeX = window.innerWidth;
    if (windowSizeX >= 768) {
        hamburgerIcon.style.display = 'none';
    }
});

