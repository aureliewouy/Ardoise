
function Session() {
this.crayon = new Crayon();
this.palette = new PaletteCouleur(this.crayon);
this.dessin = new Dessin(this.crayon);
}

var session = new Session();
