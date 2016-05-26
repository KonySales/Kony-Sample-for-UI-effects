
// This function is used to apply a 3D transform while toggling between the Menu items.

function transform_Card(){
  var cardAngle=null;
  var searchModeWidget=null;
  var searchModeHidden=null;
  var togglePos=null;
  var newDocSearchResultsMode=null;
  if (docSearchResultsMode=="map"){

    cardAngle=180;
    newDocSearchResultsMode="list";
  	searchModeWidget="flxMap";
    searchModeHidden="segList";
    togglePos="50%";

  }
  else if(docSearchResultsMode=="list"){

    cardAngle=0;
    newDocSearchResultsMode="map";
    searchModeWidget="segList";
    searchModeHidden="flxMap";
    togglePos="0%";
  }

  // Animating the Underline under the button
  
     frmHotelsList['flxUnderline'].animate(
      kony.ui.createAnimation({
        100:{left:togglePos,"stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.3},
      {animationEnd: function() {}});
  
  var transRotA = kony.ui.makeAffineTransform();
    transRotA.setPerspective(1000.0);
    transRotA.rotate3D(0, 0, 1,0);
  
  var transRotB = kony.ui.makeAffineTransform();
    transRotB.setPerspective(1000.0);
    transRotB.rotate3D(90, 0, 1,0);
  
  var transRotC = kony.ui.makeAffineTransform();
    transRotC.setPerspective(1000.0);
    transRotC.rotate3D(-90, 0, 1,0);
  
  var transRotD = kony.ui.makeAffineTransform();
    transRotD.setPerspective(1000.0);
    transRotD.rotate3D(0, 0, 1,0);
  

  //Animating the Flex Container Card
  
  frmHotelsList['flxHotelCard'].animate(
    kony.ui.createAnimation({
      0:{transform:transRotA,"stepConfig":{}},
      49.9:{transform:transRotB,"stepConfig":{"timingFunction": kony.anim.LINEAR}},
      50:{transform:transRotC,"stepConfig":{"timingFunction": kony.anim.LINEAR}},
      100:{transform:transRotD,"stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.4},
    {animationEnd: function() {
      docSearchResultsMode=newDocSearchResultsMode;
    }});
  frmHotelsList[searchModeWidget].isVisible=true;
  
  //Animating the Hidden Widget(Either Map to List or vice versa)
  

  
  frmHotelsList[searchModeWidget].animate(
    kony.ui.createAnimation({
      0:{zIndex:1,"stepConfig":{}},
      49.9:{zIndex:1,"stepConfig":{"timingFunction": kony.anim.LINEAR}},
      50:{zIndex:2,"stepConfig":{"timingFunction": kony.anim.LINEAR}},
      100:{zIndex:2,"stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.4},
    {animationEnd: function() {}});
    
   frmHotelsList[searchModeHidden].animate(
    kony.ui.createAnimation({
      0:{zIndex:2,"stepConfig":{}},
      49.9:{zIndex:2,"stepConfig":{"timingFunction": kony.anim.LINEAR}},
      50:{zIndex:1,"stepConfig":{"timingFunction": kony.anim.LINEAR}},
      100:{zIndex:1,"stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.4},
    {animationEnd: function() {
    }});
  
  //flxHotelCard.Map01357589b5f2747.address={"location" : " Grand Cypress Blvd, Orlando, United States"};

  
  // Adding a Tint Card for a better VFX
  
  frmHotelsList.flxTintCard.isVisible=true;
  frmHotelsList['flxTintCard'].animate(
  	kony.ui.createAnimation({
      0:{opacity:0,"stepConfig":{}},
      49.9:{opacity:0.6,"stepConfig":{"timingFunction": kony.anim.LINEAR}},
      50:{opacity:0.6,"stepConfig":{"timingFunction": kony.anim.LINEAR}},
      100:{opacity:0,"stepConfig":{}}}),
    {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.4},
    {animationEnd: function() {
      	frmHotelsList.flxTintCard.isVisible=false;
    }});
  
  frmHotelsList.flxHotelCard.Map01357589b5f2747.address={"location" :"Grand Cypress Blvd, Orlando, United States"};
  //frmHotelsList.flxHotelCard.Map01357589b5f2747.navigateTo(2,true);
}