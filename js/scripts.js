$(document).ready(function() {
      $(".user form").submit(function(event) {
        var userName = $("input#fullname").val();
        var userAddress = $("input#address").val();
        var userEmail = $("input#email").val();
        var date = $("input#myDate").val();


        var carType = $('input[name=optradio]:checked').val();
        var carColour = $('input[name=carcolour]:checked').val();
        var carFuel = $('input[name=carFuel]:checked').val();

        $(".fullname").text(userName);
        $(".address").text(userAddress);
        $(".email").text(userEmail);
        $(".carType").text(carType);
        $(".carColour").text(carColour);
        $(".carFuel").text(carFuel);
        $(".date").text(date);

        $(".receipt").show();
        $(".user").hide();
        $(".panel-heading").css("background", "rgb(1, 117, 17)");

        event.preventDefault();

        });
    });
