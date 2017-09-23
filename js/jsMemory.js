var coverImage = "images\\6.jpg";

var cover_images_id = ["org1" , "org2" , "org3" , "org4" , "org5" , "org6" , "org7" , "org8" , "org9" , "org10" ]; 

var org_images = [
            "images\\1.png" ,
			"images\\2.png" ,
			"images\\3.png" ,
			"images\\4.png" ,
			"images\\5.png" ,
			"images\\3.png" ,
			"images\\5.png" ,
			"images\\4.png" ,
			"images\\2.png" ,
			"images\\1.png"];

var num_of_clicks = 0;
var selected_image = -1;
var matched_images = 0;
var randIndex, tmp, currentIndex;

// shuffle array
for (currentIndex = org_images.length; currentIndex; currentIndex--) {
    randIndex = Math.floor(Math.random() * currentIndex);
    tmp = org_images[currentIndex - 1];
    org_images[currentIndex - 1] = org_images[randIndex];
    org_images[randIndex] = tmp;
    }

function flip(image_index) {
	
	if(selected_image == image_index)
		return;

	if(num_of_clicks == 2){
		num_of_clicks=0;
		selected_image= -1;
		cover_images(image_index);		
	}
	
	document.getElementById(cover_images_id[image_index]).src=org_images[image_index];
	num_of_clicks++;	
	
	if( matched_images == 8 ){
		match_last_image(image_index);
        
        var right_sound = new Audio('audios\\right_sound.mp3');
        right_sound.play();
		
        setTimeout( function() { location.reload();} , 1900);
		return;
	}	
	
	if(org_images[selected_image] == org_images[image_index]){		
		matched_images += 2;
		num_of_clicks = 0;
	
		setTimeout( function() { 
				hide_images(image_index,selected_image);
				selected_image= -1;
				}, 450);		
	}
	else{
		selected_image= image_index;
	}
}

function match_last_image(image_index){
	for(i=0;i < org_images.length;i++){
		if( i != image_index && org_images[image_index] == org_images[i] ){
			document.getElementById(cover_images_id[i]).src=org_images[i];
			setTimeout( function() { hide_images(i,image_index);}, 450);
			break;
		}
	}
}

function hide_images(image1_index , image2_index){
	document.getElementById(cover_images_id[image1_index]).style.visibility= "hidden";
	document.getElementById(cover_images_id[image2_index]).style.visibility= "hidden";
}

function cover_images(image_index){
	for( i=0;i<org_images.length;i++){
		if(image_index != i)
			document.getElementById(cover_images_id[i]).src=coverImage;
	}
}

function show_alert(){
	alert("Congratulations");
}

