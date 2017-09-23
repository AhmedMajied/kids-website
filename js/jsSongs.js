$(document).ready(function(){
    var videos = ["https://www.youtube.com/embed/pU57n5BIIYc","https://www.youtube.com/embed/AdQCja4MBcY","https://www.youtube.com/embed/EV_A78CkOek","https://www.youtube.com/embed/B0BC-5Z6BFo","https://www.youtube.com/embed/d3FkOkSE1i8","https://www.youtube.com/embed/zCnbmXlD3AI","https://www.youtube.com/embed/XXILQE24qEs","https://www.youtube.com/embed/UkQWkE7c0Yc","https://www.youtube.com/embed/_qVqj-Zsc9I","https://www.youtube.com/embed/5E-12ww1XuQ"];
    
    var current=0;
    document.getElementById("leftArrow").onclick = function(){
        if(current != 0){
            current--;
            document.getElementById("video").src = videos[current];
        }
    }
    document.getElementById("rightArrow").onclick = function(){
        if(current != 9){
            current++;
            document.getElementById("video").src = videos[current];
        }
    }
})
