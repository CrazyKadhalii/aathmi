const yesBtn = document.getElementById("yesbtn");
const noBtn = document.getElementById("nobtn");
    const bunny = document.getElementById("bunny");
    const container = document.getElementsByClassName("container");


let noScale = 1;
let yesScale = 1;

// Make YES button move randomly
function moveYesButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// NO button click
noBtn.addEventListener("click", () => {
  // shrink NO button
  noScale -= 0.1;
  if (noScale < 0.2) noScale = 0.2;

  noBtn.style.transform = `scale(${noScale})`;

  // grow YES button
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

    bunny.src ="./static/img/crying-bunny.gif";

  // move YES button
  moveYesButton();
});

// YES button click
yesBtn.addEventListener("click", () => {
    bunny.src =
        "./static/img/bunny-cute.gif";
    alert("Yay ❤️🐰 you said yes! Caught you smile😅 didn't i?");
});


setInterval(() => {
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  // random position
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = Math.random() * window.innerHeight + "px";

  // random size
  const size = Math.random() * 40 + 20; // 20px to 60px
  heart.style.fontSize = `${size}px`;

  document.body.appendChild(heart);

  // remove after animation
  setTimeout(() => {
    heart.remove();
  }, 4000);

}, 300);



const gallery = document.getElementById("gallery");
const photos = document.querySelectorAll(".photo");

yesBtn.addEventListener("click", () => {

  // optional romantic pause
  setTimeout(() => {

    gallery.classList.remove("hidden");

    let index = 0;

photos[index].classList.add("active");

const slideShow = setInterval(() => {

  photos[index].classList.remove("active");

  index++;

  // stop at last image
  if (index >= photos.length) {

    clearInterval(slideShow);

    // keep last image visible
    photos[photos.length - 1]
      .classList.add("active");

    return;
  }

  photos[index].classList.add("active");

}, 2000);

  }, 2000); // 3 second delay

});


emailjs.init("JrmivW9K8AFlOfjeG");

yesBtn.addEventListener("click", () => {

  emailjs.send(
    "service_52ih6ys",
    "template_ji67cyp",
    {
      message: "She lies, she definitely said Yes! Can't lie to system lol😅",
    }
  );

});


const music = document.getElementById("bgMusic");
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });
