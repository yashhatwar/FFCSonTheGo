var courseTitleOption = {
    url: "http://vatz88.in/FFCSonTheGo/all_vit_courses.json",

    getValue: "title",

    list: {
        match: {
            enabled: true
        },
        onSelectItemEvent: function () {
            // TODO
            // inputCourseCode should change accordingly

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
    url: "http://vatz88.in/FFCSonTheGo/all_vit_courses.json",

    getValue: "code",

    list: {
        match: {
            enabled: true
        },
        maxNumberOfElements: 10,
        onSelectItemEvent: function () {
            // TODO
            // inputCourseTitle should change accordingly

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