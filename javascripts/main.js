$(document).ready(function(){
  $('div').click(function(){
    $('div').effect('bounce',{times:3},300);
    $('div').css('color','yellow');
  });
  confirm('1');
});
