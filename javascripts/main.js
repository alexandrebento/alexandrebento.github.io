$(document).ready(function(){
  confirm('1');
  $('.logo').click(function(){
    $(this).effect('bounce',{times:3},300);
    $(this).css('box-shadow','10px 10px 5px grey');
  });
});
