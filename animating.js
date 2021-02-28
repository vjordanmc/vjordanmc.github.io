const container = document.querySelector(".container");
const animationSwitch = document.getElementsByClassName("slider")[0];
var key = 0;

animationSwitch.click();

function stopAnimation() {
  if(key==0){
    key = 1;
    animateBlocks()
  }else{
    key = 0;
  }
}

for (let i = 0; i < 32; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  container.appendChild(blocks);
}

function animateBlocks() {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-800, 800);
    },
    translateY: function () {
      return anime.random(-400, 400);
    },
    scale: function () {
      return anime.random(1, 5);
    },
    rotateZ: function () {
      return anime.random(-30, 30);
    },
    easing: "easeOutElastic(0,5)",
    duration: 5000,
    delay: 0,
    complete: function () {
      if (key == 1) {
        return animateBlocks();
      } else {
        return "";
      }
    },
  });
}
animateBlocks();
