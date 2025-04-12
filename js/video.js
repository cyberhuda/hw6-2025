var video;
// This format is from https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
// This is the preferred way to add event listeners for the load event.
window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    console.log("Auto play and loop are set to false");

    // Initialize volume display, this line was supposed to stay uncommented. From discussion
    // document.querySelector("#volume").textContent = (video.volume * 100) + "%";

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        document.querySelector("#volume").textContent = (video.volume * 100) + "%"; // Update volume display
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });
    // These 3 code format is from https://www.tutorialspoint.com/how-to-change-video-playing-speed-using-javascript

    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate.toFixed(5));
    });

    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed is " + video.playbackRate.toFixed(5));
    });

    document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current location: " + video.currentTime);
    });
    // I worked on this with table mates in discussion. We used information from She Codes
    // https://www.shecodes.io/athena/91747-what-does-the-document-queryselector-function-do-in-javascript
    document.querySelector("#mute").addEventListener("click", function() {
        console.log("Mute Video");
        if (video.muted == true) {
            video.muted = false;
            document.querySelector("#mute").innerHTML = "Mute";
        } else {
            video.muted = true;
            document.querySelector("#mute").innerHTML = "Unmute";
        }
    });

    // These next 3 are from stack overflow and using the console in the example video to test
    // https://stackoverflow.com/questions/19700193/how-to-get-the-volume-of-html5-video
    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.querySelector("#volume").textContent = (video.volume * 100) + "%";
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});