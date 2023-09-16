
document.addEventListener('DOMContentLoaded', () => {

    let windowSizeX = window.innerWidth;
    if (windowSizeX > 768) {
        hamburger.style.display = 'none';
    }

    displayModal();
});




let hamburger = document.querySelector('.hamburger');

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
    //map throught options adding click event 
    let mapRewards = Array.from(rewards).map(reward => {
        reward.addEventListener('click', () => {
            if (!reward.classList.contains('rewardFocus')) {
                reward.classList.add('rewardFocus')
            } else {
                reward.classList.remove('rewardFocus');
            }
            
        })
   
    });

    let radios = document.querySelectorAll('input[type="radio"]');
    // let continueBtnModal = document.querySelector('continueBtn');
    
        for (let radio of radios) {
            radio.addEventListener('click', () => {
                let selectedReward;
                if (radio.checked) {
                    selectedReward = radio.classList.add('rewardFocus');
                
                    
                }
            })
        }

    // return mapRewards;
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
 
    let backProjectButton = document.querySelector('.backProject-Btn');
    let modalDarkBackground = document.querySelector('.modalBackDrop');
    let modalWithRewardOptions = document.querySelector('.innerBackProjectModal');
    let closeModalButton = document.querySelector('.modal-closeIcon');


    backProjectButton.addEventListener('click', () => { 
        modalWithRewardOptions.style.display = 'inline';
        modalDarkBackground.style.display = 'inline';

        if (modalDarkBackground && modalWithRewardOptions) { // explicit if check 
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
    
  

}
// displayModal();
// add click event listener on backproject btn
        // display modal with reward options
            // if radio.checked on either, add border and display input amount field
            // else diff. radio is checked, untoggle old, and add styles as before ^

            // input validation as well for each one to meet the reward qualif. threshold... $

                // if all is met, after clicking contiue btn, add thank you modal
 

bookmarkProject();

