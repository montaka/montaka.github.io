'use strict'
$(document).ready(function(){


    $('.tag').on('click',function(){
        $(this).next().toggleClass('content');
    });
    $('.header-left h1').fadeIn(3000);

    $('button').on('click',function(){
$('.login-list').fadeIn();
    });

    $('i').on('click',function(){
        $('.login-list').fadeOut();
    });
    

});

