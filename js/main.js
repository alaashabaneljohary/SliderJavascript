let itemImgList = Array.from( document.querySelectorAll('#itemImg img')) ;
let lightBoxSlider = document.getElementById('lightBoxSlider');
let nextSlider = document.getElementById('next') ;
let prevSlider = document.getElementById('prev');
var currentIndexSlide ;

for(var i = 0 ; i < itemImgList.length ; i++)
{
    itemImgList[i].addEventListener('click',function(e){

     var imgSrc = e.target.getAttribute('src');
     lightBoxSlider.src = `${imgSrc}` ;
      currentIndexSlide =  itemImgList.indexOf(e.target);
      console.log(currentIndexSlide);
    })
}


function nextSlide()
{
    currentIndexSlide = currentIndexSlide + 1 ;
     if(currentIndexSlide > itemImgList.length)
     {
        currentIndexSlide = 0 ;
     }
    
        var imgSrc =  itemImgList[currentIndexSlide].src;
        lightBoxSlider.src = `${imgSrc}` ;
    
}
nextSlider.addEventListener('click',nextSlide);


function prevSlide()
{
    currentIndexSlide = currentIndexSlide - 1 ;
     if(currentIndexSlide < 0)
     {
        currentIndexSlide = itemImgList - 1 ;
     }
    
        var imgSrc =  itemImgList[currentIndexSlide].src;
        lightBoxSlider.src = `${imgSrc}` ;
    
}
prevSlider.addEventListener('click',prevSlide);
