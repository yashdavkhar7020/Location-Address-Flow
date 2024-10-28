import React from 'react';

function LocationPrompt({ onEnableLocation, onSearchManually }) {
    return (
        <div className="modal">
            <h2>Allow Location Access</h2>
            <button onClick={onEnableLocation}>Enable Location</button>
            <button onClick={onSearchManually}>Search Manually</button>
        </div>
    );
}

export default LocationPrompt;
