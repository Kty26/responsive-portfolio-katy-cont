/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
if (navToggle){
     navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/*=============== MENU HIDDEN ===============*/

if (navClose){ 

    navClose.addEventListener('click', ()=>{
     navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('nav__link') 

const linkAction = () => {

    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')

    navLink.forEach(n=> n.addEventListener('click', linkAction))
}

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur-header') 
                   : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
}
//service templateId #form publicKey
emailsjs.sendForm('service_6eqg93u', 'template_gzky6s4', '#contact-form', 'rRBSwkZ5byvP4NbgR')
.then(()=>{
    contactMessage.textContent = 'Mensaje enviado con éxito'

    //Eliminar mensaje después de 5 segundos

    setTimeout(() => {
        contactMessage.textContent = ''
    }, 5000);

    //Clear input field
contactForm.reset()

}, () => {
    contactMessage.textContent = 'Error en en envío del mensaje (mensaje no enviado'
})

contactForm.addEventListener ('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =() => { 
    const scrollUp = document.getElementById('scroll-up')
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                : scrollUp.classList.remove('show-scroll') 
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

