
/* input validation for non-jotform pages */
  
  function numbersonly(e, decimal) {
		var key;
		var keychar;
		if (window.event) {key = window.event.keyCode;}
		else if (e) {key = e.which;}
		else {return true;}
		keychar = String.fromCharCode(key);
		if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) ) {return true;}
		else if ((("0123456789").indexOf(keychar) > -1)) {return true;}
		else if (decimal && (keychar == ".")) {return true;}
		else return false; 
	}
	
/* place holder js for non-jotform*/
		
		 $(document).ready(function() {
            var holder = 'Zip Code';
            $('.zip').blur(function() {
                if ($(this).val().length == 0)
                    $(this).val(holder).addClass('holder');
            }).focus(function() {
                if ($(this).val() == holder)
                    $(this).val('').removeClass('holder');
            }).val(holder).addClass('holder');
        });

//R-Click Disable for images//
/*$("body").on("contextmenu", ".bannersection", function(e) {
  return false;
});*/

//equal height for main content //

$(window).on('load resize',function() {

  function equalHeight(group) {

      var maxHeight = 0;

      group.each(function () {

          $(this).removeAttr('style');

          maxHeight = Math.max(maxHeight, $(this).height());

      });

      group.css({ height: maxHeight + 'px' });

  }

  if ($(this).width() >= 768) {

  equalHeight($('.right-side, .left-content'));

  }

  else {

               $('.right-side, .left-content').css('height','initial');

}

});

	




 
