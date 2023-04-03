let spiros = [];




function setup() {

  // put setup code here
  canvas = createCanvas(1200,800);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(55);
  canvas.position(300,0);

  spiros[0] = new Spiro(400, 0.43, 0.5, 0);
  spiros[1] = new Spiro(500, 165, 80, 0);
  spiros[2] = new Spiro(250, 170, 150, 0);
  // spiros[3] = new Spiro(500, 260, 5, 0);
  // spiros[4] = new Spiro(500, 280, 5, 0);


  //create sliders
  slider11 = createSlider(10, 600, 400, 1);
  slider11.position(20, 20);
  slider12 = createSlider(0, 600, 100,1);
  slider12.position(20, 50);
  slider13 = createSlider(0, 10, 5);
  slider13.position(20, 80);

  slider21 = createSlider(10, 600, 400, 1);
  slider21.position(20, 140);
  slider22 = createSlider(0, 600, 100,1);
  slider22.position(20, 170);
  slider23 = createSlider(0, 10, 5);
  slider23.position(20, 200);

  slider31 = createSlider(10, 600, 400, 1);
  slider31.position(20, 260);
  slider32 = createSlider(0, 600, 100,1);
  slider32.position(20, 290);
  slider33 = createSlider(0, 10, 5);
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



    spiros[0].R = slider11.value();
    spiros[0].r = slider12.value();
    spiros[0].l = slider13.value()/10;
    spiros[1].R = slider21.value();
    spiros[1].r = slider22.value();
    spiros[1].l = slider23.value()/10;
    spiros[2].R = slider31.value();
    spiros[2].r = slider32.value();
    spiros[2].l = slider33.value()/10;




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
