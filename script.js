document.getElementById("checkAnswers").addEventListener("click", function() {
    let correctAnswers = {
        song1: "Yesterday, The Beatles",
        song2: "How Deep Is Your Love, Bee Gees",
        song3: "The Chain, Fleetwood Mac"
    };

    let result = document.getElementById("result");
    let score = 0;

    let selectedSong1 = document.querySelector('input[name="song1"]:checked');
    if (selectedSong1) {
        if (selectedSong1.nextSibling.textContent.trim() === correctAnswers.song1) {
            score++;
        }
    }

    let selectedSong2 = document.querySelector('input[name="song2"]:checked');
    if (selectedSong2) {
        if (selectedSong2.nextSibling.textContent.trim() === correctAnswers.song2) {
            score++;
        }
    }

    let selectedSong3 = document.querySelector('input[name="song3"]:checked');
    if (selectedSong3) {
        if (selectedSong3.nextSibling.textContent.trim() === correctAnswers.song3) {
            score++;
        }
    }

    result.textContent = "Your score: " + score + " out of 3";
});
