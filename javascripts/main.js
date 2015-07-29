$(document).ready(function() {
  $(".js").click(function(){
     $(this).css( "background", "yellow" );
     $(this).effect("bounce",{times:3},"slow");
  });
  confirm('1');
});
