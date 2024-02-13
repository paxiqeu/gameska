import { Champ } from "./champs/Champ.js";
import { Background } from "./ui/basic-ui.js";
import { Player } from "./champs/Player.js";



const background = new Background();
const jinx = new Champ("Jinx", 12, 25, 10, 3);
const player = new Player();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

const gameLoop = () => {
  //resize canvas
  resizeCanvas();

  //clear canvas
  clearCanvas();

  //update
  update();

  //render
  render();

  //fps
  getFps();
  window.requestAnimationFrame(gameLoop);
};

const resizeCanvas = () => {
  canvas.width = 1280;
  canvas.height = 720;
};

const clearCanvas = () => {
  background.draw(ctx);
};

const update = () => {
  jinx.update();
  player.update(keys,ctx);
};

const render = () => {
  jinx.draw(ctx);
  player.draw(ctx);
};

const getFps = () => {};

window.onload = () => {
  window.requestAnimationFrame(gameLoop);
};