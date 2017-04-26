$(document).ready(function() {
  $("form#beerService").submit(function(event) {
    event.preventDefault();
    var beerSelection = $("#beerType").val();
    var beerPackaging = $("input:radio[name=packaging]:checked").val();
    var ageVerification = $("#born").val();
    console.log(beerSelection, beerPackaging, ageVerification);
  });
});
