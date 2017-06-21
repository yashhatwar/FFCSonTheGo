$.getScript("https://tlk.io/embed.js");

$(function () {
    $("#minim-chat").click(function () {
        // $("#minim-chat").css("display", "none");
        // $("#maxi-chat").css("display", "block");
        $("#minim-chat").hide();
        $("#maxi-chat").show();
        // $("#chatbox").css("margin", "0 0 -61.5vh 0");
        $("#chatbox").removeClass("open");
    });

    $("#maxi-chat").click(function () {
        // $("#minim-chat").css("display", "block");
        // $("#maxi-chat").css("display", "none");
        $("#maxi-chat").hide();
        $("#minim-chat").show();
        // $("#chatbox").css("margin", "0");
        $("#chatbox").addClass("open");
    });
});