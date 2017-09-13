$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#person1").val().toUpperCase();

    $(".person1").text(userInput);


    event.preventDefault();
  });
});
