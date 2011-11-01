(function(jQuery) {

  jQuery.fn.swap = function(element){
    var swapped = $(this[0]);
    var newPlace = $($(element)[0]);
    
    if (swapped.parents(element).length || swapped.children(element).length) {
      return swapped;
    };
    
    swapped.after(newPlace.clone());
    newPlace.after(swapped);
    newPlace.remove();
  	return swapped;
  }

})(jQuery);