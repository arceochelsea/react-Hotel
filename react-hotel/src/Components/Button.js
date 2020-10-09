import React from 'react';

export default function Button(props) {

    console.log(props);

    return (
       <button onClick={props.onClick}>
        
       </button>
    )
}