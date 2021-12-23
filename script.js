var audio = document.querySelector('#aud');
var range = document.querySelector('#range');
var audioRange = document.querySelector('#changeAudioRange');
var VolumeNumber = document.querySelector('.volumeNumber');
var currentTime = document.querySelector('.currentTime');
var totalDuration = document.querySelector('.totalDuration');
var interval;
var img = document.querySelector('.img');
var playlist = document.querySelectorAll('.list-container li');
window.onload = function () {
  audioRange.setAttribute('max', `${audio.duration}`);
  VolumeNumber.textContent = `${audio.volume * 100}%`;
  totalDuration.textContent = audio.duration.toFixed(1);
};

function play () {
  audio.play();
}
function pause () {
  audio.pause();
}
function stop () {
  audio.load();
  audio.pause();
}
function mute () {
  audio.muted = audio.muted ? false : true;
}
function myRange () {
  audio.volume = range.value;
  VolumeNumber.textContent = `${audio.volume * 100}%`;
}
function changeAudioRange () {
  audio.currentTime = audioRange.valueAsNumber;
  play();
}
function resetAudio (src, audiosrc) {
  img.setAttribute('src', src);
  audio.setAttribute('src', audiosrc);
  // setTimeout(() => {
  //   audioRange.setAttribute('max', `${audio.duration}`);
  // }, 500);
  audioRange.value = 0;
  stop();
}
function fightback () {
  resetAudio('images/fightback.jpg', 'audio/fightback.mp3');
}
function grateful () {
  resetAudio('images/grateful.jpg', 'audio/grateful.mp3');
  audioRange.getAttribute('max');
}
function heart () {
  resetAudio('images/heart.jpg', 'audio/heart.mp3');
}
audio.addEventListener('timeupdate', function () {
  audioRange.value = audio.currentTime;
  currentTime.textContent = audio.currentTime.toFixed(1);
});

audio.ondurationchange = function () {
  audioRange.setAttribute('max', `${audio.duration}`);
  totalDuration.textContent = audio.duration.toFixed(1);
};

let siblings = [];
playlist.forEach(function (list) {
  let sibling = list.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
});
playlist.forEach(function (list) {
  list.addEventListener('click', function (e) {
    siblings.forEach(function (element) {
      if (element == e.target) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  });
});
