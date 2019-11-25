var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');
ctx.beginPath();//début du chemin
ctx.moveTo(200,50);//le tracé part du point 200,50
ctx.lineTo(300,150);//un segment est ajouté vers 300,150
ctx.lineTo(100,150);//un segment est ajouté vers 100,150
ctx.lineTo(200,50);//un segment est ajouté vers 200, 50
ctx.closePath();//fermeture du chemin
ctx.fillStyle = 'brown'//Définition de la couleur de remplissage du toit
ctx.fill();//Remplissage du dernier chemin tracé
ctx.fillStyle = 'lightBlue'//Définition de la couleur de remplissage
ctx.fillRect(100,150,200,200);//défini et rempli un carré
ctx.fillStyle = 'grey'//Définition de la couleur de remplissage des fenêtres et de la porte
ctx.fillRect(120,170,50,50);//défini et rempli un carré
ctx.fillRect(230,170,50,50);//défini et rempli un carré
ctx.fillRect(175,270,50,80);//défini et rempli un rectangle
