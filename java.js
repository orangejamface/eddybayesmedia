
function toggleSound() {
  let sound = document.getElementById("soundDesign");
  let video = document.getElementById("video");
  let music = document.getElementById("music");
  if (sound.style.display === "none") {
      sound.style.display = "block";
      video.style.display = "none";
      music.style.display = "none";
  } else {
    sound.style.display = "none";
      }
}

function toggleVideo() {
  let sound = document.getElementById("soundDesign");
  let video = document.getElementById("video");
  let music = document.getElementById("music");
  if (video.style.display === "none") {
      video.style.display = "block";
      sound.style.display = "none";
      music.style.display = "none";
  } else {
      video.style.display = "none";
      }
}

function toggleMusic() {
  let sound = document.getElementById("soundDesign");
  let video = document.getElementById("video");
  let music = document.getElementById("music");
  if (music.style.display === "none") {
      music.style.display = "block";
      video.style.display = "none";
      sound.style.display = "none";
  } else {
      music.style.display = "none";
      }
}