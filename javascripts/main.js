$(document).ready(
function() {
  $(".earth").hover(
  function(){
  	 $(this).css("background","#FF1E00");
  	 $(this).css("box-shadow","0px 0px 10px red");
  },
  function(){
     $(this).css("background","#FF1E00");
     $(this).css("box-shadow","0px 0px 10px blue");
  }
  );
  $(".satellite").hover(
  function(){
     $(this).css("background","#FF1E00");
  	 $(this).css("box-shadow","0px 0px 10px red");
  },
  function(){
     $(this).css("background","#FF1E00");
     $(this).css("box-shadow","0px 0px 10px blue");
  }
  );
});
