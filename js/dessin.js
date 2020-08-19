function Dessin(pen) {
  this.crayon = pen;
  this.canvas = document.getElementById("monCanvas");
  this.context = this.canvas.getContext('2d');
  this.context.font="20px Arial";
  this.currentLocation = null;
  this.isDrawing       = false;
  this.eraserAll = document.getElementById("effacertout");
  this.eraserPart = document.getElementById("gomme");
  this.canvas2 = document.getElementById("canvas2");
  this.context2 = this.canvas2.getContext('2d');
  this.context2.fillStyle = 'black';
  this.context2.fillRect(0,0, this.canvas.width, this.canvas.height);

  this.palettesDiv = document.getElementsByClassName("paletteCouleurClass");

  this.getMousePosition = function (event) {

    var rect = this.canvas.getBoundingClientRect();

    var location = { x : event.clientX-rect.left,

                     y : event.clientY-rect.top };

    return location;
  };

  this.mouseDown = function(event) {

    this.isDrawing = true;

    this.currentLocation = this.getMousePosition(event);
  }

  this.mouseLeave = function(){

    this.isDrawing = false;

  };

  this.mouseMove = function (event) {


    var local = this.getMousePosition(event);
    if (this.isDrawing == true) {
      this.context.strokeStyle =this.crayon.getCouleur();
      this.context.lineWidth = this.crayon.getEpaisseur();
      this.context.beginPath();
      this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
      this.context.lineTo(local.x,local.y);

      this.context.closePath();
      this.context.stroke();
      this.currentLocation = local;
    }
  };

  this.mouseUp = function (event) {
    this.isDrawing = false;

  };

  this.eraseAll = function (event) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  this.erasePart = function (event) {
   this.crayon.setCouleurRGB(255,255,255);
  }

  this.couleurPal = function (event) {

    this.couleurChoose = this.crayon.getCouleur();
    this.context2.fillStyle = ""+this.couleurChoose+"";
    this.context2.fillRect(0,0, this.canvas.width, this.canvas.height);
    
  };

  this.canvas.addEventListener("mousedown",this.mouseDown.bind(this));
  this.canvas.addEventListener("mouseup",this.mouseUp.bind(this));
  this.canvas.addEventListener("mousemove",this.mouseMove.bind(this));
  this.canvas.addEventListener("mouseleave",this.mouseLeave.bind(this));
  this.eraserAll.addEventListener("click", this.eraseAll.bind(this));
  this.eraserPart.addEventListener("click", this.erasePart.bind(this));

  for (var i = 0; i < this.palettesDiv.length; i++) {
    this.palettesDiv[i].addEventListener("click", this.couleurPal.bind(this));
  }


}
