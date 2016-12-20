var courseTitleOption = {
    url: "http://vatz88.in/FFCSonTheGo/all_vit_courses.json",

    getValue: "title",

    list: {
        match: {
            enabled: true
        },
        onSelectItemEvent: function () {
            var code = $("#inputCourseTitle").getSelectedItemData().code;
            $("#inputCourseCode").val(code).trigger("change");
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
            var title = $("#inputCourseCode").getSelectedItemData().title;
            $("#inputCourseTitle").val(title).trigger("change");
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