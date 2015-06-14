$( document ).ready(function() {
  setStars();
  $('body').on( "mousemove", colourChange);
  $('body').on( "click", colourReset);

});


colorsRGB = [ [113, 128, 168], [115, 128, 160], [139, 151, 165], [145, 152, 130], [145, 140, 108], [137, 114, 65], [102, 82, 57] ]
colorsCSS = []
setBluePercent = 70;
bluePercent = 70;
function colourChange() {
  // new colours
  documentHeight = document.body.clientHeight;
  mousePosition = event.clientY;
  mousePositionPercentage = mousePosition / documentHeight * 100;
  for (var i = 0; i < colorsRGB.length; i++) {
   colorsCSS[i] = 'rgb(' + Math.round(colorsRGB[i][0] - mousePositionPercentage) + ', ' + Math.round(colorsRGB[i][1] - mousePositionPercentage) + ', ' + Math.round(colorsRGB[i][2] - mousePositionPercentage) + ')'
  }
  bluePercent = setBluePercent + (setBluePercent * mousePositionPercentage / 100);
  // insert new colours
  colourInsert();
  updateStars();
}

function updateStars() {
  $('.star').css("opacity", (mousePositionPercentage / 100));
}

function colourReset() {
  colorsRGB = [ [113, 128, 168], [115, 128, 160], [139, 151, 165], [145, 152, 130], [145, 140, 108], [137, 114, 65], [102, 82, 57] ]
  for (var i = 0; i < colorsRGB.length; i++) {
    for (var p = 0; p < colorsRGB[i].length; p++) {
      var randomNumber = Math.floor(Math.random() * (5 + 5)) - 5;
      colorsRGB[i][p] = colorsRGB[i][p] + randomNumber;
    }
  }
  setBluePercent = Math.floor(Math.random() * (80 - 70)) + 70;
  colourRGB();
  colourInsert();
  setStars();
}

function colourInsert() {
  $('body').css( "background", "linear-gradient(" + colorsCSS[0] + ", " + colorsCSS[1] + ", " + colorsCSS[2] + bluePercent + "%, " + colorsCSS[3] + ", " + colorsCSS[4] + ", " + colorsCSS[5] + ", " + colorsCSS[6] )
}

function colourRGB() {
  for (var i = 0; i < colorsRGB.length; i++) {
   colorsCSS[i] = 'rgb(' + colorsRGB[i][0] + ', ' + colorsRGB[i][1] + ', ' + colorsRGB[i][2] + ')'
  }
}

function setStars() {
  var stars = $('.star')
  for (var i = 0; i < stars.length; i++) {
    var top = Math.floor(Math.random() * (100 - 0)) + 0;
    var left = Math.floor(Math.random() * (100 - 0)) + 0;
    console.log($('.star')[i])
    $($('.star')[i]).css("left", left + "%"); 
    $($('.star')[i]).css("top", top + "%"); 
  }
}
