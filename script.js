$( document ).ready(function() {

  $('body').on( "mousemove", colourChange);
  $('body').on( "click", colourReset);

});


colorsRGB = [ [113, 128, 168], [115, 128, 160], [139, 151, 165], [145, 152, 130], [145, 140, 108], [137, 114, 65], [102, 82, 57] ]
colorsCSS = []
bluePercent = 70;
function colourChange() {
  // new colours
  for (var i = 0; i < colorsRGB.length; i++) {
   colorsRGB[i][0] = colorsRGB[i][0] - 1;
   colorsRGB[i][1] = colorsRGB[i][1] - 1;
   colorsRGB[i][2] = colorsRGB[i][2] - 1;
   colorsCSS[i] = 'rgb(' + colorsRGB[i][0] + ', ' + colorsRGB[i][1] + ', ' + colorsRGB[i][2] + ')'
  }
  bluePercent = bluePercent + 0.2;
  // insert new colours
  colourInsert();
}

function colourReset() {
  colorsRGB = [ [113, 128, 168], [115, 128, 160], [139, 151, 165], [145, 152, 130], [145, 140, 108], [137, 114, 65], [102, 82, 57] ]
  bluePercent = 70;
  colourRGB();
  colourInsert();
}

function colourInsert() {
  $('body').css( "background", "linear-gradient(" + colorsCSS[0] + ", " + colorsCSS[1] + ", " + colorsCSS[2] + bluePercent + "%, " + colorsCSS[3] + ", " + colorsCSS[4] + ", " + colorsCSS[5] + ", " + colorsCSS[6] )
}

function colourRGB() {
  for (var i = 0; i < colorsRGB.length; i++) {
   colorsCSS[i] = 'rgb(' + colorsRGB[i][0] + ', ' + colorsRGB[i][1] + ', ' + colorsRGB[i][2] + ')'
  }
}

function showCoords(evt){
  console.log(
    "clientX value: " + evt.clientX + "\n" +
    "clientY value: " + evt.clientY + "\n"
  );
}
