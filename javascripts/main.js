$(document).ready(function(){
  $('div').click(function(){
    $('div').effect('bounce',{times:3},300);
    this.css('color','yellow');
  });
  confirm('3');
});
