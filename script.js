document.getElementById("checkAnswers").addEventListener("click", function() {
    let correctAnswers = {
        song1: "Yesterday, The Beatles",
        song2: "How Deep Is Your Love, Bee Gees",
        song3: "The Chain, Fleetwood Mac"
    };

    let nonSongAnswers = {
        song4: "Aretha Franklin", // Add a comma here
        song5: "Max Martin"
    };

    let result = document.getElementById("result");
    let questions = document.querySelectorAll('.container');
    let totalQuestions = questions.length;
    let score = 0;

    function updateScore() {
        result.textContent = "Your score: " + score + " out of " + totalQuestions;
    }

    questions.forEach(function(container, index) {
        let selectedSong = document.querySelector('input[name="song' + (index + 1) + '"]:checked + label');
        if (selectedSong) {
            selectedSong = selectedSong.textContent;
            container.classList.remove("correct", "wrong");

            if (index === 3) { // Checking for non-song question
                if (selectedSong === nonSongAnswers.song4) {
                    score++;
                    container.classList.add("correct");
                } else {
                    container.classList.add("wrong");
                }
            } else if (index === 4) { // Checking for non-song question
                if (selectedSong === nonSongAnswers.song5) {
                    score++;
                    container.classList.add("correct");
                } else {
                    container.classList.add("wrong");
                }
            } else { // For song-related questions
                if (selectedSong === correctAnswers['song' + (index + 1)]) {
                    score++;
                    container.classList.add("correct");
                } else {
                    container.classList.add("wrong");
                }
            }
            updateScore();
        }
    });
});
