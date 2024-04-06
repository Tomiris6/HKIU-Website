const messages = [
  "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
  "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
  "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
];

function displayRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  const promotionBlock = document.getElementById('randomMessage');

  promotionBlock.innerHTML = randomMessage;
}

function rotateMessages() {
  setInterval(() => {
    displayRandomMessage();
  }, 3000);
}

const videos = ["https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4", "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4"];

function switchVideo(videos) {
  var video = document.getElementById("video");

  var currentIndex = 0;

  video.src = videos[currentIndex];

  video.addEventListener("ended", function () {
    if (currentIndex === videos.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    video.src = videos[currentIndex];
  });
}

window.addEventListener("DOMContentLoaded", function () {
  displayRandomMessage();
  rotateMessages();
  switchVideo(videos);
});

  