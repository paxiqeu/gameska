import { Champ } from "./champs/Champ.js";
import { Background } from "./ui/basic-ui.js";
/** 
const jinx= new Champ("Arcade Jinx", 50, 20, 5);
console.log(jinx);
console.log(jinx.name);
jinx.attack();

const jax= new Champ("Arcade Jax", 50, 20, 5);
console.log(jax);
console.log(jax.name);
jax.attack();
*/

const background = new Background();
console.log(background)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const keys = {};

document.addEventListener("keydown", (e) =>{
    keys[e.code] = true;
});

document.addEventListener("keyup", (e) =>{
    keys[e.code] = false;
});




/*
//[] - pole
//{} - objekt
// index          0    1 2    3  
const array = ["Radek",4,5,"Radim"];
const teemo ={
    height: 100,
    width:50,
    hp: 940,
    mana: 255
 }
*/


const gameLoop = () =>{
    //console.log(keys);
    //resize canvas
    resizeCanvas();

    //clear canvas
    clearCanvas()
   
    //update
    update()

    //render
    getFps()

    //fps
    window.requestAnimationFrame(gameLoop);
}

const resizeCanvas= () =>{
    canvas.width = 1280;
    canvas.height= 720;
}

const clearCanvas = () => {
    background.draw(ctx);
}

const update = () => {

}

const render = () => {

}

const getFps = () => {

}

window.onload = () => {
    window.requestAnimationFrame(gameLoop);

}

