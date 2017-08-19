$(document).ready(function() {
 	//removes class makeRed, adds class makeBorder on mouseenter
 	$("button").mouseenter(function(){
 	 $(this).removeClass("makeRed").addClass("makeBorder");

 	});
 	//reverses above on mouseleave
 	$("button").mouseleave(function(){
 	 $("button").removeClass("makeBorder").addClass("makeRed");

 	});
 	//toggles paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").slideToggle(2000);
 	});

 	//hides/shows  paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").hide(2000).show(2000);
 	});
 		//fadeIn and fadoeOut on paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").fadeIn().fadeOut();
 	});
 	


}); 

/*$(document).ready(function(){
 //
 // add your jQuery code here
  
$('button1').mouseenter(function(){
   $(this).removeClass('makeRed').addClass('makeBorder');
	
	});

  /*$('button1').mouseleave(function(){
   $('button1').addClass('makeRed').removeClass('makeBorder');
	
	});

  $('button1').click(function(){
   $('#para1').slideToggle("slow");
	
	});

 

});*/ 
