$(".TimetableContent").click(function () {
   $(this).toggleClass("highlight");
});

//trial WORKS!!!
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
//trial

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
});

$(".TA1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TA1").toggleClass("highlight");
});

$(".TB1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TB1").toggleClass("highlight");
});

$(".TC1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TC1").toggleClass("highlight");
});

$(".TD1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TD1").toggleClass("highlight");
});

$(".TE1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TE1").toggleClass("highlight");
});

$(".TF1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TF1").toggleClass("highlight");
});

$(".TG1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TG1").toggleClass("highlight");
});

$(".TA2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TA2").toggleClass("highlight");
});

$(".TB2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TB2").toggleClass("highlight");
});

$(".TC2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TC2").toggleClass("highlight");
});

$(".TD2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TD2").toggleClass("highlight");
});

$(".TE2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TE2").toggleClass("highlight");
});

$(".TF2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TF2").toggleClass("highlight");
});

$(".TG2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TG2").toggleClass("highlight");
});

$(".TAA1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TAA1").toggleClass("highlight");
});

$(".TBB1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TBB1").toggleClass("highlight");
});

$(".TCC1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TCC1").toggleClass("highlight");
});

$(".TDD1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TDD1").toggleClass("highlight");
});

$(".TEE1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TEE1").toggleClass("highlight");
});

$(".TFF1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TFF1").toggleClass("highlight");
});

$(".TGG1-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TGG1").toggleClass("highlight");
});

$(".TAA2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TAA2").toggleClass("highlight");
});

$(".TBB2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TBB2").toggleClass("highlight");
});

$(".TCC2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TCC2").toggleClass("highlight");
});

$(".TDD2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TDD2").toggleClass("highlight");
});

$(".TEE2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TEE2").toggleClass("highlight");
});

$(".TFF2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TFF2").toggleClass("highlight");
});

$(".TGG2-tile").click(function(){
	$(this).toggleClass("highlight");
	$(".TGG2").toggleClass("highlight");
});*/