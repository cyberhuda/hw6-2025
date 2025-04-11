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

    // Initialize volume display, tried again
    document.querySelector("#volume").textContent = (video.volume * 100) + "%";

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        document.querySelector("#volume").textContent = (video.volume * 100) + "%"; // Update volume display
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

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