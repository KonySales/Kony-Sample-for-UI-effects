
//This function animates the segment rows.

function animate_Segment(){
  
  	var transformProp1 = kony.ui.makeAffineTransform();
	transformProp1.scale(0.0,0.0); 
	var transformProp2 = kony.ui.makeAffineTransform();
	transformProp2.scale(0.5,0.5);
	var transformProp3 = kony.ui.makeAffineTransform();
	transformProp3.scale(1,1);
  
	animationDef = {0  : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp1},
                            50 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp2},
        					100 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp3}
      						} ;
	
  	animationConfig = {
  	 	"duration": 0.3,
      	"iterationCount":1,
      	"delay":0,
   		"fillMode": kony.anim.FILL_MODE_FORWARDS
	};

	animationDefObject = kony.ui.createAnimation(animationDef);
	frmHotelsList.segList.setAnimations({
   		visible:{ 
   	   		definition: animationDefObject, 
      		config:animationConfig, 
      		callbacks:null }
	});
}

