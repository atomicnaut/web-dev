// --- Variables ---
let random_number = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const last_result = document.querySelector('.last-result');
const low_or_hi = document.querySelector('.low-or-hi');
const guess_submit = document.querySelector('.guess-submit');
const guess_field = document.querySelector('.guess-field');

let guess_count = 1;
let reset_button;

guess_field.focus();

// --- Functions ---
// check guess
function check_guess() {
    const user_guess = Number(guess_field.value);
    if (guess_count === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += user_guess + ' ';

    if (user_guess === random_number) {
        last_result.textContent = 'Congratulations! You got it right!';
        last_result.style.backgroundColor = '#8fd47c';
        low_or_hi.textContent = '';
        set_game_over();
    } else if (guess_count === 10) {
        last_result.textContent = 'GAME OVER!';
        low_or_hi.textContent = '';
        set_game_over();
    } else {
        last_result.textContent = 'Wrong!';
        last_result.style.backgroundColor = '#ed5353';
        if (user_guess < random_number) {
            low_or_hi.textContent = 'Last guess was too low!';
        } else if (user_guess > random_number) {
            low_or_hi.textContent = 'Last guess was too high!';
        }
    }

    guess_count++;
    guess_field.value = '';
    guess_field.focus();
}

// set game over
function set_game_over() {
    guess_field.disabled = true;
    guess_submit.disabled = true;
    reset_button = document.createElement('button');
    reset_button.textContent = 'Start new game';
    document.body.appendChild(reset_button);
    reset_button.addEventListener('click', reset_game);
}

// reset game
function reset_game() {
    guess_count = 1;
    const reset_paras = document.querySelectorAll('.result-paras p');
    for (const reset_para of reset_paras) {
        reset_para.textContent = '';
    }

    reset_button.parentNode.removeChild(reset_button);
    guess_field.disabled = false;
    guess_submit.disabled = false;
    guess_field.value = '';
    guess_field.focus();
    last_result.style.backgroundColor = 'white';
    random_number = Math.floor(Math.random() * 100) + 1;
}

// --- Events ---
guess_submit.addEventListener('click', check_guess);
guess_field.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        check_guess();
    }
});