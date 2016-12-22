var correspondingSlots = [];
correspondingUniqueSlots = [];

function getSlots(searchCode) {
    $.each(correspondingSlots, function (key, value) {
        if (correspondingSlots[key].CODE == searchCode) {
            if ($.inArray(value.SLOT, correspondingUniqueSlots) == -1) correspondingUniqueSlots.push(value.SLOT);
        }
    });
    // append slots to add course panel
    // addSlotSelectionButtons function called from colorChange.js
    addSlotSelectionButtons(correspondingUniqueSlots);
    correspondingUniqueSlots = [];

}

var slotOption = {
    url: "http://vatz88.in/FFCSonTheGo/data/unique_slots.json",

    getValue: "SLOT",

    list: {
        match: {
            enabled: true
        }
    },

    placeholder: "eg: L1+L2+L3",

    theme: "round"
};

var courseTitleOption = {
    url: "http://vatz88.in/FFCSonTheGo/data/all_vit_courses.json",

    getValue: "title",

    list: {
        match: {
            enabled: true
        },
        onSelectItemEvent: function () {
            var code = $("#inputCourseTitle").getSelectedItemData().code;
            $("#inputCourseCode").val(code).trigger("change");
            getSlots(code);
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
    url: "http://vatz88.in/FFCSonTheGo/data/all_vit_courses.json",

    getValue: "code",

    list: {
        match: {
            enabled: true
        },
        maxNumberOfElements: 10,
        onSelectItemEvent: function () {
            var title = $("#inputCourseCode").getSelectedItemData().title;
            $("#inputCourseTitle").val(title).trigger("change");
            var searchCode = $("#inputCourseCode").getSelectedItemData().code;
            getSlots(searchCode);
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

$.getJSON("http://vatz88.in/FFCSonTheGo/data/course_and_slot.json", function (result) {
    correspondingSlots = result;
});