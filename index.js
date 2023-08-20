document.addEventListener('DOMContentLoaded', () => {
    let hamburgerIcon = document.querySelector('.hamburger-div');
    let windowSizeX = window.innerWidth;
    if (windowSizeX >= 768) {
        hamburgerIcon.style.display = 'none';
    }
});



window.addEventListener('resize', () => {
    let hamburgerIcon = document.querySelector('.hamburger-div');
    let windowSizeX = window.innerWidth;
    
    if (windowSizeX >= 768) {
        hamburgerIcon.style.display = 'none';

    } else {
        hamburgerIcon.style.display = 'block'
    }
});
