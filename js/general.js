$(document).ready(function() {
    
    $('.first').delay(1000).fadeIn(500);

    
        /* Check the location of each desired element */
        $('.hideme').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    
});