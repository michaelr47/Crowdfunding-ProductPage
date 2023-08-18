let windowSizeX = window.innerWidth;
let hamburgerIcon = document.querySelector('.hamburger');

document.addEventListener("DOMContentLoaded", function() {
    checkWindowOnLoad();
  
});

function checkWindowOnLoad() {
    return windowSizeX >= 768 ? hamburgerIcon.style.display = 'none' : hamburgerIcon.style.display = 'block';
}

window.addEventListener('resize', () => {
    
    if (windowSizeX >= 768) {
        hamburgerIcon.style.display = 'none';
    } else {
        hamburgerIcon.style.display = 'block'
    }

});
