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

// take timetable screenshot
$('#takeScreenShot').on('click', function () {
    var original_width = $('body').width();
    $('body').width('1500');
    html2canvas(document.getElementById('timetable'), {
        onrendered: function (canvas) {
            var img_src = canvas.toDataURL("image/jpeg");
            // open new window with image
            var data =
                '<html><head><title>FFCSonTheGo!</title></head><body><a href="' + img_src + '" download="FFCSonTheGo"><img style="width:100%;" src="' + img_src + '" alt="FFCSonTheGo"/></a>' +
                '<h1>Click on the image to download.</h1>' +
                '</body></html>';
            var newWindow = window.open();
            newWindow.document.write(data);
            $('body').width(original_width);
        }
    });
});