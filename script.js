$(document).ready(function(){
    $(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {        
        $('#topBtn').fadeIn(200);    
    } else {
        $('#topBtn').fadeOut(200);   
    }
});
$('#topBtn').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 300);
});
});