'use client';

import React from 'react'
import Banner from './banner.client'
import useTrackLocation from '@/hooks/use-track-location';

export default function NearbyCoffeeStores() {
    const { handleTrackLocation, isFindingLocation } = useTrackLocation();
    
    const handleOnClick = () => {
        handleTrackLocation();
    };

    return (
        <div>
            <Banner 
                handleOnClick={handleOnClick}
                buttonText={isFindingLocation ? 'Locating...' : 'View stores nearby'} 
            />
        </div>
    )
}