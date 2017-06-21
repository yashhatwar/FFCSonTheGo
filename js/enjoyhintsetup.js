// initialize instance
var enjoyhint_instance = new EnjoyHint({});

// config.
var enjoyhint_script_steps = [{
    "next #inputCourseCode": "<p>Search courses</p>"
}, {
    "next #toggleClickToSelect": "<p>Quick Visualization</p>"
}, {
    "click #takeScreenshotBtn": "<p>Get Screenshot</p>",
    "skipButton": {
        text: "Done"
    }
}];

$(function () {
    // (function (cname, cvalue, exdays) {
    //     // check if cookie is set
    //     var cookieToCheck = cname + "=" + cvalue;
    //     var cookies = decodeURIComponent(document.cookie);
    //     console.log(cookies);
    //     console.log(cookies.indexOf(cookieToCheck));
    //     if (cookies.indexOf(cookieToCheck) !== -1) {
    //         return;
    //     }
    //     // if cookie is not set
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //     var expires = "expires=" + d.toUTCString();
    //     document.cookie = cname + "=" + cvalue + ";" + expires;
    //     // show tour
    //     enjoyhint_instance.set(enjoyhint_script_steps);
    //     enjoyhint_instance.run();
    // })("tourTaken", "yes", 1);

    enjoyhint_instance.set(enjoyhint_script_steps);
    enjoyhint_instance.run();
});