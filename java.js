

// function toggle(IDS) {
//     var sel = document.getElementById('pg').getElementsByTagName('div');
//     for (var i=0; i<sel.length; i++) { 
//       if (sel[i].id != IDS) { sel[i].style.display = 'none'; }
//     }
//     var status = document.getElementById(IDS).style.display;
//     if (status == 'block') { document.getElementById(IDS).style.display = 'none'; }
//                       else { document.getElementById(IDS).style.display = 'block'; }
  
//     return false;
//   }

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