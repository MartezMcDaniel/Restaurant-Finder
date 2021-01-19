import React from 'react';

function Restaurant({item}) {
    return (
        <div>
            {item.name}
            {item.id}
        </div>
    );
}

export default Restaurant;
