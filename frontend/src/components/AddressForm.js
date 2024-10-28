import React, { useState } from 'react';

function AddressForm({ onSaveAddress }) {
    const [addressDetails, setAddressDetails] = useState({
        houseNo: '',
        road: '',
        category: 'Home',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressDetails({ ...addressDetails, [name]: value });
    };

    const handleSave = () => {
        onSaveAddress(addressDetails);
    };

    return (
        <form>
            <input name="houseNo" placeholder="House/Flat/Block No." onChange={handleChange} />
            <input name="road" placeholder="Apartment/Road/Area" onChange={handleChange} />
            <select name="category" onChange={handleChange}>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Friends & Family">Friends & Family</option>
            </select>
            <button type="button" onClick={handleSave}>Save Address</button>
        </form>
    );
}

export default AddressForm;
