const hamburger = document.querySelector('.hamburger'); // hamburger icon
const modalDarkBackground = document.querySelector('.modalBackDrop'); // modal dark bg
const modalWithRewardOptions = document.querySelector('.innerBackProjectModal'); // actual modal 
// reward options INSIDE modal
const rewardOptions = document.querySelectorAll('.innerBackProjectModal .reward');

const backProjectButton = document.querySelector('.backProject-Btn'); // button to display rewards
const rewardButtons = Array.from(document.querySelectorAll('.rewardButton')); // 'select reward' buttons
const buttonsForModal = [backProjectButton, rewardButtons[0], rewardButtons[1]]; // buttons for modal display
// thank you modal 
const thankYouModal = document.querySelector('.thankYouModal');
// 'got it' btn in thank you modal
const btnInTYModal = document.querySelector('.thankYou-btn');
document.addEventListener('DOMContentLoaded', () => {

    let windowSizeX = window.innerWidth;
    if (windowSizeX > 768) {
        hamburger.style.display = 'none';
    }
    displayModal();

});
// hamurger icon to display nav menu
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
// resize window to display or !display hamburger icon to its current window width - (px)
window.addEventListener('resize', () => {
    let hamburger = document.querySelector('.hamburger');
    let windowSizeX = window.innerWidth;
    
    if (windowSizeX > 768) {
        hamburger.style.display = 'none';

    } else {
        hamburger.style.display = 'block';
    }
// removes dark background (modal) on or after 768px
    if (modalDarkBackground && windowSizeX > 768) {
        modalDarkBackground.style.display = 'none';
    }
});

// adds border to selected reward option, form displays(input field with contineu button), and font weight bolder to 'pledge amount' text
const rewardFocus = () => {
    
    // input radio buttons
    let radios = document.querySelectorAll('input[type="radio"]');
    // selected reward options
    let selectedReward = document.querySelectorAll('.rewardSelected');
    // pledge amount or more text 
    let pledgeAmount = Array.from(document.querySelectorAll('.innerBackProjectModal .pledgeAmount'));

    // loop over radios 
    for (let i = 0; i < radios.length - 1; i++) { 
        //adding click event to all 
        radios[i].addEventListener('click', () => {
            // loop over reward containers to remove focus state
            for (let j = 0; j < rewardOptions.length - 1; j++) {
                rewardOptions[j].classList.remove('rewardFocus');
                for (let k = 0; k < selectedReward.length; k++) {
                    selectedReward[k].classList.add('hidden');
                    pledgeAmount[k].style.fontWeight = '500';
                }
            }
            // if checked, then add focus state to corresponding reward container, add hidden div & fontweight to pledge text
            if (radios[i].checked) {
                rewardOptions[i].classList.add('rewardFocus');
                selectedReward[i].classList.remove('hidden');
                pledgeAmount[i-1].style.fontWeight = '700';

            }
        })
    }
}
// 'bookmark' to 'bookmarked' and changes icon color
const bookmarkProject = () => {
    let bookmarkDiv = document.querySelector('.tabAndDeskBookmark'); // div
    let bookmarkSpan = document.querySelector('.bookmarkSpan'); // bookmark
    let bookmarkedText = document.querySelector('.bookmarked'); // bookmarked
    let bookmarks = document.querySelectorAll('.bookmark'); // bookmarkImg in div Container 
    
    for (const bookmark of bookmarks) {
        bookmark.classList.remove('bookmark');
    }
    // bookmark div is the wrapper
    bookmarkDiv.addEventListener('click', () => {
    
       for (const bookmarked of bookmarks) {
            bookmarked.classList.add('bookmark');
       }
        bookmarkSpan.style.display = 'none';
        bookmarkedText.classList.add('bookmarkSpan');
        bookmarkedText.style.color = 'darkcyan';
        
    })
}

// displays modal with reward options
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

                if (modalDarkBackground && thankYouModal) {
                    modalDarkBackground.addEventListener('click', () => {
                        modalDarkBackground.style.display = 'none';
                        thankYouModal.classList.add('hidden');
                    })

                }

                closeModalButton.addEventListener('click', () => {
                    modalDarkBackground.style.display = 'none';
                    modalWithRewardOptions.style.display = 'none';
                })
            }

            rewardFocus();

        })
    })

}

function handleSubmit() {
    const continueButtons = Array.from(document.querySelectorAll('.continueBtn'));
    // input amount fields
    const inputs = Array.from(document.querySelectorAll('.inputAmount'));

   
    // no reward button / first button in reward options
    const noRewardBtn = document.getElementById('noRewardButton');

    noRewardBtn.addEventListener('click', () => {
        modalWithRewardOptions.style.display = 'none';
        thankYouModal.classList.remove('hidden');
    })

    continueButtons.forEach((button, i) => {
        button.addEventListener('click', () => {

            let firstInput = inputs[0];
            let secInput = inputs[1];   
            // if either one input field is filled out and meets req. , then displays thank you modal.
            if ((firstInput.value.length !== 0 && parseInt(firstInput.value) >= 25) ||
                (secInput.value.length !== 0 && parseInt(secInput.value) >= 75)) {
                    modalWithRewardOptions.style.display = 'none';
                    thankYouModal.classList.remove('hidden');

            } else return;      
        })
    })
    // 'got it' click event
    if (thankYouModal.classList.contains('hidden')) {
            btnInTYModal.addEventListener('click', () => {
                thankYouModal.classList.add('hidden');
                modalDarkBackground.style.display = 'none';
            })
    }
}
// func to pre-select reward option with radio checked and form displayed below
function selectRewardFocus() {
    let firstRadio = document.querySelectorAll('input[type="radio"]')[1];
    let secRadio = document.querySelectorAll('input[type="radio"]')[2];
    let selectedReward = document.querySelectorAll('.rewardSelected');
//    index 0 and 1 only      btn len = 2
    for (let i = 0; i < rewardButtons.length - 1; i++) {
        rewardButtons[i].addEventListener('click', () => {
            if (rewardButtons && i === 0) {
                displayModal()
                firstRadio.checked = true;
                rewardOptions[1].classList.add('rewardFocus')
                selectedReward[1].classList.remove('hidden');
            }

            if (rewardButtons && i === 1) {
                displayModal()
                secRadio.checked = true;
                rewardOptions[2].classList.add('rewardFocus');
                selectedReward[2].classList.remove('hidden');
            }
            rewardOptions[i].classList.remove('rewardFocus');
            selectedReward[i].classList.add('hidden');
        })
    }
}


bookmarkProject();
selectRewardFocus()
handleSubmit();

// add click event listener on backproject btn ✅
    // display modal with reward options ✅
        // if radio.checked on either, add border and display input amount field ✅
        // else diff. radio is checked, untoggle old, and add styles as before ^ ✅

            // input validation as well for each one to meet the reward qualif. threshold... $ ✅

                // if all is met, after clicking contiue btn, add thank you modal ✅
 