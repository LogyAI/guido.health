const boxesLeft = document.querySelectorAll('.boxLeft')

window.addEventListener('scroll', checkBoxesLeft)

checkBoxesLeft()

function checkBoxesLeft() {
    const triggerBottom = window.innerHeight / 4 * 4

    boxesLeft.forEach(boxLeft => {
        const boxTop = boxLeft.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            boxLeft.classList.add('show')
        } else {
            boxLeft.classList.remove('show')
        }
    })
}