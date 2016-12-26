//initialize instance
var enjoyhint_instance = new EnjoyHint({});

//config.
var enjoyhint_script_steps = [{
    "next .A1": '<p>Click slots to select</p>'
}, {
    "next .B1-tile": "<p>Use quick selection to select all at once</p>"
}, {
    "next #inputCourseCode": "<p>Search and add courses to timetable</p>"
}, {
    "next #takeScreenShot": "<p>Take timetable screenshot to share with friends</p>"
}, {
    "click #fb-like-share": '<p>Like and Share</p>'
}];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
enjoyhint_instance.run();