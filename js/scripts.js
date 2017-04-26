//BUSINESS LOGIC
var legalAge = 2017 - 21;
var orderSuccess = ageVerification >= legalAge;
// orderSuccess is not gonna work like it is, need check IF greater than legalAge orderSuccess will return true, else false

//INTERFACE LOGIC
$(document).ready(function() {
  $("form#beerService").submit(function(event) {
    event.preventDefault();
    var beerSelection = $("#beerType").val();
    var beerPackaging = $("input:radio[name=packaging]:checked").val();
    var ageVerification = parseInt($("#born").val());
    console.log(beerSelection, beerPackaging, ageVerification);
  });
});
