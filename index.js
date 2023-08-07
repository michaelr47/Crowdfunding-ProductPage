
window.addEventListener('resize', () => {
    let header = document.querySelector('header');
    let hamburgerIcon = document.querySelector('.hamburger-div');
    let windowSizeX = window.innerWidth;
    
    if (windowSizeX >= 600) {
        hamburgerIcon.style.display = 'none';
        
    } else {
        hamburgerIcon.style.display = 'block'
    }
    ;

});
