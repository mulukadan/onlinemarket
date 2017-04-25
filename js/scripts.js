$(document).ready(function() {
      $(".user form").submit(function(event) {
        var userName = $("input#fullname").val();
        var userAddress = $("input#address").val();


        $(".fullname").text(userName);
        $(".address").text(userAddress);

        $(".receipt").show();
        $(".user").hide();

        event.preventDefault();
      });
    });
