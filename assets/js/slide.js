import {c, cs} from './helpers/selectors.js'

let slideCount = 0;
const slideLength = cs('.slideSquare .slideRoll img').length;
const slidePictureSize = 300;

cs('.slideArea .slideSquare .slideRoll img').forEach( (item, index) => {
    let selectSlideIcon = document.createElement('div');
    selectSlideIcon.setAttribute('class', 'slideSelectIcon');
    selectSlideIcon.setAttribute('data_key', index);
    c('.slideImageSelection').appendChild(selectSlideIcon)
})

cs('.slideArea .slideImageSelection .slideSelectIcon').forEach( bt => {
    bt.addEventListener('click', e => {
        const btTarget = e.target.getAttribute('data_key');
        slideCount = btTarget;
        removeActive();
        setActive(btTarget);
        nextSlide(btTarget, slidePictureSize);
    })
});

export function runSlide() {
    const slideTime = 2000;

    setInterval( () => {
        if(slideCount < slideLength) {
            nextSlide(slideCount, slidePictureSize);
            removeActive();
            setActive(slideCount);
            slideCount++;
        } else {
            slideCount = 0;
        }
    }, slideTime)
}

function nextSlide(currentSlide, width) {
    let slide = c('.slideSquare .slideRoll');
    slide.style.marginLeft = `${-(currentSlide * width)}px`;
}

function setActive(index) {
    const slideNavButtons = cs('.slideArea .slideImageSelection .slideSelectIcon');
    slideNavButtons[index].style.backgroundColor = '#fff';
}

function removeActive() {
    cs('.slideArea .slideImageSelection .slideSelectIcon')
        .forEach( item => item.style.backgroundColor = '#ccc');
}
