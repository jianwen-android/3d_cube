window.onload = () => {
  var canvas = document.getElementById("game"); // Replace 'myCanvas' with your canvas ID
  var stream = canvas.captureStream(120); // 120 FPS
  var capturing = false;

  var MEDIA = new MediaRecorder(stream, {
    mimeType: "video/webm",
  });
  console.log("MEDIA init");

  recorder.addEventListener("dataavailable", exportVideo);

  // To start recording:
  MEDIA.start();
  console.log("MEDIA START");
  // To stop recording after 4s
  setTimeout(() => MEDIA.stop(), 4000);
  console.log("MEDIA STOP");

  MEDIA.ondataavailable = saveChunks;
  MEDIA.onstop = exportVideo;
};

function startCapturing

let chunks = [];

function saveChunks(e) {
  if (e.data.size > 0) {
    chunks.push(e.data);
  }
}

function exportVideo(e) {
  var videoData = [e.date];
  var blob = new Blob(videoData, { type: MEDIA.mimeType });
  const recordedVideoUrl = URL.createObjectURL(blob);

  var vid = document.getElementById("videoPlayer");
  vid.src = recordedVideoUrl;

  const a = document.createElement("a");
  a.href = recordedVideoUrl;
  a.download = "recorded-canvas.webm";
  console.log("saved video to rcorded-canvas.webm");
  a.click();
  URL.revokeObjectURL(recordedVideoUrl); // Clean up the object URL
}

// function createFileFromCurrentRecordedData() {
//   const file = new File(recordedData, "recording.webm", { type: "video/webm" });
// }

// MEDIA.onstop = createFileFromCurrentRecordedData();
