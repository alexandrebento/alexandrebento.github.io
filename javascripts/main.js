$(document).ready(function(){
  $('div').click(function(){
    $(this).effect('bounce',{times:3},300);
    $(this).css('color','yellow');
  });
  confirm('2');
});
