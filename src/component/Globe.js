import React,{useState} from "react";
import ReactGlobe from 'react-globe';
// import markers from "./markers";
// import Imageglobe from './../assets/images/globe-image.jpg'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';


const DraggableGlobe = () => { 
  const [globe, setGlobe] = useState(null);
  const options = {
    ambientLightColor: 'white',
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    pointLightColor: 'white',
    pointLightIntensity: 1.5,
    // globeGlowColor: 'black',
    markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
  };

  return (
     <ReactGlobe
        height="100vh"
        // globeTexture={"https://www.createwithdata.com/img/react-d3-globe/react-d3-globe.png"}
        globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
        globeBackgroundTexture="https://www.createwithdata.com/img/react-d3-globe/react-d3-globe.png"
        initialCoordinates={[1.3521, 103.8198]}    
        onGlobeTextureLoaded={() => console.log('globe loaded')}    
        // markers={markers}
        options={options}
        width="100vw"
      />

  
  ) 
}

export default DraggableGlobe;
