
  const playButtons = document.querySelectorAll('.play');
  const prevButtons = document.querySelectorAll(".prev");
  const nextButtons = document.querySelectorAll(".next");


  playButtons.forEach(button => {
    button.addEventListener('click', function() {
      const audioElement = this.closest('.card1').querySelector('audio'); // Select the audio element in the same card

      // Check if the song is already playing
      if (audioElement.paused) {
        // Pause all other audio elements
        document.querySelectorAll('audio').forEach(audio => {
          audio.pause();
          audio.currentTime = 0; // Reset the song position
        });

        // Play the current song
        audioElement.play();
        this.innerHTML = '⏸'; // Change button to pause icon
      } else {
        // Pause the current song
        audioElement.pause();
        this.innerHTML = '▶️'; // Change button back to play icon
      }
    });
  });


   prevButtons.forEach((button) => {
     button.addEventListener("click", function () {
       const audioElement = this.closest(".card1").querySelector("audio");
       audioElement.currentTime -= 10; // Rewind 10 seconds
     });
   });

   // Next button
   nextButtons.forEach((button) => {
     button.addEventListener("click", function () {
       const audioElement = this.closest(".card1").querySelector("audio");
       audioElement.currentTime += 10; // Fast forward 10 seconds
     });
   });

