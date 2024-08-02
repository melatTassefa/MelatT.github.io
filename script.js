const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const targetSection = document.getElementById(button.textContent.toLowerCase());
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
