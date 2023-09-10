// Setting to auto play and pause video depending on whether or not AR found the target
const vid = document.querySelector("#video-overlay");
const img_target = document.querySelector("#target-image");
const sceneEl = document.querySelector('a-scene');

sceneEl.addEventListener("arReady", (event) => {
    console.log("MindAR is ready");
    vid.pause();
});

sceneEl.addEventListener("arError", (event) => {
    console.log("MindAR failed to start")
    vid.stop();
});

// detect target found
img_target.addEventListener("targetFound", event => {
    console.log("target found");
    vid.play();
});
  
// detect target lost
img_target.addEventListener("targetLost", event => {
    console.log("target lost");
    vid.pause();
});