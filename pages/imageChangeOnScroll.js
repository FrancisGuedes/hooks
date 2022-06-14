import React, {useState, useEffect} from 'react';
import ImageToggleOnScroll from '../src/imageToggleOnScroll';

const ImageChangeOnScroll = () => {
  const imageArray = [10808, 10803, 1530, 1269, 1124];
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseEventCount, setMouseEventCount] = useState(0);

  useEffect( () => {
    window.document.title = `Speaker ${currentSpeakerId}`;
    console.log(`useEffect setting title to: ${currentSpeakerId}`);
  }, [currentSpeakerId]);

  return(
    <div>
    <span>mouseEvenCount ${mouseEventCount}</span>
      {imageArray.map((item, index) => {
        return (
          <div 
            key={index}
            onMouseOver={() => {
              setCurrentSpeakerId(item);
              setMouseEventCount(mouseEventCount + 1);
              console.log(`onMouseOver: ${item}`);
              } 
            }
          >
            <ImageToggleOnScroll 
              primaryImg={`./../static/speakers/black-and-white/Speaker-${item}.jpeg`} 
              secondaryImg={`./../static/speakers/Speaker-${item}.jpeg`}
              alt=''
              />
            &nbsp;&nbsp;&nbsp;
          </div>
        );
      })};
    </div>
  );
};

export default ImageChangeOnScroll;