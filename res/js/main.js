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








ctx.fillStyle = "white";
ctx.fillRect(0,0,1280,720)


const gameLoop = () =>{
    console.log(keys);
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
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1280,720)
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