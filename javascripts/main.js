$(document).ready(function(){
  confirm('2');
  $('div').click(function(){
    $(this).effect('bounce',{times:3},300);
    $(this).css('color','yellow');
  });
});
