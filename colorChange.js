var labArray = null;

function resetTimeTable(){
	if($(".TimetableContent").hasClass("highlight")){
		$(".TimetableContent").removeClass("highlight");
	}
	if($(".tile").hasClass("highlight")){
		$(".tile").removeClass("highlight");
	}
}

$(".TimetableContent").click(function () {
   $(this).toggleClass("highlight");
});

/**
 * Code to generate a custom course list through #slot-sel-area, manage the
 * list and to mark the added slots to the timetable.
 */

(function() {
	var totalCredits = 0;

	var facultyInput = $("#inputFaculty");
	var courseInput = $("#inputCourseTitle");
	var creditsInput = $("#inputCourseCredits");
	var slotInput = $("#inputSlotString");
	var totalContainer = $("#slot-sel-area .list-group li.total");
	var totalSpan = totalContainer.find(".badge");

    $("#slot-sel-area .panel-body button").click(function() {
			var slot, slotArray, i, normSlotString, li;
      slot = slotInput.val().trim();
      if (!slot) {
          $("#slot-sel-area .form-group").first().addClass("has-error");
          return;
      }

      faculty = facultyInput.val().trim();
      course = courseInput.val().trim();
      credits = Number(creditsInput.val());

      slotArray = slot.split(/\s*\+\s*/);

      for (i = 0; i < slotArray.length; ++i) {
          slotArray[i] = slotArray[i].toUpperCase();
          markSlot(slotArray[i]);
      }

      normSlotString = slotArray.join(" + ");
      li = $('<li class="list-group-item">' +
          '<div class="row">' +
          '<span class="slots col-sm-3">' + normSlotString + '</span>' +
          '<span class="course col-sm-5">' + course + '</span>' +
          '<span class="faculty col-sm-4">' + faculty + '</span>' +
          '<span class="col-sm-2 text-right">' +
          '<span class="badge">' + (credits ? credits : 0) + '</span>' +
          '</span>' +
          '</div>' +
          '</li>');

      totalContainer.before(li);

			totalCredits += credits;

			totalSpan.text(totalCredits);

    });
})();

/**
 * Toggles slot highlighting of passed slot in the table.
 * @param  {string} slot individual slot obtained from passed input.
 * @return {undefined}
 */
function markSlot(slot) {
	var labSlotPattern = /^L\d{1,2}$/;
	var slotNum;
	if(labSlotPattern.test(slot)) {
		if(!labArray) makeLabArray();
		slotNum = Number(slot.substring(1));
		if(!(slotNum >= 15 && slotNum <= 18))
			labArray.eq(slotNum - 1)
							.toggleClass("highlight");
	}
	else if($("." + slot)) {
		$("." + slot).toggleClass("highlight");
	}
}

/**
 * Prepares a $ collection of all the slots in the table in ascending order
 * and pads 3 null objects to compensate for missing slots. The result is
 * stored in labArray.
 * @return {undefined}
 */
function makeLabArray() {
	var left = $(),
			right = $();
	var slots = $(".TimetableContent");
	slots.splice(26, 0, null, null, null);
	var length = slots.length;
	var i;
	for(i = 0; i < 60; ++i) {
		if(i % 12 < 6) left.push(slots.eq(i));
		else right.push(slots.eq(i));
	}

	labArray = left.add(right);
}

$(".alert-dismissible .close").click(function() {
	$(this).parent()
		.toggleClass("hide");
});
