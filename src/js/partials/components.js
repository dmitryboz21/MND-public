jQuery(function () { 



});


// Call the function anytime needed, by default on loading and resizing window, see below
function flexboxRowLastChild(){
    $(document).ready(function(){
    
        $('.js-calc-first-and-last-in-flex-row').each(function() {
        
            //Reset at every function call
            $(this).children('.flexbox-row-first-child').removeClass('flexbox-row-first-child');
            $(this).children('.flexbox-row-last-child').removeClass('flexbox-row-last-child');
            
            //Set :first-child and :last-child (or use css pseudo-element instead)
            $(this).children().eq(0).addClass('flexbox-row-first-child');
            $(this).children().eq($(this).children().length - 1).addClass('flexbox-row-last-child');
            
            var rowWidth = $(this).children().eq(0).outerWidth(true);
            
            //For counting number of row if needed
            var nbrRow = 1;
            var nbrInRow = 1;

            for (var i = 0; i < $(this).children().length; i++) {

                if (rowWidth <= $(this).width()) {
                //Sum of every children width (with margin) while it's less than the flexbox-wrapper width 
                    var rowWidth = rowWidth + $(this).children().eq(i+1).outerWidth(true);
					++nbrInRow;
                } else {
					nbrInRow = 1;
                //Set the flexbox-row-first-child and flexbox-row-last-child classes and begin to check for a new row
                    $(this).children().eq(i-1).addClass('flexbox-row-last-child').addClass('flexbox-row-last-child--non-first-row');
                    $(this).children().eq(i).addClass('flexbox-row-first-child').addClass('flexbox-row-first-child--non-first-row');

                    var nbrRow = nbrRow + 1;
                    var rowWidth = $(this).children().eq(i).outerWidth(true) + $(this).children().eq(i+1).outerWidth(true);
                }
                
            }
            
        });
        
    });
}



$(document).ready(function(){
    flexboxRowLastChild();
    $(window).resize(function(){
        flexboxRowLastChild();
    });
});
