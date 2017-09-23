var operators = [ "+" , "-" , "*" , "/" ];
var num1 , num2, result , operator;
var score = 0 , question_num=1;

var right_sound = new Audio('audios\\right_sound.mp3');
var wrong_sound = new Audio('audios\\wrong_sound.mp3');


$(document).ready(function(){
    
    generateOperation();
    
    $("#result").on("keydown",function search(e) {
        if(e.keyCode == 13) {
            if($(this).val() == result){
                
                $("#score").animate({fontSize:'200%'},600,function(){
                    score++;
                    $("#score").html("Score "+score);
                    $(this).animate({fontSize:'150%'})
                })
                
                right_sound.play();
                
                $("#right").fadeIn().animate({
                    width:'20%',
                    height:'25%'
                },1500);
            }
            else{
                wrong_sound.play();
                $("#wrong").fadeIn().animate({
                    width:'22%',
                    height:'27%'
                },1500);
            }
                
            $(this).val("");
            document.getElementById("result").style.display="none";
            document.getElementById("answer").style.display="block";
            document.getElementById("answer").innerHTML=result; 
        
            $("#answer").animate({
                marginRight:'39%',
                marginTop:'20.8%'
            
            } ,1500 ,function(){ 
                document.getElementById("continue").style.display="block";
                document.getElementById('continue').focus();
                
                $("#continue").animate(
                    {marginLeft:'45%' ,
                    marginBottom: '9%'
                    },1500)})
        }
    });
    
    document.getElementById("continue").onclick=function(){
                document.getElementById("equal").style.visibility="hidden";
                
                $("#right").animate({
                    width:'0%',
                    height:'0%'
                });
        
                $("#wrong").animate({
                    width:'0%',
                    height:'0%'
                });
        
                $("#answer").fadeOut().animate(
                    {marginRight:'0%',
                     marginTop:'0%'});
        
                question_num++;
                $("#question").html("Question #"+question_num);
                
                $("#operation").fadeOut().animate({
                    marginLeft:'0%',
                    marginTop:'0%'
                },function(){
                    
                    generateOperation();
                    
                });
        
                $(this).fadeOut().animate(
                    {
                        marginLeft:'0%',
                        marginBottom:'0%'
                    });        
                };
    
    function generateOperation(){
        operator = Math.round(Math.random() * 3);
        num1 = Math.round(Math.random() * 10);
        num2 = Math.round(Math.random() * 10);
    
        switch(operator){
            case 0:
                result = num1+num2;
                document.getElementById("operation").innerHTML = num1 +" "+operators[operator]+" "+num2;
                break;
            case 1:
                if(num1 >= num2){
                    result = num1-num2;
                    document.getElementById("operation").innerHTML = num1 +" "+operators[operator]+" "+num2;
                }
                else{
                    result = num2-num1;
                    document.getElementById("operation").innerHTML = num2 +" "+operators[operator]+" "+num1;
                }
                break;
            case 2:
                result = num1*num2;
                document.getElementById("operation").innerHTML = num1 +" "+operators[operator]+" "+num2;
                break;
            case 3:
                while (num2 == 0){
                    num2 = Math.round(Math.random()*10);
                }
                result = num1;
                num1 = num1 * num2;
                document.getElementById("operation").innerHTML = num1 +" "+operators[operator]+" "+num2;
                break;
        }
        
        $("#operation").fadeIn().animate({
            marginLeft:'35.5%',
            marginTop:'20%'
        },1500 ,function(){
            document.getElementById("equal").style.visibility="visible";
            $("#result").fadeIn();
            document.getElementById("result").focus();} )
        
    }

})
                  