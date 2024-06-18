// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cameraFeed = document.getElementById("cameraFeed");
    const captureButton = document.getElementById("captureButton");
    const outputCanvas = document.getElementById("outputCanvas");
    const outputVideo = document.getElementById("outputVideo");
    const trimButton = document.getElementById("trimButton");
    const canvasContext = outputCanvas.getContext("2d");

    // Get access to the camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            cameraFeed.srcObject = stream;
            cameraFeed.play();
        });
    }

    // Capture the current frame from the video feed
    captureButton.addEventListener("click", () => {
        outputCanvas.width = cameraFeed.videoWidth;
        outputCanvas.height = cameraFeed.videoHeight;
        canvasContext.drawImage(cameraFeed, 0, 0);
    });

    // Placeholder for trimming functionality
    trimButton.addEventListener("click", () => {
        alert("Trimming functionality to be implemented.");
    });
});
