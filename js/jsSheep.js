$(document).ready(function(){
    var videos = ["https://www.youtube.com/embed/Pjq_LJli_1U","https://www.youtube.com/embed/8RCMMqyab2U","https://www.youtube.com/embed/loRUrKtia9A","https://www.youtube.com/embed/2qWKE17bPig","https://www.youtube.com/embed/5ap6Qxr2svs","https://www.youtube.com/embed/eBBwUL7Ac60"];
    
    var current=0;
    document.getElementById("leftArrow").onclick = function(){
        if(current != 0){
            current--;
            document.getElementById("video").src = videos[current];
        }
    }
    document.getElementById("rightArrow").onclick = function(){
        if(current != 5){
            current++;
            document.getElementById("video").src = videos[current];
        }
    }
})
