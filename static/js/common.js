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


	initializeCarousel();
	$('#showNextSpan').click(moveCarouselNext);
	$('#showPreviousSpan').click(moveCarouselPrevious);
}

var previousCarouselIndex = 8
var currentCarouselIndex = 0;
var leftPosition = -250;
var centerPosition = 100;
var rightPosition = 750;
var animationSpeed = 500
function initializeCarousel(){
	//$('#step'+0).show();
	$('#step'+8).css('left', leftPosition);
	$('#step'+0).css('left', centerPosition);
	$('#step'+0).css('opacity', 1);
	$('.crumbContainer:nth-child('+(currentCarouselIndex+2)+')').children('.crumb').addClass('active');	
}

function moveCarouselNext(){
	//Move current center label to the left
	$('#step'+currentCarouselIndex).animate({'left':leftPosition, 'opacity':0},animationSpeed);
	
	//Move the previous left label to the right
	$('#step'+previousCarouselIndex).css('left', rightPosition);

	//Change the previous index to the current index
	previousCarouselIndex = currentCarouselIndex;

	//Change the current index to the next index i.e. increament if <> 8, make -0 if =8
	if(currentCarouselIndex==8){
		currentCarouselIndex=0;
	}
	else{
		currentCarouselIndex++;	
	}

	//Move next label to the center
	$('#step'+(currentCarouselIndex)).animate({'left':centerPosition, 'opacity':1},animationSpeed);
	$('.crumb').removeClass('active');
	$('.crumbContainer:nth-child('+(currentCarouselIndex+2)+')').children('.crumb').addClass('active');
}

function moveCarouselPrevious(){

	//Move current center label to the right
	$('#step'+currentCarouselIndex).animate({'left':rightPosition, 'opacity':0},animationSpeed);
	
	//Move the previous left label to the center
	$('#step'+previousCarouselIndex).animate({'left':centerPosition, 'opacity':100},animationSpeed);

	//Change the current index to the previous index
	currentCarouselIndex = previousCarouselIndex;

	//Change the previous index to the one before it i.e. decreament if <> 0, make 8 if =0
	if(previousCarouselIndex==0){
		previousCarouselIndex=8;
	}
	else{
		previousCarouselIndex--;	
	}

	//Move the previous label to the left
	$('#step'+(previousCarouselIndex)).css('left',leftPosition);
	$('.crumb').removeClass('active');
	$('.crumbContainer:nth-child('+(currentCarouselIndex+2)+')').children('.crumb').addClass('active');
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

