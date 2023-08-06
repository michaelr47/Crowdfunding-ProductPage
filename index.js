// const changeHeroImage = () => {
//     let widthOfPage = window.screenX;
// }
console.log(window.screenX);

window.addEventListener('resize', () => {
    let header = document.querySelector('header');
    console.log(header);
    if (window.innerWidth >= 600) {
        document.querySelector('header').style.backgroundImage = "url('./images/image-hero-desktop.jpg')";

    }
    console.log(window.innerWidth);
})