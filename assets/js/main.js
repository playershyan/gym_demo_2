/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
});

sr.reveal('.home__subtitle, .home__title, .home__description, .home__button, .home__images', {});
sr.reveal('.logos__img', {interval: 100});
sr.reveal('.program__card', {interval: 300});
sr.reveal('.choose__data, .choose__img', {interval: 100, origin: 'left'});
sr.reveal('.pricing__card', {interval: 300});
sr.reveal('.calculate__content', {origin: 'left'});
sr.reveal('.calculate__img', {origin: 'right'});
sr.reveal('.footer__group, .footer__social, .footer__copy', {interval: 100});

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message');

const calculateBMI = (e) => {
    e.preventDefault();

    // Check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === '') {
        // Add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');
        // Show message
        calculateMessage.textContent = 'Fill in the Height and Weight';
        // Remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000);
    } else {
        // BMI Formula
        const cm = parseFloat(calculateCm.value);
        const kg = parseFloat(calculateKg.value);
        const bmi = kg / Math.pow(cm / 100, 2);
        const bmiRounded = bmi.toFixed(1);

        // Show your health status
        if(bmi < 18.5) {
            // Add color and display message
            calculateMessage.classList.remove('color-green');
            calculateMessage.classList.add('color-red');
            calculateMessage.textContent = `Your BMI is ${bmiRounded} and you are skinny`;
        } else if(bmi >= 18.5 && bmi < 25) {
            calculateMessage.classList.remove('color-red');
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmiRounded} and you are healthy`;
        } else {
            calculateMessage.classList.remove('color-green');
            calculateMessage.classList.add('color-red');
            calculateMessage.textContent = `Your BMI is ${bmiRounded} and you are overweight`;
        }

        // To clear the input field
        calculateCm.value = '';
        calculateKg.value = '';

        // Remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000);
    }
}

calculateForm.addEventListener('submit', calculateBMI);

/*=============== EMAIL JS ===============*/
const footerForm = document.getElementById('footer-form'),
      footerInput = document.getElementById('footer-input'),
      footerMessage = document.getElementById('footer-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Check if the field has a value
    if(footerInput.value === '') {
        // Add and remove color
        footerMessage.classList.remove('color-green');
        footerMessage.classList.add('color-red');
        
        // Show message
        footerMessage.textContent = 'You must enter your email';
        
        // Remove message three seconds
        setTimeout(() => {
            footerMessage.textContent = '';
        }, 3000);
    } else {
        // Note: EmailJS integration would go here
        // For now, we'll show a success message
        
        // Show message and add color
        footerMessage.classList.remove('color-red');
        footerMessage.classList.add('color-green');
        footerMessage.textContent = 'You registered successfully';
        
        // Remove message after three seconds
        setTimeout(() => {
            footerMessage.textContent = '';
        }, 3000);
        
        // To clear the input field
        footerInput.value = '';
    }
}

footerForm.addEventListener('submit', sendEmail);
