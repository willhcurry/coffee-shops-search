'use client';
import { useState } from 'react';

type PositionType = {
  coords: { latitude: number; longitude: number };
}

function useTrackLocation() {
  const [isFindingLocation, setIsFindingLocation] = useState(false);
  const [longLat, setLongLat] = useState('');
  const [locationErrorMsg, setLocationErrorMsg] = useState('');

  const success = (position: PositionType) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLongLat(`%{longitude}, ${latitude}`);

    setIsFindingLocation(false);
    setLocationErrorMsg('');
    console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
  }

    const error = () => {
      setIsFindingLocation(false);
      setLocationErrorMsg('Unable to retrieve your location');
    console.log("Unable to retrieve your location");
  }

  const handleTrackLocation = () => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
      setIsFindingLocation(true);
      setLocationErrorMsg('');
    } else {
      console.log("Geolocation is not supported by your browser");
      setLocationErrorMsg('Geolocation is not supported by your browser');
      
    }
  }

  return {
      longLat,
      isFindingLocation,
    handleTrackLocation,
      locationErrorMsg
  }
}

export default useTrackLocation;