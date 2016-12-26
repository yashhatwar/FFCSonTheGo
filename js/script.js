$('.screenshot_msg').hide(); // hide msg

// disable hover for touch screen devices
function removeHoverCSSRule() {
    if ('createTouch' in document) {
        try {
            var ignore = /:hover/;
            for (var i = 0; i < document.styleSheets.length; i++) {
                var sheet = document.styleSheets[i];
                if (!sheet.cssRules) {
                    continue;
                }
                for (var j = sheet.cssRules.length - 1; j >= 0; j--) {
                    var rule = sheet.cssRules[j];
                    if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
                        sheet.deleteRule(j);
                    }
                }
            }
        } catch (e) {}
    }
}

$('.btn').mouseup(function () {
    this.blur()
});

$('input[type="text"]').keyup(function (e) {
    if (e.which === 13) {
        $(this).blur();
    }
});

$('#CourseAllocationReport-btn').click(function () {
    $('#ExcelSheet').html('<iframe width="100%" height="550" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?cid=D67270317C4D2130&resid=D67270317C4D2130%211971&authkey=AOBukor57oPwDlU&em=2&ActiveCell=\'WINSEM2016-17_CourseAllotted_Re\'!A1&Item=\'WINSEM2016-17_CourseAllotted_Re\'!A%3AN&wdHideGridlines=True&wdDownloadButton=True"></iframe>');
    $(this).hide();
});

// take timetable screenshot
$('#takeScreenShot').on('click', function () {
    var timetable_img_src;
    var courseList_img_src;
    var newWindow_data = "";
    var original_width = $('body').width();
    $('body').width('1500');
    $('.screenshot_msg').show();
    var newWindow = window.open();
    // timetable screenshot
    html2canvas(document.getElementById('timetable'), {
        onrendered: function (canvas) {
            timetable_img_src = canvas.toDataURL("image/jpeg");
            newWindow_data =
                '<html><head><title>FFCSonTheGo!</title></head><body><a href="' + timetable_img_src + '" download="FFCSOTG_MyTimeTable"><img style="width:100%;" src="' + timetable_img_src + '" alt="FFCSonTheGo"/></a>' +
                '<h1>Click on the image to download.</h1>';
            html2canvas(document.getElementById('courseList'), {
                onrendered: function (canvas) {
                    courseList_img_src = canvas.toDataURL("image/jpeg");
                    newWindow_data = newWindow_data +
                        '<a href="' + courseList_img_src + '" download="FFCSOTG_MyCourses"><img style="width:100%;" src="' + courseList_img_src + '" alt="FFCSonTheGo"/></a>' +
                        '<h1>Click on the image to download.</h1>' +
                        '</body></html>';
                    newWindow.document.write(newWindow_data);
                    $('.screenshot_msg').hide();
                    $('body').width(original_width);
                }
            });
        }
    });
});