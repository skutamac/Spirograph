let spiros = [];
let spiro2;




function setup() {

  // put setup code here
  createCanvas(1200,800);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(55);

  spiros[0] = new Spiro(500, 205, 150, 0);
  spiros[1] = new Spiro(500, 165, 80, 0);
  spiros[2] = new Spiro(250, 170, 150, 0);
  // spiros[3] = new Spiro(500, 260, 5, 0);
  // spiros[4] = new Spiro(500, 280, 5, 0);



}


function draw() {
    translate(width/2,height/2);
    background(55);
    noFill();
    stroke(255);

    // spiros[0].initPhase ++;
    // spiros[1].initPhase --;
    // spiros[2].initPhase ++;

    for(let i = 0; i < spiros.length; i++){
        spiros[i].plot();
        spiros[i].draw();
    }

}





class Spiro {

    constructor(r1, r2, d, initPhase){
        this.r1 = r1;
        this.r2 = r2;
        this.d = d;
        this.initPhase = initPhase;
        this.path = [];
        this.color = color(255,255,255);



    }

    plot(){
        let period = this.r2 / gcd(this.r1, this.r2);
        let pen = createVector();
        this.path = [];

        // place pen at starting point
        // pen.x = (this.r1 - this.r2) * cos(this.initPhase) + this.d * cos(((this.r1-this.r2)/this.r2)*this.initPhase+this.initPhase)
        // pen.y = (this.r1 - this.r2) * sin(this.initPhase) - this.d * sin(((this.r1-this.r2)/this.r2)*this.initPhase+this.initPhase)


        for (let phase = 1; phase < 360 * period+2; phase ++){
            pen.x = (this.r1 - this.r2) * cos(phase+this.initPhase) + this.d * cos(((this.r1-this.r2)/this.r2)*phase+this.initPhase)
            pen.y = (this.r1 - this.r2) * sin(phase+this.initPhase) - this.d * sin(((this.r1-this.r2)/this.r2)*phase+this.initPhase)
            this.path.push(pen.copy());

        }
    }

    draw(){
        stroke(this.color);
        for (let i = 1; i < this.path.length; i++){
            line(this.path[i-1].x, this.path[i-1].y, this.path[i].x, this.path[i].y);
        }
        

    }

    setColor(r, b, g){
        this.color = color(r, b, g);
    }

}













function gcd(a, b){
    if(b===0){
        return a
    }
    return gcd(b, a % b);
}
