function animateSnippets(){
	noOfVisibleSnippets = 3;
	$('.problemSnippet').hide();
	$('#snippetContainer .problemSnippet:nth-of-type(1)').appendTo('#snippetContainer');
	
	for(i=0;i<noOfVisibleSnippets;i++){

		if(i<noOfVisibleSnippets){
			$('.problemSnippet:nth-of-type('+(i+1)+')').show();
			$('.problemSnippet:nth-of-type('+(i+1)+')').animate({top:(i*100)}, 1000);
		}
		
	}
}

$(document).ready(runOnLoad);
var scrollIntervalTimer;
function runOnLoad(){

	$('#signupHorizonRow').hide();
	$('#signupSubmitBtn').click(onSignUp);
	animateSnippets();
	scrollIntervalTimer = window.setInterval(animateSnippets,2000);
	$('#signupLooking').click(function(){
		if($('#signupLooking').prop('checked')){
			$('#signupHorizonRow').show();
		}
		else{
			$('#signupHorizonRow').hide();
		}
	});
}

function onSignUp(){

	$('.signupRow').addClass('validatedRow');
	var name = $('#signupName').val();
	var email = $('#signupEmail').val();
	var looking = $('#signupLooking').prop('checked');
	var horizon = $('#signupHorizon').val();
	var validForm = true;
	if($('#signupName').prop('validity').valueMissing){
		alert('Please enter a name!');
		validForm = false;
	}

	if($('#signupEmail').prop('validity').valueMissing){
		alert('Please enter an email address!');
		validForm = false;
	}

	if($('#signupEmail').prop('validity').typeMismatch){
		alert('Please enter a valid email address!');
		validForm = false;
	}

	if(validForm){
		alert('Submitting the form.');
	}
}

