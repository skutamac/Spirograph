class Spiro {

    constructor(R, r, l, initPhase){
        this.R = R;
        this.r = r;
        this.k;
        this.l = l;
        this.initPhase = initPhase;
        this.path = [];
        this.color = color(255,255,255);
    }

    plot(){
        this.k = this.r / this.R;
        let period = (this.r) / gcd(this.R, this.r);
        // console.log(this.R, this.k,this.R * this.k, gcd(this.R, this.R * this.k), (this.R * this.k) / gcd(this.R, this.R * this.k));
        let pen = createVector();
        this.path = [];

        // place pen at starting point
        // pen.x = (this.r1 - this.r2) * cos(this.initPhase) + this.d * cos(((this.r1-this.r2)/this.r2)*this.initPhase+this.initPhase)
        // pen.y = (this.r1 - this.r2) * sin(this.initPhase) - this.d * sin(((this.r1-this.r2)/this.r2)*this.initPhase+this.initPhase)


        for (let phase = 1; phase < 360 * period+2; phase ++){
            pen.x = this.R * (((1-this.k)*cos(phase))+(this.k * this.l * cos(((1-this.k) / this.k)*phase)))
            pen.y = this.R * (((1-this.k)*sin(phase))+(this.k * this.l * sin(((1-this.k) / this.k)*phase)))
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
