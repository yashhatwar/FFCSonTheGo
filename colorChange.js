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

$(".A1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".A1").removeClass("highlight");
	}
	else{
		$(".A1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".A1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".A1-tile").removeClass("highlight");
	}
});

$(".B1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".B1").removeClass("highlight");
	}
	else{
		$(".B1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".B1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".B1-tile").removeClass("highlight");
	}
});

$(".C1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".C1").removeClass("highlight");
	}
	else{
		$(".C1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".C1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".C1-tile").removeClass("highlight");
	}
});

$(".D1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".D1").removeClass("highlight");
	}
	else{
		$(".D1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".D1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".D1-tile").removeClass("highlight");
	}
});

$(".E1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".E1").removeClass("highlight");
	}
	else{
		$(".E1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".E1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".E1-tile").removeClass("highlight");
	}
});

$(".F1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".F1").removeClass("highlight");
	}
	else{
		$(".F1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".F1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".F1-tile").removeClass("highlight");
	}
});

$(".G1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".G1").removeClass("highlight");
	}
	else{
		$(".G1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".G1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".G1-tile").removeClass("highlight");
	}
});

$(".A2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".A2").removeClass("highlight");
	}
	else{
		$(".A2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".A2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".A2-tile").removeClass("highlight");
	}
});

$(".B2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".B2").removeClass("highlight");
	}
	else{
		$(".B2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".B2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".B2-tile").removeClass("highlight");
	}
});

$(".C2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".C2").removeClass("highlight");
	}
	else{
		$(".C2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".C2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".C2-tile").removeClass("highlight");
	}
});

$(".D2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".D2").removeClass("highlight");
	}
	else{
		$(".D2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".D2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".D2-tile").removeClass("highlight");
	}
});

$(".E2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".E2").removeClass("highlight");
	}
	else{
		$(".E2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".E2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".E2-tile").removeClass("highlight");
	}
});

$(".F2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".F2").removeClass("highlight");
	}
	else{
		$(".F2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".F2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".F2-tile").removeClass("highlight");
	}
});

$(".G2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".G2").removeClass("highlight");
	}
	else{
		$(".G2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".G2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".G2-tile").removeClass("highlight");
	}
});

/*$(".A1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".A1").toggleClass("highlight");
});

$(".B1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".B1").toggleClass("highlight");
});

$(".C1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".C1").toggleClass("highlight");
});

$(".D1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".D1").toggleClass("highlight");
});

$(".E1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".E1").toggleClass("highlight");
});

$(".F1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".F1").toggleClass("highlight");
});

$(".G1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".G1").toggleClass("highlight");
});

$(".A2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".A2").toggleClass("highlight");
});

$(".B2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".B2").toggleClass("highlight");
});

$(".C2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".C2").toggleClass("highlight");
});

$(".D2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".D2").toggleClass("highlight");
});

$(".E2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".E2").toggleClass("highlight");
});

$(".F2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".F2").toggleClass("highlight");
});

$(".G2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".G2").toggleClass("highlight");
});*/

$(".TA1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TA1").removeClass("highlight");
	}
	else{
		$(".TA1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TA1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TA1-tile").removeClass("highlight");
	}
});

$(".TB1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TB1").removeClass("highlight");
	}
	else{
		$(".TB1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TB1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TB1-tile").removeClass("highlight");
	}
});

$(".TC1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TC1").removeClass("highlight");
	}
	else{
		$(".TC1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TC1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TC1-tile").removeClass("highlight");
	}
});

$(".TD1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TD1").removeClass("highlight");
	}
	else{
		$(".TD1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TD1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TD1-tile").removeClass("highlight");
	}
});

$(".TE1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TE1").removeClass("highlight");
	}
	else{
		$(".TE1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TE1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TE1-tile").removeClass("highlight");
	}
});

$(".TF1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TF1").removeClass("highlight");
	}
	else{
		$(".TF1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TF1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TF1-tile").removeClass("highlight");
	}
});

$(".TG1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TG1").removeClass("highlight");
	}
	else{
		$(".TG1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TG1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TG1-tile").removeClass("highlight");
	}
});

$(".TA2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TA2").removeClass("highlight");
	}
	else{
		$(".TA2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TA2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TA2-tile").removeClass("highlight");
	}
});

$(".TB2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TB2").removeClass("highlight");
	}
	else{
		$(".TB2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TB2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TB2-tile").removeClass("highlight");
	}
});

$(".TC2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TC2").removeClass("highlight");
	}
	else{
		$(".TC2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TC2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TC2-tile").removeClass("highlight");
	}
});

$(".TD2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TD2").removeClass("highlight");
	}
	else{
		$(".TD2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TD2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TD2-tile").removeClass("highlight");
	}
});

$(".TE2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TE2").removeClass("highlight");
	}
	else{
		$(".TE2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TE2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TE2-tile").removeClass("highlight");
	}
});

$(".TF2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TF2").removeClass("highlight");
	}
	else{
		$(".TF2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TF2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TF2-tile").removeClass("highlight");
	}
});

$(".TG2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TG2").removeClass("highlight");
	}
	else{
		$(".TG2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TG2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TG2-tile").removeClass("highlight");
	}
});

$(".TAA1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TAA1").removeClass("highlight");
	}
	else{
		$(".TAA1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TAA1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TAA1-tile").removeClass("highlight");
	}
});

$(".TCC1-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TCC1").removeClass("highlight");
	}
	else{
		$(".TCC1").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TCC1").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TCC1-tile").removeClass("highlight");
	}
});

$(".TAA2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TAA2").removeClass("highlight");
	}
	else{
		$(".TAA2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TAA2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TAA2-tile").removeClass("highlight");
	}
});

$(".TBB2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TBB2").removeClass("highlight");
	}
	else{
		$(".TBB2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TBB2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TBB2-tile").removeClass("highlight");
	}
});

$(".TCC2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TCC2").removeClass("highlight");
	}
	else{
		$(".TCC2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TCC2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TCC2-tile").removeClass("highlight");
	}
});

$(".TDD2-tile").click(function(){
	if($(this).hasClass("highlight")){
		$(".TDD2").removeClass("highlight");
	}
	else{
		$(".TDD2").addClass("highlight");
	}
	$(this).toggleClass("highlight");
});
$(".TDD2").click(function(){
	if(!$(this).hasClass("highlight")){
		$(".TDD2-tile").removeClass("highlight");
	}
});

/*
 * Code for parsing the slot string from inputSlotString
 *
 */

 $("#inputSlotString + span .btn").click(function() {
	 var input = $("#inputSlotString").val().trim();
	 var slotArray = input.split("+");

	 console.log(slotArray);

	 slotArray.forEach(function(slot) {
		markSlot(slot);
	 });
 });

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
