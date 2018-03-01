console.log("is it working?");

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(400, 200, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(400, 300, 100, 100);
//
//
// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// var count = 0;
// while (count < 5) {
//   for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     var rad = Math.floor(Math.random()*(40-30+1)+30);
//     c.arc(x, y, rad, 0, Math.PI * 2, false);
//     c.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//     c.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//     c.fill();
//     c.stroke();
//   }
//   count++;
// }


function Circle(x,y, dx, dy, rad) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad

    this.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
      c.strokeStyle = "blue";
      // var rand = (Math.random()*0xFFFFFF<<0).toString(16);
      c.fillStyle = 'rgba(255,0,0,0.5)';
      c.fill();
      c.stroke();
    }

    this.update = function() {
      if ((this.x + this.rad) > innerWidth || (this.x - this.rad < 0)) {
        this.dx = -this.dx;
      }
      if ((this.y + this.rad) > innerHeight || (this.y - this.rad < 0)) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }
}

var circleArray = [];
for (var i = 0; i< 30; i++) {
    var rad = 50;
    var x = Math.random() * (window.innerWidth - rad * 2) + rad;
    var y = Math.random() * (window.innerHeight - rad * 2) + rad;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;

    circleArray.push(new Circle(x, y, dx, dy, rad));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
