console.log("is it working?");

var canvas = document.querySelector('canvas');
canvas_height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.height = canvas_height;
// canvas.height = 1000;

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
//     var y = Math.random() * canvas_height;
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
var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 50;
// var minRadius = 5;

var colorArray = [
    '#092140',
    '#024959',
    '#F2C777',
    '#F24738',
    '#BF2A2A'
];

window.addEventListener('mousemove', function(event) {
    // console.log(event);
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = canvas_height;

  init();
})

function Circle(x,y, dx, dy, rad) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.minRad = rad;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
      // c.strokeStyle = "blue";
      // var rand = (Math.random()*0xFFFFFF<<0).toString(16);
      c.fillStyle = this.color;
      c.fill();
      // c.stroke();
    }

    this.update = function() {
      if ((this.x + this.rad) > innerWidth || (this.x - this.rad < 0)) {
        this.dx = -this.dx;
      }
      if ((this.y + this.rad) > canvas_height || (this.y - this.rad < 0)) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      // interactivity
      if (mouse.x - this.x < 50 && mouse.x - this.x > -50
          && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.rad < maxRadius) {
                this.rad += 1
            }
      } else if (this.rad > this.minRad) {
        this.rad -= 1;
      }

      this.draw();
    }
}

var circleArray = [];
function init() {

  circleArray = [];
  for (var i = 0; i< 800; i++) {
      var rad = Math.random() * 3 + 1;
      var x = Math.random() * (window.innerWidth - rad * 2) + rad;
      var y = Math.random() * (canvas_height - rad * 2) + rad;
      var dx = (Math.random() - 0.5) * 1;
      var dy = (Math.random() - 0.5) * 1;

      circleArray.push(new Circle(x, y, dx, dy, rad));
  }
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, canvas_height);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  c.font = "70px Georgia";
  c.textAlign = "center";
  c.fillText("Praith Maniyan", innerWidth/2, canvas_height/2);
  //var img = document.getElementById("scream");
  //c.drawImage(img, 10, 10);

}

init();
animate();
