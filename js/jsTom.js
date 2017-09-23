$(document).ready(function(){
    var videos = ["https://www.youtube.com/embed/RQZbC5TmD40","https://www.youtube.com/embed/RE_COjB5tCE","https://www.youtube.com/embed/arTyiq3KLyk","https://www.youtube.com/embed/f9NKBnkojvs","https://www.youtube.com/embed/3NJckq0w9RA","https://www.youtube.com/embed/LXMUpZQXdOc"];
    
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
