// initialize instance
var enjoyhint_instance = new EnjoyHint({});

// config.
var enjoyhint_script_steps = [{
    "next .A1": '<p>Click to select</p>'
}, {
    "next .B1-tile": "<p>Quick selection</p>"
}, {
    "next #inputCourseCode": "<p>Search courses</p>"
}, {
    "click #takeScreenshotBtn": "<p>Get screenshot</p>",
    "skipButton": {
        text: "Done"
    }
}];

// set script config
enjoyhint_instance.set(enjoyhint_script_steps);

// run Enjoyhint script
enjoyhint_instance.run();