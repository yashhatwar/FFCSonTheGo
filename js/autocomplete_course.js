/**
 * Add slot selection buttons from array of slots
 * function is called in autocomplete_course.js
 */

function addSlotSelectionButtons(type, slot, faculty, credits, venue) {
    var btnValue = '';
    var btnText = '';
    btnText = slot + '<strong> | </strong>' + faculty + '<strong> | </strong>' + type + '<strong> | </strong>' + venue;
    btnValue = slot + '|' + faculty + '|' + type + '|' + venue + '|' + credits;

    var insert = '';

    insert =
        '<div class="col-xs-12 col-sm-6 col-md-4">' +
        '<button class="btn btn-default btn-block" type="button" value="' + btnValue + '" onclick="slotSelectionBtnClicked(this.value)">' + btnText + '</button>' +
        '</div>';
    $('#insertSlotBtn').append(insert);
}

// append input fields according to slotBtn click

function slotSelectionBtnClicked(value) {
    value = value.split('|');
    $('#inputSlotString').val(value[0]);
    $('#inputFaculty').val(value[1]);
    $('#inputCourseCredits').val(value[4]);
}

function getSlots(searchCode) {
    $('#insertSlotBtn').html('');
    $.each(all_data, function (key, value) {
        if (value.CODE == searchCode) {
            // append slots to add course panel
            addSlotSelectionButtons(value.TYPE, value.SLOT, value.FACULTY, value.CREDITS.toString(), value.VENUE);
        }
    });
}

// autocomplete options

var courseCodeOption = {
    data: unique_courses,

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

var courseTitleOption = {
    data: unique_courses,

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

var slotOption = {
    data: unique_slots,

    getValue: "SLOT",

    list: {
        match: {
            enabled: true
        }
    },

    placeholder: "eg: L1+L2+L3",

    theme: "round"
};

$("#inputCourseTitle").easyAutocomplete(courseTitleOption);
$("#inputCourseCode").easyAutocomplete(courseCodeOption);
$("#inputSlotString").easyAutocomplete(slotOption);