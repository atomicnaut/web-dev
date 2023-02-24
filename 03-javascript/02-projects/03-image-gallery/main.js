// --- Variables ---
const displayed_image = document.querySelector('.displayed-img');
const thumb_bar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Declaring the array of image filenames
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declaring the alternative text for each image file
const alts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg': 'Large moth on a leaf'
}

// Looping through images
for (const image of images) {
    const new_image = document.createElement('img');
    new_image.setAttribute('src', `imgs/${image}`);
    new_image.setAttribute('alt', alts[image]);
    thumb_bar.appendChild(new_image);
    new_image.addEventListener('click', (e) => {
        displayed_image.src = e.target.src;
        displayed_image.alt = e.target.alt;
    })
}

// Wiring up the Darken/Lighten button
btn.addEventListener('click', () => {
    btn_class = btn.getAttribute('class');
    if (btn_class === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})