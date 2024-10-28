import React from 'react';

function ManageAddresses({ addresses }) {
    return (
        <div>
            <h3>Manage Addresses</h3>
            <ul>
                {addresses.map((addr, idx) => (
                    <li key={idx}>
                        <p>{addr.houseNo}, {addr.road} - {addr.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ManageAddresses;
