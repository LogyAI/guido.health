const boxesRight = document.querySelectorAll('.boxRight')

window.addEventListener('scroll', checkBoxesRight)

checkBoxesRight()

function checkBoxesRight() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxesRight.forEach(boxRight => {
        const boxTop = boxRight.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            boxRight.classList.add('show')
        } else {
            boxRight.classList.remove('show')
        }
    })
}