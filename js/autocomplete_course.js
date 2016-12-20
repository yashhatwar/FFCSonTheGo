var courseTitleOption = {
    url: "https://gist.githubusercontent.com/VaTz88/3695dc5c95feed4c94430887e32f9c73/raw/0f3daa273854a52cdb3beecf5505125e5489981d/all_vit_courses.json",

    getValue: "title",

    list: {
        match: {
            enabled: true
        },
        maxNumberOfElements: 8,
        onSelectItemEvent: function () {

        }
    },

    template: {
        type: "description",
        fields: {
            description: "code"
        }
    },

    theme: "round"
};

var courseCodeOption = {
    url: "https://gist.githubusercontent.com/VaTz88/3695dc5c95feed4c94430887e32f9c73/raw/0f3daa273854a52cdb3beecf5505125e5489981d/all_vit_courses.json",

    getValue: "code",

    list: {
        match: {
            enabled: true
        },
        maxNumberOfElements: 8,
        onSelectItemEvent: function () {

        }
    },

    template: {
        type: "description",
        fields: {
            description: "title"
        }
    },

    theme: "round"
};

$("#inputCourseTitle").easyAutocomplete(courseTitleOption);
$("#inputCourseCode").easyAutocomplete(courseCodeOption);