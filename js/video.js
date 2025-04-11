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
// I didn't uncomment and edit the #play code so nothing was showing up on my screen.
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.querySelector("#volume").textContent = (video.volume * 100) + "%";
});

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
	// // From AG: -3: Video not slowing down by 10%. Fixed now, also use 1/0.9=1.11 for later
    // document.querySelector("#slower").addEventListener("click", function() {
    //     video.playbackRate *= 0.9;
    //     console.log("New speed is " + video.playbackRate.toFixed(5));
    // });
	// // From AG: [ Checking video speed ahead... ]. Worked, leave it alone.
    // document.querySelector("#faster").addEventListener("click", function() {
    //     video.playbackRate /= 0.9;
    //     console.log("New speed is " + video.playbackRate.toFixed(5));
    // });


	// Trying this way from stackoverload because AG is still giving me errors
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate = Math.round(video.playbackRate * 0.9 * 100) / 100;
		console.log("New speed is " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate = Math.round(video.playbackRate / 0.9 * 100) / 100;
		console.log("New speed is " + video.playbackRate);
	});


	// // From AG: -3: Video not skipping ahead by the right amount and/or not restarting correctly.
    // document.querySelector("#skip").addEventListener("click", function() {
    //     if (video.currentTime + 10 > video.duration) {
    //         video.currentTime = 0;
    //     } else {
    //         video.currentTime += 10;
    //     }
    //     console.log("Current location: " + video.currentTime);
    // });

	// Trying this way from stackoverload because AG is still giving me errors
	document.querySelector("#skip").addEventListener("click", function() {
		const newTime = video.currentTime + 10;
		video.currentTime = newTime > video.duration ? 0 : newTime;
		console.log("Current location: " + video.currentTime);
	});

	// // From AG: -3: Video should be muted. Changed to this now
	// document.querySelector("#mute").addEventListener("click", function() {
    //     console.log("Mute Video");
    //     if (video.muted == true) {
    //         video.muted = false;
    //         document.querySelector("#mute").innerHTML = "Mute";
    //     } else {
    //         video.muted = true;
    //         document.querySelector("#mute").innerHTML = "Unmute";
    //     }
    // });

	// Trying this way from stackoverload because AG is still giving me errors
	document.querySelector("#mute").addEventListener("click", function() {
		video.muted = !video.muted;
		this.textContent = video.muted ? "Unmute" : "Mute";
		console.log(video.muted ? "Video muted" : "Video unmuted");
	});

    // document.querySelector("#slider").addEventListener("input", function() {
    //     video.volume = this.value / 100;
    //     document.querySelector("#volume").textContent = (video.volume * 100) + "%";
    // });

	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = parseFloat(this.value / 100).toFixed(2);
		document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
	});

    // document.querySelector("#vintage").addEventListener("click", function() {
    //     video.classList.add("oldSchool");
    // });

    // document.querySelector("#orig").addEventListener("click", function() {
    //     video.classList.remove("oldSchool");
    // });

	// Trying this was from Mozilla because AG is still giving me errors
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Old School style applied");
	});
	
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Original style restored");
	});
});