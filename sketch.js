// save this file as sketch.js
// Sketch One
let s = function (p) { // p could be any variable name

    let angle = 0;
    let h = 0;

    p.setup = function () {
        p.createCanvas(300, 300);


        p.background(255);
    };

    p.draw = function () {
        p.background(255);

        p.translate(p.width / 2, p.height / 2);
        //p.rectMode(CENTER);

        let offset = 0;

        for (let y = (0 - p.height / 2); y < p.height; y += 50) {
            for (let x = (0 - p.width / 2); x < p.width; x += 50) {

                let a = angle + offset;
                h = p.map(p.sin(a), -1, 1, 0, 100);

                p.rect(x, y, 2, h);


                offset += 0.1;

                p.stroke(0, 200, 10, h);
                p.fill(h);
            }
        }

        angle += 0.1;

    }
}

let myp5 = new p5(s, "c1");



// Sketch two
let t = function (p) { // p could be any variable name

    let angle = 0;
    let h = 0;



    p.setup = function () {
        p.createCanvas(300, 300);
        p.background(0);
    };

    p.draw = function () {


        p.translate(p.width / 2, p.height / 2);
        //p.rectMode(CENTER);

        h = p.map(p.sin(angle), -1, 1, 1, 300);

        //strokeWeight(h);
        //stroke(h);
        p.fill(h);

        angle += 0.009;



        //rect(0, 0, 20, h);
        p.ellipse(h, -h, h);
        p.ellipse(h, h, h);
        p.ellipse(-h, h, h);
        p.ellipse(-h, -h, h);

    }
}

let myp5_2 = new p5(t, "c2");

let x = function (p) {
    let drops = [];

    p.setup = function () {
        p.createCanvas(500, 500);
        //canvas.style('z-index', '-1');
        for (var i = 0; i < 500; i++) {
            drops[i] = new Drop();
        }
    }

    p.draw = function () {
        p.background(255);
        for (var i = 0; i < drops.length; i++) {
            drops[i].fall();
            drops[i].show();
        }
    }

}

let myp5_3 = new p5(x, "c3");

function Drop () {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = p.random(0, 2);
    this.len = p.map(this.z, 0, 20, 10, 20);
    this.yspeed = p.map(this.z, 0, 2, 1, 20);
  
    this.fall = function() {
      this.y = this.y + this.yspeed;
      var grav = p.map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + grav;
  
      if (this.y > height) {
        this.y = p.random(-200, -100);
        this.yspeed = p.map(this.z, 0, 20, 4, 10);
      }
    };
  
    this.show = function() {
      var thick = map(this.z, 0, 20, 1, 3);
      strokeWeight(thick);
      stroke(138, 43, 226);
      line(this.x, this.y, this.x, this.y + this.len);
    };
  }