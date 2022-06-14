import React, { useEffect, useRef, useState, useContext } from 'react';
import { GlobalContext } from './GlobalState';

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { imageRerenderIdentifier } = useContext(GlobalContext);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return() => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [imageRerenderIdentifier]);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return(
    <div>
      <img
        style={{width: '300px', height: '300px'}}
        src={
          inView 
          ? secondaryImg 
          : primaryImg
        } 
        alt=''
        ref={imageRef}
      />
    </div>
  );
};

export default ImageToggleOnScroll;