let btn_start = document.getElementById("start");
let btn_reset = document.getElementById("reset");
let btn_check = document.getElementById("check");

let main_div = document.getElementById("main-div");

let guess_box = document.getElementById("guess-box");
let all_guesses = document.getElementById("all-guesses");
let high_or_low = document.getElementById("high-or-low");

let random_num = Math.floor(Math.random() * 100) + 1;

let count_guess = 1;

function start() {
    main_div.style.visibility = "visible";
}

function checkGuess() {
    let your_guess = Number(guess_box.value);

    if (count_guess < 10) {
        if (your_guess < random_num) {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = "Vaš broj je veći od " + your_guess;
            high_or_low.classList.add("wrong");
            count_guess++;
            guess_box.value = '';
        }
        else if (your_guess > random_num) {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = "Vaš broj je manji od " + your_guess;
            high_or_low.classList.add("wrong");
            count_guess++;
            guess_box.value = '';
        }
        else {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = "Čestitke! Pogodili ste točan broj.";
            high_or_low.classList.add("success");
            guess_box.value = '';
            gameOver();
        }
    }
    else {
        all_guesses.textContent += your_guess + " ";
        high_or_low.textContent = "Igra gotova! Nazalost ste iskoristili sve pokušaje.";
        high_or_low.classList.add("wrong");
        guess_box.value = '';
        gameOver();
    }
}

function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true;
}