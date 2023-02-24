// --- Variables ---
const custom_name = document.getElementById('custom-name');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let story_text = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insert_x = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insert_y = ['the soup kitchen', 'Disneyland', 'the White House'];
const insert_z = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// --- Functions ---
function random_value_from_array(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

function result() {
    let new_story = story_text;
    let x_item = random_value_from_array(insert_x);
    let y_item = random_value_from_array(insert_y);
    let z_item = random_value_from_array(insert_z);

    new_story = new_story.replaceAll(':insertx:', x_item);
    new_story = new_story.replaceAll(':inserty:', y_item);
    new_story = new_story.replaceAll(':insertz:', z_item);

    if (custom_name.value !== '') {
        const name = custom_name.value;
        new_story = new_story.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300 / 14)} stones`;
        const temperature = `${Math.round((94 - 32) * (5 / 9))} centigrade`;
        new_story = new_story.replace('300 pounds', weight);
        new_story = new_story.replace('94 fahrenheit', temperature);
    }

    story.textContent = new_story;
    story.style.visibility = 'visible';
}

// --- Events ---
randomize.addEventListener('click', result);
custom_name.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        result();
    }
});