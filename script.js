document.getElementById("checkAnswers").addEventListener("click", function() {
    let correctAnswers = {
        song1: "Yesterday, The Beatles",
        song2: "How Deep Is Your Love, Bee Gees",
        song3: "The Chain, Fleetwood Mac"
    };

    let result = document.getElementById("result");
    let score = 0;

    let selectedSong1 = document.querySelector('input[name="song1"]:checked + label').textContent;
    let container1 = document.getElementById("song1");
    if (selectedSong1 === correctAnswers.song1) {
        score++;
        container1.classList.add("correct");
    } else {
        container1.classList.add("wrong");
    }

    let selectedSong2 = document.querySelector('input[name="song2"]:checked + label').textContent;
    let container2 = document.getElementById("song2");
    if (selectedSong2 === correctAnswers.song2) {
        score++;
        container2.classList.add("correct");
    } else {
        container2.classList.add("wrong");
    }

    let selectedSong3 = document.querySelector('input[name="song3"]:checked + label').textContent;
    let container3 = document.getElementById("song3");
    if (selectedSong3 === correctAnswers.song3) {
        score++;
        container3.classList.add("correct");
    } else {
        container3.classList.add("wrong");
    }

    result.textContent = "Your score: " + score + " out of 3";
});

