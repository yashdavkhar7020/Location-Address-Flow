import React, { useState } from 'react';
import LocationPrompt from './components/LocationPrompt';
import MapComponent from './components/MapComponent';
import AddressForm from './components/AddressForm';
import ManageAddresses from './components/ManageAddresses';

function App() {
    const [location, setLocation] = useState(null);
    const [addresses, setAddresses] = useState([]);

    const handleEnableLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => console.error(error),
            { enableHighAccuracy: true }
        );
    };

    const handleSaveAddress = (addressDetails) => {
        setAddresses([...addresses, addressDetails]);
    };

    return (
        <div className="App">
            {!location && <LocationPrompt onEnableLocation={handleEnableLocation} />}
            {location && (
                <>
                    <MapComponent location={location} />
                    <AddressForm onSaveAddress={handleSaveAddress} />
                    <ManageAddresses addresses={addresses} />
                </>
            )}
        </div>
    );
}

export default App;
