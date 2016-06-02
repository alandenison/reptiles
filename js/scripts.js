
$(document).ready(function() {

  $("#choices").submit(function(event){
    event.preventDefault();

    var result = $("#userChoice").val();
    if (result === "insect") {
      $('#insect').show();
      $('#turtle').hide();
      $('#snake').hide();

}
    else if (result === "turtle"){
    $('#turtle').show();
    $('#insect').hide();
    $('#snake').hide();


  }
    else  {
      $('#snake').show();
      $('#turtle').hide();
      $('#insect').hide();

    }
  });
  });
//
// var reptiles = $("#reptiles").val();
