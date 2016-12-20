var slotOption = {
    data: ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "TA1", "TB1", "TC1", "TD1", "TE1", "TF1", "TG1", "TAA1", "TCC1",
        "A2", "B2", "C2", "D2", "E2", "F2", "G2", "TA2", "TB2", "TC2", "TD2", "TE2", "TF2", "TG2", "TAA2", "TBB2", "TCC2", "TDD2"
    ],
    list: {
        match: {
            enabled: true
        }
    },

    placeholder: "eg: L1+L2+L3",

    theme: "round"
};

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

    placeholder: "eg: Computer Networks",

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

    placeholder: "eg: ITE208",

    theme: "round"
};

$("#inputCourseTitle").easyAutocomplete(courseTitleOption);
$("#inputCourseCode").easyAutocomplete(courseCodeOption);
$("#inputSlotString").easyAutocomplete(slotOption);