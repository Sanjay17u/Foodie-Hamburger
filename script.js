const hamBurger = document.querySelector('.menu')
const navBar = document.querySelector(".nav")
const textAll = document.querySelectorAll('a') 

hamBurger.addEventListener('click', () => {
    hamBurger.classList.toggle('icon')
    navBar.classList.toggle('chance')

    if(hamBurger.classList.contains('icon') && navBar.classList.contains('chance')) {
        textAll.forEach((text) => {
            text.style.color = 'black'
            text.style.fontWeight = 700
        })
    } else {
        textAll.forEach((text) => {
            text.style.color = 'white'
            text.style.fontWeight = 700
        })
    }
})