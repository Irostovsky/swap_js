$(function(){
  
  var changePlace = function(from, to){
    $(from).swap(to);
    return false;
  }
  
  $('a.swap_red_blue').click(function(){
    return changePlace('.red', '.blue');
  });
  
  $('a.swap_red_black').click(function(){
    return changePlace('.red', '.black');
  });
  
});