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
        '<a class="btn btn-default" href="#" data-value="' + btnValue + '" onclick="event.preventDefault();slotSelectionBtnClicked(this.getAttribute(\'data-value\'));">' + btnText + '</a>';

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
    var BUTTONS_PER_ROW = 3;
    var total = 0;
    var btnGrpHtml = '';
    var insert = '';

    $('#insertSlotBtn').html('');
    $.each(all_data, function (key, value) {
        if (value.CODE == searchCode) {
            // append slots to add course panel
            if (total % BUTTONS_PER_ROW === 0) {
                btnGrpHtml += btnGrpHtml ? '</div>' : '';
                insert += btnGrpHtml;
                btnGrpHtml = '';
                btnGrpHtml += '<div class="btn-group btn-group-justified" role="group">';
            }

            btnGrpHtml += addSlotSelectionButtons(value.TYPE, value.SLOT, value.FACULTY, value.CREDITS.toString(), value.VENUE);
            ++total;
        }
    });

    btnGrpHtml += '</div>';
    insert += btnGrpHtml;

    $('#insertSlotBtn').append(insert);
}

// autocomplete options

var courseCodeOption = {
    data: unique_courses,

    getValue: "CODE",

    list: {
        match: {
            enabled: true
        },

        maxNumberOfElements: 10,

        onSelectItemEvent: function () {
            var title = $("#inputCourseCode").getSelectedItemData().TITLE;
            $("#inputCourseTitle").val(title).trigger("change");
            var searchCode = $("#inputCourseCode").getSelectedItemData().CODE;
            getSlots(searchCode);
        }
    },

    template: {
        type: "description",
        fields: {
            description: "TITLE"
        }
    },

    placeholder: "Search..."
};

var courseTitleOption = {
    data: unique_courses,

    getValue: "TITLE",

    list: {
        match: {
            enabled: true
        },

        onSelectItemEvent: function () {
            var code = $("#inputCourseTitle").getSelectedItemData().CODE;
            $("#inputCourseCode").val(code).trigger("change");
            getSlots(code);
        }
    },

    template: {
        type: "description",
        fields: {
            description: "CODE"
        }
    },

    placeholder: "Search..."
};

$("#inputCourseTitle").easyAutocomplete(courseTitleOption);
$("#inputCourseCode").easyAutocomplete(courseCodeOption);
$("div.easy-autocomplete").attr("style", "");