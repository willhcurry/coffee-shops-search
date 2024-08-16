'use client';
import { useState } from 'react';

type PositionType = {
  coords: { latitude: number; longitude: number };
}

function useTrackLocation() {
    const [isFindingLocation, setIsFindingLocation] = useState(false);
  const success = (position: PositionType) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
  }

    const error = () => {
        setIsFindingLocation(false);
    console.log("Unable to retrieve your location");
  }

  const handleTrackLocation = () => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
        console.log("Locating…");
        setIsFindingLocation(true);
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  }

    return {
        isFindingLocation,
        handleTrackLocation
  }
}

export default useTrackLocation;