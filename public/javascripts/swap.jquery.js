(function(jQuery) {

  jQuery.fn.swap = function(element){
    var swapped = $(this);
    var newPlace = $($(element)[0]);
    
    
    swapped.after(newPlace.clone());
    newPlace.after(swapped);
    newPlace.remove();
  	return swapped;
  }

})(jQuery);