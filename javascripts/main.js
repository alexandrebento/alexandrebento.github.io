$(document).ready(function(){
    
    var person = prompt("Please enter your name", "Harry Potter");
    
    $('.logo').click(function(){
        $(this).effect('bounce', {times:3}, 500);    
    });
});
