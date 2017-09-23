$(document).ready(function(){
    var videos = ["https://www.youtube.com/embed/UafunGiDtUk","https://www.youtube.com/embed/xsTn_ACffdc","https://www.youtube.com/embed/JhN21kK7t8Y","https://www.youtube.com/embed/cXpQX-KAxbE","https://www.youtube.com/embed/Vj4f8L9oBOU"];
    
    var current=0;
    document.getElementById("leftArrow").onclick = function(){
        if(current != 0){
            current--;
            document.getElementById("video").src = videos[current];
        }
    }
    document.getElementById("rightArrow").onclick = function(){
        if(current != 4){
            current++;
            document.getElementById("video").src = videos[current];
        }
    }
})
