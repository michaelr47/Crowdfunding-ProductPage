
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



const rewardFocus = () => {
    let rewards = document.querySelectorAll('.reward');
  
    let mapRewards = Array.from(rewards).map(reward => {
        reward.addEventListener('click', () => {
            if (!reward.classList.contains('rewardFocus')) {
                reward.classList.add('rewardFocus')
            } else {
                reward.classList.remove('rewardFocus');
            }
        
        })
    });
   
    return mapRewards;
}

rewardFocus();