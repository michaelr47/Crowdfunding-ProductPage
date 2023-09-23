const modalDarkBackground = document.querySelector('.modalBackDrop'); // modal dark bg
const modalWithRewardOptions = document.querySelector('.innerBackProjectModal'); // actual modal 
const hamburger = document.querySelector('.hamburger'); // hamburger icon
const backProjectButton = document.querySelector('.backProject-Btn'); // button to display rewards
const rewardButtons = Array.from(document.querySelectorAll('.rewardButton')); // 'select reward' buttons
const buttonsForModal = [backProjectButton, rewardButtons[0], rewardButtons[1]] // buttons for modal display

document.addEventListener('DOMContentLoaded', () => {

    let windowSizeX = window.innerWidth;
    if (windowSizeX > 768) {
        hamburger.style.display = 'none';
    }
    displayModal()

});



hamburger.addEventListener('click', () => {
    let closeIcon = document.querySelector('.close');
    let modalBackdrop = document.querySelector('.modalBackDrop');
    let mobileAndTabletNav = document.querySelector('nav');
    
    let elements = [hamburger, closeIcon, modalBackdrop, mobileAndTabletNav];
    
    elements.forEach(el => {
        if (el === hamburger) {
            el.style.display = 'none';
        } else {
            el.style.display = 'block';
        }
    });

    closeIcon.addEventListener('click', () => {
        elements.forEach(el => {
            if (el === hamburger) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        })
    });
})

window.addEventListener('resize', () => {
    let hamburger = document.querySelector('.hamburger');
    let windowSizeX = window.innerWidth;
    
    if (windowSizeX > 768) {
        hamburger.style.display = 'none';

    } else {
        hamburger.style.display = 'block'
    }
});


const rewardFocus = () => {
    // reward options INSIDE modal
    let rewards = document.querySelectorAll('.innerBackProjectModal .reward');
    // input radio buttons
    let radios = document.querySelectorAll('input[type="radio"]');
    // selected reward options
    let selectedReward = document.querySelectorAll('.rewardSelected');
    
    // loop over radios 
    for (let i = 0; i < radios.length - 1; i++) { 
        //adding click event to all 
        radios[i].addEventListener('click', () => {
            // loop over reward containers to remove focus state
            for (let j = 0; j < rewards.length - 1; j++) {
                rewards[j].classList.remove('rewardFocus');
                for (let k = 0; k < selectedReward.length; k++) {
                    selectedReward[k].classList.add('hidden')
                }
            }
            // if checked, then add focus state to corresponding reward container
            if (radios[i].checked) {
                rewards[i].classList.add('rewardFocus');
                selectedReward[i-1].classList.remove('hidden');
            }
        })
    }
}

const bookmarkProject = () => {
    let bookmarkDiv = document.querySelector('.tabAndDeskBookmark'); // div
    let bookmarkSpan = document.querySelector('.bookmarkSpan'); // bookmark
    let bookmarkedText = document.querySelector('.bookmarked'); // bookmarked
    let bookmarkImage = document.querySelector('.bookmark'); // bookmarkImg in div Container 
    

    bookmarkDiv.addEventListener('click', () => {
        bookmarkImage.classList.add('bookmark');
        bookmarkSpan.style.display = 'none';
        bookmarkedText.style.display = 'inline';
        bookmarkedText.classList.add('bookmarkSpan');
        bookmarkedText.style.color = 'darkcyan';


    })
}


function displayModal() {

    let closeModalButton = document.querySelector('.modal-closeIcon'); // closing icon button
    
    buttonsForModal.forEach(button => {
        button.addEventListener('click', () => { 
            modalWithRewardOptions.style.display = 'inline';
            modalDarkBackground.style.display = 'inline';

            if (modalDarkBackground && modalWithRewardOptions) { // explicit check if both elements are present
                modalDarkBackground.addEventListener('click', () => {
                    modalDarkBackground.style.display = 'none';
                    modalWithRewardOptions.style.display = 'none';
                })


                closeModalButton.addEventListener('click', () => {
                    modalDarkBackground.style.display = 'none';
                    modalWithRewardOptions.style.display = 'none';
                })
            }

            rewardFocus();

        })
    })

}


bookmarkProject();



// add click event listener on backproject btn
    // display modal with reward options
        // if radio.checked on either, add border and display input amount field
        // else diff. radio is checked, untoggle old, and add styles as before ^

            // input validation as well for each one to meet the reward qualif. threshold... $

                // if all is met, after clicking contiue btn, add thank you modal
 