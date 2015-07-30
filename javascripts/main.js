$(document).ready(function() {
  $(".js").click(function(){
     $(this).css( "background", "yellow" );
     $(this).fadeOut( "slow" );
  });
});