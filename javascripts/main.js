$(document).ready(function() {
  $(".js").click(function(){
     $(this).css( "background", "yellow" );
     $(this).toggle("bounce",{times:3},"slow");
  });
  confirm('2');
});
