var allAddedCourses = {};
var courseCounter = 0; // use for unique data-course attribute

$(function () {
	addColorChangeEvents();

	// Disable On Click Selection
	$("#toggleClickToSelect").click(function () {
		if ($(this).attr("data-state") === "enabled") {
			$(this).text("Enable On Click Selection");
			$(this).attr("data-state", "disabled");
			$('.quick-selection *[class*="-tile"]').off();
			$("#timetable .TimetableContent").off();
			$('.quick-selection').hide(500);
		} else {
			$(this).text("Disable On Click Selection");
			addColorChangeEvents();
			$(this).attr("data-state", "enabled");
			$('.quick-selection').show(500);
		}
	});

	$('#slot-sel-area #addCourseBtn').click(function () {
		var courseCode = $('#inputCourseCode').val().trim();
		var courseTile = $('#inputCourseTitle').val().trim();
		var faculty = $('#inputFaculty').val().trim();
		var slotString = $('#inputSlotString').val().trim();
		var venue = $('#inputVenue').val().trim();
		var credits = $('#inputCourseCredits').val().trim();

		var slotArray = (function () {
			var arr = [];
			slotString.split(/\s*\+\s*/).forEach(function (el) {
				if (el && $('.' + el)) {
					arr.push(el);
				}
			});
			return arr;
		})();
		courseCounter++;

		addCourseToTimetable(courseCode, venue, slotArray);
		insertCourseToCourseListTable(courseCode, courseTile, faculty, slotArray, venue, credits);
		checkSlotClash();

		// ('course' + courseCounter) will be unique class to div inserted in timetable and course list
		allAddedCourses['course' + courseCounter] = [courseCode, courseTile, faculty, slotArray, venue, credits];
	});

	$('#resetButton').click(function () {
		$('#timetable .TimetableContent').removeClass("highlight clash");
		$('.quick-selection *[class*="-tile"]').removeClass("highlight");
		if ($('#timetable tr div[data-course]')) {
			$('#timetable tr div[data-course]').remove();
		}
		if ($('#courseListTable tbody tr[data-course]')) {
			$('#courseListTable tbody tr[data-course]').remove();
		}

		courseCounter = 0; // not really need to be initialized again
	});
});

function addColorChangeEvents() {
	$("#timetable .TimetableContent:not([disabled])").click(function () {
		$(this).toggleClass("highlight");
		if (!$(this).hasClass("highlight")) {
			$(".quick-selection ." + this.classList[1] + "-tile").removeClass("highlight");
			return;
		}
		if ($("#timetable ." + this.classList[1]).not(".highlight").length === 0) {
			$(".quick-selection ." + this.classList[1] + "-tile").addClass("highlight");
		}
	});

	$('.quick-selection *[class*="-tile"]').click(function () {
		if ($(this).hasClass("highlight")) {
			$("#timetable ." + this.classList[0].split('-')[0]).removeClass("highlight");
		} else {
			$("#timetable ." + this.classList[0].split('-')[0]).addClass("highlight");
		}
		$(this).toggleClass("highlight");
	});
}

function addCourseToTimetable(courseCode, venue, slotArray) {
	slotArray.forEach(function (slot) {
		var $divElement = $('<div data-course="' + 'course' + courseCounter + '">' + courseCode + '-' + venue + '</div>');
		$('#timetable tr .' + slot).addClass('highlight').append($divElement);
	});
}

function insertCourseToCourseListTable(courseCode, courseTile, faculty, slotArray, venue, credits) {
	var $trElement = $('<tr data-course="' + 'course' + courseCounter + '">' +
		'<td>' + slotArray.join('+') + '</td>' +
		'<td>' + courseCode + '</td>' +
		'<td>' + courseTile + '</td>' +
		'<td>' + faculty + '</td>' +
		'<td>' + venue + '</td>' +
		'<td>' + credits + '</td>' +
		'<td><span class="close">&times;</span></td>' +
		'</tr>');

	// attach course removal listener
	$trElement.find('.close').click(removeCourse);

	$('#courseListTable tbody #totalCreditsTr').before($trElement);

	// update credits
	updateCredits();
}

function updateCredits() {
	var totalCredits = 0;
	$('#courseListTable tbody tr').not('#totalCreditsTr').each(function () {
		// 6th column in credits column
		totalCredits += Number($(this).children('td').eq(5).text());
	});
	$('#totalCredits').text(totalCredits);
}

function checkSlotClash() {
	// Remove danger class (shows clashing) form tr in course list table.
	$('#courseListTable tbody tr').removeClass('danger');

	// Check clash from timetable in each slot area
	$('#timetable tr .highlight').each(function () {
		if ($(this).children('div[data-course]').length > 1) {
			// clash
			// remove highlight, add clash in timetable
			$(this).addClass('clash');
			// show clash in course list table
			$(this).children('div[data-course]').each(function () {
				var dataCourse = $(this).attr("data-course");
				// Add danger class to tr of clashing course list table.
				$('#courseListTable tbody tr[data-course="' + dataCourse + '"]').addClass('danger');
			});
		} else if ($(this).children('div[data-course]').length === 1) {
			// no clash
			$(this).removeClass('clash').addClass('highlight');
		} else {
			// no course present
			$(this).removeClass('clash highlight');
		}
	});
}

function removeCourse() {
	var dataCourse = $(this).closest('tr').attr('data-course');

	$('#timetable tr td div[data-course="' + dataCourse + '"]').remove();
	$('#courseListTable tbody tr[data-course="' + dataCourse + '"]').remove();

	checkSlotClash();
	updateCredits();
}