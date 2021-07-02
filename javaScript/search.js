  
let Search1 = "";


let ImageNumber = 0;

let ImageNumberMax = 0;

let formButton = document.getElementsByClassName("bubbly-button")[0];
formButton.addEventListener('click', function(){
    var x = document.getElementById("TheForm");
    Search1 = x.elements[0].value;
    console.log(Search1);
    
    GetImageFunction(Search1,  ImageNumber);
    ImageNumber = 0;

});
formButton.style.cursor = "pointer";

let NextButton = document.getElementsByClassName("next")[0];
NextButton.addEventListener('click', function(){
    if(ImageNumber < ImageNumberMax-1){
        ImageNumber++;
    }
    
    GetImageFunction(Search1, ImageNumber);


});
NextButton.style.cursor = "pointer";

let PreviousButton = document.getElementsByClassName("prev")[0];
PreviousButton.addEventListener('click', function(){
    
    if(ImageNumber >= 1){
        ImageNumber--;
    }
    GetImageFunction(Search1, ImageNumber);

});
PreviousButton.style.cursor = "pointer";
function GetImageFunction(Search1,  ImageNumber){
    let url = new URL("https://pixabay.com/api/?key=17249747-a0b1849993e621cd83b0b32b8&q=" );
    let count = 0;
    if(Search1 != ""){
        url += Search1;
        count++;
    }
    
  
    
    if(count != 0){

        
        url +=  "&image_type=photo&pretty=true";
        console.log(url);
        

        fetch(url)
        .then(respones => respones.json())
        .then((LoadImage) => {
            if(LoadImage.total > 20){
                ImageNumberMax = 20;
            }
            else{
                ImageNumberMax = LoadImage.total;
                
            }
            document.querySelector(".Image_Count").innerHTML = ImageNumber+1 + " / " + ImageNumberMax; 
            console.log(LoadImage.total)
            console.log(LoadImage);
            RandomImage(LoadImage.hits[ImageNumber]);
            
        })
    .catch((error) => console.warn("Error", error));

        const RandomImage = (ImageDetails) => {
            document.querySelector(".ranImage").src = ImageDetails.largeImageURL;
            document.querySelector(".Image_Information").innerHTML = '<a href="'+ImageDetails.pageURL+'" target="blank" >Go to image source</a>';
            
        }; 
    }  
    else{
        document.querySelector(".Image_Information").innerHTML = "Please insert a word";
    } 
}
    
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }






    
