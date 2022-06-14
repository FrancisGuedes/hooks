import React from 'react';
import ImageToggleOnMouseOver from '../src/imageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {

  return(
    <div>
      <ImageToggleOnMouseOver 
        primaryImg="./../static/speakers/black-and-white/Speaker-10803.jpeg" 
        secondaryImg='./../static/speakers/Speaker-10803.jpeg'
        alt=''
        />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver 
        primaryImg="./../static/speakers/black-and-white/Speaker-10808.jpeg" 
        secondaryImg='./../static/speakers/Speaker-10808.jpeg'
        alt=''
        />
    </div>
  );
};

export default ImageChangeOnMouseOver;