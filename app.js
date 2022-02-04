const theBars = document.querySelector(".button-bars")
const theCross = document.querySelector(".button-close")
const mobileNav = document.querySelector(".mobile-nav")
const navLogo = document.querySelector(".nav-logo")
const navLinks = document.querySelectorAll(".nav-links")

theBars.addEventListener('click', ()=> {
    mobileNav.classList.add('open')
    mobileNav.classList.remove('close')
})

theCross.addEventListener('click', ()=> {
    mobileNav.classList.add('close')
    mobileNav.classList.remove('open')
})

navLogo.addEventListener('click', ()=> {
    mobileNav.classList.add('close')
    mobileNav.classList.remove('open')
})

navLinks.forEach(navLinks => {
    navLinks.addEventListener('click', ()=> {
        mobileNav.classList.add('close')
    }) 
})


