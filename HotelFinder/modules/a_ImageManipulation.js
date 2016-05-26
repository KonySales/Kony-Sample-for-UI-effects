

//This function captures an image from the form snapshot and manipulates the same.

function testAnim(){
  kony.timer.schedule("delaycheck",callback,.1,false);
  function callback(){
   var formSnap = kony.image.createImageFromSnapShot(frmHotelsList);
  
  	var tempfilter = kony.filter.createFilter();
      filterData= {
        "filterName": kony.filter.GAUSSIAN_BLUR,
        "inputImage": formSnap,
        "inputRadius": 3
       
    };
  tempfilter.applyFilter(filterData);
 
  formSnap = tempfilter.getOutputImage();
  
  frmHotelsList.imgDummy.image = formSnap;
  frmHotelsList.imgDummy.isVisible = true;
  frmHotelsList.segList.isVisible = false;
  frmHotelsList.flxMap.isVisible = false;
  
  
  frmHotelsList['imgDummy'].animate(
    kony.ui.createAnimation({
      0:{left:"-2%","stepConfig":{}},100:{left:"-102%","stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:1.5},
    {animationEnd: function() {}});
     
  
  frmHotelsList['flxDetails'].animate(
    kony.ui.createAnimation({
      0:{left:"100%","stepConfig":{}},100:{left:"0%","stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:1.4},
    {animationEnd: function() {}});
    
  }
 	
  
}

//Function to Navigate back from the details

function backNav(){
     
  frmHotelsList['flxDetails'].animate(
    kony.ui.createAnimation({
      0:{left:"0%","stepConfig":{}},100:{left:"100%","stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0},
    {animationEnd: function() {}});
  
  frmHotelsList.imgDummy.isVisible = false;
  frmHotelsList.segList.isVisible = true;
    frmHotelsList.flxMap.isVisible = true;
}
