let spiros = [];




function setup() {

  // put setup code here
  canvas = createCanvas(1200,800);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(55);
  canvas.position(300,0);

  spiros[0] = new Spiro(500, 205, 150, 0);
  spiros[1] = new Spiro(500, 165, 80, 0);
  spiros[2] = new Spiro(250, 170, 150, 0);
  // spiros[3] = new Spiro(500, 260, 5, 0);
  // spiros[4] = new Spiro(500, 280, 5, 0);


  //create sliders
  slider11 = createSlider(400, 600, 500);
  slider11.position(20, 20);
  slider12 = createSlider(0, 300, 100);
  slider12.position(20, 50);
  slider13 = createSlider(0, 300, 150);
  slider13.position(20, 80);

  slider21 = createSlider(400, 600, 500);
  slider21.position(20, 140);
  slider22 = createSlider(0, 300, 100);
  slider22.position(20, 170);
  slider23 = createSlider(0, 300, 150);
  slider23.position(20, 200);

  slider31 = createSlider(400, 600, 500);
  slider31.position(20, 260);
  slider32 = createSlider(0, 300, 180);
  slider32.position(20, 290);
  slider33 = createSlider(0, 300, 40);
  slider33.position(20, 320);





}


function draw() {
    translate(width/2,height/2);
    background(55);
    noFill();
    stroke(255);

    // spiros[0].initPhase ++;
    // spiros[1].initPhase --;
    // spiros[2].initPhase ++;

    spiros[0].r1 = slider11.value()
    spiros[0].r2 = slider12.value()
    spiros[0].d = slider13.value()
    spiros[1].r1 = slider21.value()
    spiros[1].r2 = slider22.value()
    spiros[1].d = slider23.value()
    spiros[2].r1 = slider31.value()
    spiros[2].r2 = slider32.value()
    spiros[2].d = slider33.value()




    for(let i = 0; i < spiros.length; i++){
        spiros[i].plot();
        spiros[i].draw();
    }

}



function gcd(a, b){
    if(b===0){
        return a
    }
    return gcd(b, a % b);
}
