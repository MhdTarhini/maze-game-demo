function scrollDown() {
  const element = document.querySelector(".start-game-form");
  element.scrollIntoView();
}
const button = document.querySelector(".start-game-scroll");
button.addEventListener("click",scrollDown)
