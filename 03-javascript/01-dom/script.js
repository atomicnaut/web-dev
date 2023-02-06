let css = document.querySelector('h3');
let color_1 = document.querySelector('.color-1');
let color_2 = document.querySelector('.color-2');
let body = document.getElementById('gradient')

function setGradient(color1, color2) {
    body.style.background = `linear-gradient(to right, ${color_1.value}, ${color_2.value})`;
    css.textContent = `${body.style.background};`;
}

color_1.addEventListener('input', setGradient)
color_2.addEventListener('input', setGradient)