/**
 * Add slot selection buttons from array of slots
 * function is called in autocomplete_course.js
 */

function addSlotSelectionButtons(type, slot, faculty, credits, venue) {
    var btnValue = '';
    var btnText = '';
    btnText = slot + '<strong> | </strong>' + faculty + '<strong> | </strong>' + type + '<strong> | </strong>' + venue;
    btnValue = slot + '|' + faculty + '|' + type + '|' + venue + '|' + credits;

    var insert =
        '<div class="col-xs-12 col-sm-6 col-md-4">' +
        '<button class="btn btn-default btn-block" type="button" value="' + btnValue + '" onclick="slotSelectionBtnClicked(this.value)">' + btnText + '</button>' +
        '</div>';

    return insert;
}

// append input fields according to slotBtn click

function slotSelectionBtnClicked(value) {
    value = value.split('|');
    $('#inputSlotString').val(value[0]);
    $('#inputFaculty').val(value[1]);
    $('#inputVenue').val(value[3]);
    $('#inputCourseCredits').val(value[4]);
}

function getSlots(searchCode) {
    $('#insertSlotBtn').html('');
    var insert = '<div class="btn-group" role="group">';
    $.each(all_data, function (key, value) {
        if (value.CODE == searchCode) {
            // append slots to add course panel
            insert = insert + addSlotSelectionButtons(value.TYPE, value.SLOT, value.FACULTY, value.CREDITS.toString(), value.VENUE);
        }
    });
    insert = insert + '</div>'
    $('#insertSlotBtn').append(insert);
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

$("#inputCourseTitle").easyAutocomplete(courseTitleOption);
$("#inputCourseCode").easyAutocomplete(courseCodeOption);