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
  
  $('a.swap_some_link_red').click(function(){
    return changePlace('.container .red', '.some_link');
  });
  
  $('a.swap_red_inner').click(function(){
    return changePlace('.red', '.inner');
  });
  
  $('a.swap_outer_inner').click(function(){
    return changePlace('.outer', '.inner');
  });
  
});