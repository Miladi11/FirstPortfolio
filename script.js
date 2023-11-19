// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

        // Select all elements with the 'shake-on-hover' class
        const shakeOnHoverElements = document.querySelectorAll('.shake-on-hover');
    
        // Add a mouseover event listener to each element
        shakeOnHoverElements.forEach((element) => {
            element.addEventListener('mouseover', () => {
                // Add the Animate.css classes to trigger the 'shake' animation
                element.classList.add('animate__animated', 'animate__shakeX');
            });
    
            // Remove the Animate.css classes when the mouse leaves
            element.addEventListener('mouseout', () => {
                element.classList.remove('animate__animated', 'animate__shakeX');
            });
        });
