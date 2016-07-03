var labArray = null;

$(function() {
	makeLabArray();
});

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
	function CourseRecord(slots, title, fac, credits, $li) {
		this.slots = slots;
		this.title = title;
		this.fac = fac;
		this.credits = credits;
		this.$li = $li;
		this.isClashing = false;
	}

	function isSlotValid(slot) {
		var labSlotPattern = /^L\d{1,2}$/;
		var slotNum;
		if(labSlotPattern.test(slot)) {
			if(!labArray) makeLabArray();
			slotNum = Number(slot.substring(1));
			if(slotNum >= 15 && slotNum <= 18)
				return false;
		}
		else if(!$("." + slot).length) {
			return false;
		}

		return true;
	}

	var CRM = {
		courses: [],
		add: function(slots, title, fac, credits, $li) {
			slots = this.expandSlots(slots);
			var record = new CourseRecord(slots, title, fac, credits, $li);
			var clashes = this.getClashingSlots(record);
			if(clashes.length()) {
				record.isClashing = true;
			}

			this.mark(record, clashes);
			this.courses.push(record);

			console.log(this.courses);

		},

		getClashingSlots: function(newRecord) {
			var clashes = {
				arr: [],
				get: function(index) {
					return this.arr[index];
				},

				length: function() {
					return this.arr.length;
				},

				add: function(slot, rec1, rec2) {
					var isAdded = false;
					if(this.arr.length === 0) {
						this.arr.push({
							slot: slot,
							records: [rec1, rec2]
						});
						return;
					}

					this.arr.forEach(function(clash) {
						if(slot === clash.slot) {
							isAdded = true;
							if(clash.records.indexOf(rec1) === -1) {
								clash.records.push(rec1);
							}
							if(clash.records.indexOf(rec2) === -1 ) {
								clash.records.push(rec2);
							}
						}
					});

					if(!isAdded) {
						this.arr.push({
							slot: slot,
							records: [rec1, rec2]
						});
					}

				}
			};

			this.courses.forEach(function(otherRecord) {
				newRecord.slots.forEach(function(newSlot) {
					if(otherRecord.slots.indexOf(newSlot) >= 0) {
						clashes.add(newSlot, newRecord, otherRecord);
					}
				});
			});

			return clashes;
		},
		mark: function(record, clashes) {
			var i, loopSlot;
			if(!record.isClashing) {
				record.slots.forEach(function(slot) {
					this.highlight(slot);
				}, this);
			} else {

				for(i = 0; i < clashes.length(); ++i) {
					clashes.get(i).records.forEach(function(record) {
						record.$li.addClass("list-group-item-danger");
					});
					loopSlot = clashes.get(i).slot;
					this.highlight(loopSlot);
					this.clashSlot(loopSlot);
				}

				record.slots.forEach(function(slot) {
					this.highlight(slot);
				}, this);

			}
		},

		highlight: function(slot) {
			if(slot.match(/^L/)) {
				labArray[Number(slot.substring(1)) - 1].addClass("highlight");
			} else {
				$("." + slot).addClass("highlight");
			}
		},

		clashSlot: function(slot) {
			if(slot.match(/^L/)) {
				labArray[Number(slot.substring(1)) - 1].addClass("slot-clash");
			} else {
				$("." + slot).addClass("slot-clash");
			}
		}
	};

	CRM.expandSlots = function(slots) {
		var i, length = slots.length;
		for(i = 0; i < length; ++i) {
			if(this.getSlotType(slots[i]) === "lab") continue;
			else {
				slots = slots.concat(this.convertToLab(slots[i]));
			}
		}
		return slots;
	};

	CRM.getSlotType = function(slot) {
		return /^L/.test(slot) ? "lab" : "theory";
	};

	CRM.convertToLab = function(slot) {
		var arr = [];
		$("." + slot).each(function() {
			arr.push($(this).text().replace(/^.*(L\d{1,2}).*$/, "$1"));
		});
		return arr;
	};

	CRM.listenForRemove = function() {
		var self = this;
		$("#slot-sel-area ul").on("click", "span.close", function() {
			var $li = $(this).parents().filter("li.list-group-item");
			var liDom = $li.get(0);
			var i;
			for(i = 0; i < self.courses.length; ++i) {
				if(self.courses[i].$li.get(0) === liDom) {
					self.courses.splice(i, 1);
					$(".TimetableContent").removeClass("highlight slot-clash");
					$("#slot-sel-area .list-group li").removeClass("list-group-item-danger");
					break;
				}
			}

			var backupCourses = self.courses;
			self.courses = [];

			backupCourses.forEach(function(record) {
				var clashes = self.getClashingSlots(record);
				if(clashes.length()) {
					record.isClashing = true;
				}

				self.mark(record, clashes);
				self.courses.push(record);

				console.log(self.courses);
			});

			totalCredits -= Number($li.find(".badge").text());

			totalSpan.text(totalCredits);

			$li.detach();

		});
	};

	CRM.listenForRemove();

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


    normSlotString = slotArray.join(" + ");
    li = $('<li class="list-group-item">' +
        '<div class="row">' +
        '<span class="slots col-sm-3">' + normSlotString + '</span>' +
        '<span class="course col-sm-5">' + course + '</span>' +
        '<span class="faculty col-sm-4">' + faculty + '</span>' +
        '<span class="col-sm-1 text-right">' +
        '<span class="badge">' + (credits ? credits : 0) + '</span>' +
        '</span>' +
				'<span class="col-sm-1 text-right">' +
				'<span class="close">&times;</span>' +
				'</span>' +
        '</div>' +
        '</li>');

    totalContainer.before(li);

		totalCredits += credits;

		totalSpan.text(totalCredits);

		for (i = 0; i < slotArray.length; ++i) {
			slotArray[i] = slotArray[i].toUpperCase();
			if(!isSlotValid(slotArray[i])) {
				console.log("Invalid slot");
				return false;
			}
		}

		CRM.add(slotArray, course, faculty, credits, li);
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
