function Crayon(epaisseur,couleur) {
  this.epaisseur=3;
  this.couleur="black";
  this.onClick = function (event) {
    this.setEpaisseur(event.currentTarget.dataset.epaisseur);
  }
  $("#fin").on("click",this.onClick.bind(this));
  $("#normal").on("click",this.onClick.bind(this));
  $("#epais").on("click",this.onClick.bind(this));


  this.getCouleur = function() {
    return this.couleur;
  };


}
Crayon.prototype.getEpaisseur = function () {
  return this.epaisseur;
};
Crayon.prototype.setEpaisseur = function(e) {
 this.epaisseur=e;
};

Crayon.prototype.setCouleur=function(c){
  this.couleur=c;
};

Crayon.prototype.setCouleurRGB=function(r,g,b) {
  this.couleur='rgb('+r+','+g+','+b+')';

};
