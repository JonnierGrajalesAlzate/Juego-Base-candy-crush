// ********************************
// ***Variable Settings of Score***
// ********************************
let score = 0;
let comboSearch;
let scoreSpan = document.getElementById("score");
let comboSpan = document.getElementById("combo");

// ************************
// ***Score Add Function***
// ************************
const scoreAdd = () => {
    score += 100
    scoreSpan.innerHTML = `${score}`;
}

// **************************
// ***Clear Score Function***
// **************************
const clearScore = () => {
    scoreSpan.innerHTML = 0;
    score = 0;
}