var color="white";

$(document).ready(function(){
    
    // initialize children with white background 
    $('#window11').css('backgroundColor' , color);
    $('#window21').css('backgroundColor' , color);
    $('#door1').css('backgroundColor' , color);
    $('#doorstep11').css('backgroundColor' , color);
    $('#doorstep21').css('backgroundColor' , color);
    
    
    document.getElementById("color1").onclick=function(){
        color = $(this).css('backgroundColor');
    }
    
    document.getElementById("color2").onclick=function(){
        color = $(this).css('backgroundColor');
    }
    
    document.getElementById("color3").onclick=function(){
        color = $(this).css('backgroundColor');
    }
    
    document.getElementById("color4").onclick=function(){
        color = $(this).css('backgroundColor');
    }
    
    document.getElementById("color5").onclick=function(){
        color = $(this).css('backgroundColor');
    }
    
    document.getElementById("color6").onclick=function(){
        color = $(this).css('backgroundColor');
    }
    
    $('#roof1').on('click', function(e) {
        if (e.target == this){
            $(this).css('backgroundColor' , color);
            check_matching();
        }
    });
    
    $('#body1').on('click', function(e) {
        if (e.target == this){
            $(this).css('backgroundColor' , color);
            check_matching();
        }
    });
    
    $('#window11').on('click', function(e) {
        if (e.target == this){
            $(this).css('backgroundColor' , color);
            check_matching();
        }
    });
    
    $('#window21').on('click', function(e) {
        if (e.target == this){
            $(this).css('backgroundColor' , color);
            check_matching();
        }
    });
    
    $('#door1').on('click', function(e) {
        if (e.target == this){
            $(this).css('backgroundColor' , color);
            check_matching();
        }
    });
    
    $('#doorstep11').on('click', function(e) {
        if (e.target == this){
            $(this).css('backgroundColor' , color);
            check_matching();
        }
    });
    
    
    $('#doorstep21').on('click', function(e) {
        if (e.target == this){
            $(this).css('backgroundColor' , color);
            check_matching();
        }
    });
    
    $('#front1').on('click', function(e) {
        if (e.target == this){
            $(this).css('backgroundColor' , color);
            check_matching();
        }
    });
    
    function check_matching(){
        if($("#roof1").css('backgroundColor') == $("#roof2").css('backgroundColor') &&
            $("#body1").css('backgroundColor') == $("#body2").css('backgroundColor') &&
            $("#window11").css('backgroundColor') == $("#window12").css('backgroundColor') &&
            $("#window21").css('backgroundColor') == $("#window22").css('backgroundColor') &&
            $("#door1").css('backgroundColor') == $("#door2").css('backgroundColor') && 
            $("#doorstep11").css('backgroundColor') == $("#doorstep12").css('backgroundColor')
           && 
           $("#doorstep21").css('backgroundColor') == $("#doorstep22").css('backgroundColor') &&
            $("#front1").css('backgroundColor') == $("#front2").css('backgroundColor')){
                var right_sound = new Audio('audios\\right_sound.mp3');
                right_sound.play();
                
                $("#colors").fadeOut();
                $("#smallPic").css("background-color","white").animate({
                    left:'22%',
                    top:'14%',
                    width:'50%',
                    height:'77%'
                    },1500,function(){
                        document.getElementById("Pic").style.display="none";
                    });
        }
                    
    }
    
})