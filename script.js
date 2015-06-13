$( document ).ready(function() {

  $('body').on( "click", colourChange);

});


colors = ['#7180A8', '#7380A0', '#8B97A5', '#919882','#918C6C', '#897241','#665239']
colorsRGB = [ [113, 128, 168], [115, 128, 160], [139, 151, 165], [145, 152, 130], [145, 140, 108], [137, 114, 65], [102, 82, 57] ]
colorsCSS = []
function colourChange() {
  // new colours
  for (var i = 0; i < colors.length; i++) {
   console.log(colors[i])
  }
  for (var i = 0; i < colorsRGB.length; i++) {
   colorsRGB[i][0] ++;
   colorsRGB[i][1] ++;
   colorsRGB[i][2] ++;
   colorsCSS[i] = 'rgb(' + colorsRGB[i][0] + ', ' + colorsRGB[i][1] + ', ' + colorsRGB[i][2] + ')'
   console.log(colorsCSS)
  }
  // insert new colours
  console.log( $('body').css( "background" ) )
  $('body').css( "background", "linear-gradient(" + colorsRGB[0] + ", " + colors[1] + ", " + colors[2] + " 70%, " + colors[3] + ", " + colors[4] + ", " + colors[5] + ", " + colors[6] )
}

