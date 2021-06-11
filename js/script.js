const hamburger = document.getElementById ('hamburger');
const navUL = document.getElementById ('nav-ul');

hamburger.addEventListener('click', () => {
navUL.classList.toggle('show');
});

navUL.addEventListener('click', () => {
    navUL.removeAttribute('class', 'show');
    navUL.setAttribute('class', 'nav-ul')
});
