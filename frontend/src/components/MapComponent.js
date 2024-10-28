import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function MapComponent({ location }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            center={location}
            zoom={14}
            mapContainerStyle={{ width: '100%', height: '400px' }}
        >
            <Marker position={location} draggable={true} />
        </GoogleMap>
    );
}

export default MapComponent;
