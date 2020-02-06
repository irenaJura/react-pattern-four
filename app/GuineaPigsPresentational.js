import React from 'react';

export const GuineaPigsPresentational = (props) => {
    const src = props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
    </div>
    )
}
