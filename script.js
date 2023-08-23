var reason=["Trees Provides Shade","Prevents Landslides","Make The Soil Fertile","Prevents Floods"];
var images=["img2.jpeg","img3.jpg","img4.webp","img5.png"];
var i=0;

function next(){
    if(i<images.length){
        document.getElementById("treeImg1").src=images[i];
        document.getElementById("heading2").innerHTML=reason[i];
    i++;
    }

    else{
        document.getElementById("treeImg1").src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?b=1&s=170667a&w=0&k=20&c=VqVR2PMyaneOTn8f6wgEgM2V-zsHCzFMk6Wnm_kAf_k=";
        document.getElementById("heading2").innerHTML="Trees Provides Oxygen";
    i=0;
    }
}