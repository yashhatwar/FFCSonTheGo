function changeColor() {
    var divBlock = document.getElementById('mySlot');
    if (divBlock.backgroundColor.match("#FFFFCC")) {
        divBlock.backgroundColor = "#CCFF33";
    } else {
        divBlock.backgroundColor = "#FFFFCC";
    }
}

$(".TimetableContent").click(function () {
   $(this).toggleClass("highlight");
});