let turnNumber = 0;
let className = ["group-first", "group-second", "group-third"];
let subGroupBackground = ["icon-first", "icon-second", "icon-third"];
let subGroupName = ["Launchpad 1", "Launchpad 2", "Launchpad 3"];
let subGroupImage = ["GameFi.svg", "Seedify.svg", "TrustSwap.svg"];
function sliderBtn(turn) {
  console.log(turn);
  turnNumber += turn;
  if (turnNumber == -1) {
    turnNumber = 2;
  } else if (turnNumber == 3) {
    turnNumber = 0;
  }

  for (let i = 0; i < 3; i++) {
    divTag = document.getElementById(className[i]);
    if (i != turnNumber) {
      divTag.classList.remove("active");
      document
      .getElementById("preview-group-icon-background")
      .classList.remove(subGroupBackground[i]);
    } else {
      divTag.classList.add("active");
      document.getElementById("preview-group-title").innerHTML =
      subGroupName[i];
      document.getElementById("preview-group-icon-image").src =
      "./images/" + subGroupImage[i];
      document
      .getElementById("preview-group-icon-background")
      .classList.add(subGroupBackground[i]);
    }
  }
}

function launchpad(turn) {
  turnNumber = turn
  for (let i = 0; i < 3; i++) {
    divTag = document.getElementById(className[i]);
    if (i != turnNumber) {
      divTag.classList.remove("active");
      document
      .getElementById("preview-group-icon-background")
      .classList.remove(subGroupBackground[i]);
    } else {
      divTag.classList.add("active");
      document.getElementById("preview-group-title").innerHTML =
      subGroupName[i];
      document.getElementById("preview-group-icon-image").src =
      "./images/" + subGroupImage[i];
      document
      .getElementById("preview-group-icon-background")
      .classList.add(subGroupBackground[i]);
    }
  }
}


var count = $(".box-container").find("li").length;
var x = 3;
var y = count % x;
if (y == 1) {
  $(".box-container").append(
    '<li class="before-none"><div></div></li> <li class="before-none"><div></div></li>'
  );
}
if (y == 2) {
  $(".box-container").append('<li class="before-none"><div></div></li>');
}


// let videoState = "pause"
// function video(){
//   if(window.innerWidth>=1200){
//     var introVideo = document.getElementById('introVideo')
//     if(videoState == "pause"){
//       introVideo.play()
//       videoState = "play"
//       document.getElementById('playBtn').style.display = "none"
//       document.getElementById('pauseBtn').style.display = "block"
//     }
//     else if(videoState = "play"){
//       introVideo.pause()
//       videoState = "pause"
//       document.getElementById('pauseBtn').style.display = "none"
//       document.getElementById('playBtn').style.display = "block"
//     }
//   }
// }

$(document).ready(function (e) {

  let _id = sessionStorage.getItem('tagName');

  if (_id !== null) {

    if (window.innerWidth < 1200) {
      var position = $(`${_id}`).offset().top - 80;
    }
    else {
      var position = $(`${_id}`).offset().top + 17;
    }

    gsap.to(window, { duration: 0.05, scrollTo: position });
  }

  sessionStorage.removeItem('tagName')

});

const formatTime = (time) => time < 10 ? "0" + time : time;