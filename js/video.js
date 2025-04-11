// var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")
//     video = document.querySelector("#player1");
// 	video.autoplay = false;
// 	video.loop = false;
// 	console.log("this works");

//     document.querySelector("#play").addEventListener("click", function() {
// 		console.log("Play Video");
// 		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
// 		video.play();
// 	});

// // document.querySelector("#play").addEventListener("click", function() {
// // 	console.log("Play Video");
// // });

// 	document.querySelector("#pause").addEventListener("click", function() {
// 		console.log("Pause Video");
// 		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
// 		video.pause();
// 	});

// 	document.querySelector("#slower").addEventListener("click", function() {
// 		console.log("Slow Down Video");
// 		video.playbackRate *= 0.90;
// 		console.log("New speed is " + video.playbackRate);
// 	});
// 	document.querySelector("#faster").addEventListener("click", function() {
// 		console.log("Speed Up Video");
// 		video.playbackRate /= 0.90;
// 		console.log("New speed is " + video.playbackRate);
// 	});
// 	document.querySelector("#mute").addEventListener("click", function() {
// 		if (video.muted==false){
// 		video.muted = true;
// 		console.log("Mute Video");
// 		}
// 		else{
// 		video.muted = false;
// 		console.log("Unmute Video");
// 		}
// 	});
// 	document.querySelector("#slider").addEventListener("click", function() {
// 		console.log("Changing volume");
// 		video.volume = this.value / 100;
// 		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
// 	});
// 	document.querySelector("#skip").addEventListener("click", function() {
// 		console.log("Skip Ahead");
// 		if (video.currentTime + 15 > video.duration) {
// 			video.currentTime = 0;
// 		} else {
// 			video.currentTime += 15;
// 		}
// 		console.log("New time is " + video.currentTime);
// 	});
// 	document.querySelector("#vintage").addEventListener("click", function() {
// 		console.log("Changing CSS");
// 		video.classList.add("oldSchool");
// 	});
// 	document.querySelector("#orig").addEventListener("click", function() {
// 		console.log("Changing CSS");
// 		video.classList.remove("oldSchool");
// 	});
// });


var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    console.log("Auto play and loop are set to false");

    // Initialize volume display. From AG: -3: Video volume [ after ] play is not displaying correctly. Do you have the correct number? Did you remember the % sign?
    document.querySelector("#volume").textContent = (video.volume * 100) + "%";
	// -3: Video should be playing at this point
    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
    });
	// From AG: [ Checking video pause... ] Worked, leave it alone.
    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });
	// From AG: -3: Video not slowing down by 10%. Fixed now, also use 1/0.9=1.11 for later
    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate.toFixed(5));
    });
	// From AG: [ Checking video speed ahead... ]. Worked, leave it alone.
    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed is " + video.playbackRate.toFixed(5));
    });
	// From AG: -3: Video not skipping ahead by the right amount and/or not restarting correctly.
    document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current location: " + video.currentTime);
    });
	// From AG: -3: Video should be muted. Changed to this now
    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            this.textContent = "Mute";
        } else {
            video.muted = true;
            this.textContent = "Unmute";
        }
    });

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