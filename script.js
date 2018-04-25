$(document).ready(function() {

  $("form").submit(function() {
    var data = $(this).serializeArray();
    $(".contacts").append("<div class='contact'><h1>"+data[0].value+" "+data[1].value+"</h1><h3>"+data[2].value+"</h3><a href='#'>Read Description...</a> <p>"+data[3].value+"</p> </div>");
    return false;
  });

  $(document).on("click", ".contact a", function() {
    $(this).hide();
    $(this).parent().children("p").show();
  });

});
