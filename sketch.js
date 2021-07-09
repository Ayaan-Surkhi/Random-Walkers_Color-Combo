let walker1;
let walker2;
let walker3;

function setup() {
  createCanvas(innerWidth, 400);
  background(145, 204, 236);
  let x = width / 2-10;
  let y = height / 2;
  let radius = 3;  
  let x2 = width / 2;
  let y2 = height / 2;

  walker1 = new Walker(x, y, radius, 255, 0, 0);
  walker2 = new Walker(x2, y2, radius, 0, 0, 255); 
}

function draw() {  
    noStroke();
    textSize(16);
    fill(0, 0, 255);
    text('Blue', width/2-70, 20);
    fill(255);
    text('+', width/2-32, 20);  
    fill(255, 0, 0);
    text('Red', width/2-15, 20);
    fill(255);
    text('=', width/2+20, 20);
    fill(255, 0, 255);
    text('Purple', width/2+40, 20);

    walker1.draw();
    walker2.draw();

    setTimeout(() => {
    walker1.walk();
    walker2.walk();}, 1000)    

    if(walker3 !== undefined){
      walker3.draw();
      walker3.walk();
    }

    collision();
}

const collision = () => {
    const d = dist(walker1.x, walker1.y, walker2.x, walker2.y);

    if(d < walker2.radius){
      walker3 = new Walker(walker1.x, walker1.y, walker1.radius, 255, 0, 255);
    }
}
