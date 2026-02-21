const canvas = document.getElementById("game"); // Replace 'myCanvas' with your canvas ID
const stream = canvas.captureStream(120); // 120 FPS

// if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9")) {
//   const MEDIA = new MediaRecorder(stream, {
//     mimeType: "video/webm;codecs=vp9",
//   });
//   console.log("MEDIA init");
// }

const MEDIA = new MediaRecorder(stream, {
  mimeType: "video/webm;codecs=opus,vp8",
});
console.log("MEDIA init");

let chunks = [];
MEDIA.ondataavailable = (e) => {
  if (e.data.size > 0) {
    chunks.push(e.data);
  }
};

function loadChunksIntoFile() {
  const blob = new Blob(chunks, { type: "video/webm" });
  const recordedVideoUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = recordedVideoUrl;
  a.download = "recorded-canvas.webm";
  console.log("saved video to rcorded-canvas.webm");
  a.click();
  URL.revokeObjectURL(recordedVideoUrl); // Clean up the object URL
}

MEDIA.onstop = loadChunksIntoFile();

// To start recording:
MEDIA.start();
console.log("MEDIA START");
// To stop recording after some time 4
setTimeout(() => {
  MEDIA.stop();
}, 4000);
console.log("MEDIA STOP");

// function createFileFromCurrentRecordedData() {
//   const file = new File(recordedData, "recording.webm", { type: "video/webm" });
// }

// MEDIA.onstop = createFileFromCurrentRecordedData();
