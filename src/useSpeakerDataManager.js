
import speakersReducer from './speakersReducer';
import axios from 'axios';
import { useEffect, useReducer } from 'react';

const useSpeakerDataManager = () => {
  const [
    {
      isLoading,
      speakerList,
      favoriteClickCount,
      hasErrored,
      error,
      imageRerenderIdentifier,
    },
    dispatch,
  ] = useReducer(speakersReducer, {
    isLoading: false,
    speakerList: initialSpeakersData,
    favoriteClickCount: 0,
    hasErrored: false,
    error: null,
    imageRerenderIdentifier: 0,
  });

  function incrementFavoriteClickCount() {
    dispatch({ type: 'incrementFavoriteClickCount' });
  }

  function forceImageRerender() {
    dispatch({ type: 'forceImageRerender' });
  }

  const toggleSpeakerFavorite = (speakerRec) => {
    const updateData = async function () {
      axios.put(`/api/speakers/${speakerRec.id}`, {
        ...speakerRec,
        favorite: !speakerRec.favorite,
      });
      speakerRec.favorite === true
        ? dispatch({ type: 'unfavorite', id: speakerRec.id })
        : dispatch({ type: 'favorite', id: speakerRec.id });
    };
    updateData();
  }
  useEffect(() => {
    // new Promise(function (resolve) {
    //   setTimeout(function () {
    //     resolve();
    //   }, 1000);
    // }).then(() => {
    //   dispatch({
    //     type: 'setSpeakerList',
    //     data: SpeakerData,
    //   });
    // });
    const fetchData = async function () {
      try {
        let result = await axios.get('/api/speakers');
        dispatch({ type: 'setSpeakerList', data: result.data });
      } catch (e) {
        dispatch({ type: 'errored', error: e });
      }
    };
    fetchData();

    return () => {
      console.log('cleanup');
    };
  }, []);
  return {
    isLoading,
    speakerList,
    favoriteClickCount,
    incrementFavoriteClickCount,
    toggleSpeakerFavorite,
    hasErrored,
    error,
    forceImageRerender,
    imageRerenderIdentifier,
  };
}
export default useSpeakerDataManager;