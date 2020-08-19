function PaletteCouleur(pen) {
  this.couleurChoisie='Black';
  this.crayon = pen;
  var couleurs = [{'idCouleur' : 'noir',
                  'className' : "paletteCouleurClass",
                   'valCouleur' : '#000000'},
                  {'idCouleur' : 'marron',
                    'className' : "paletteCouleurClass",
                   'valCouleur' : '#996633'},
                  {'idCouleur' : 'rouge',
                    'className' : "paletteCouleurClass",
                   'valCouleur' : '#ff0000'},
                  {'idCouleur' : 'rose',
                    'className' : "paletteCouleurClass",
                   'valCouleur' : '#ffc0cb'},
                   {'idCouleur' : 'jaune',
                    'className' : "paletteCouleurClass",
                    'valCouleur' : '#ffff00'},
                   {'idCouleur' : 'vert',
                    'className' : "paletteCouleurClass",
                    'valCouleur' : '#008000'},
                   {'idCouleur' : 'bleu',
                    'className' : "paletteCouleurClass",
                    'valCouleur' : '#0000ff'},
                    {'idCouleur' : 'bleuCiel',
                     'className' : "paletteCouleurClass",
                     'valCouleur' : '#24DBDE'},
                     {'idCouleur' : 'bleu',
                      'className' : "paletteCouleurClass",
                      'valCouleur' : '#9B41E7'}
                 ];
 this.setCouleurChoisi=function (couleur) {
   this.crayon.setCouleur(couleur);
 }
  var panneau = $('#couleurs');

  this.onClick = function (event) {

    this.setCouleurChoisi(event.currentTarget.dataset.couleur);
  }

    for (var i = 0; i < couleurs.length; i++) {

      var div = $("<div>");
      div.attr('id',couleurs[i].idCouleur);
      div.attr('class',couleurs[i].className);
      div.attr('data-couleur',couleurs[i].valCouleur).css("background-color" , couleurs[i].valCouleur);
      div.on("click",this.onClick.bind(this));
      panneau.append(div);
    }
}

PaletteCouleur.prototype.getCouleurChoisie = function () {
  return this.couleurChoisie;
}
