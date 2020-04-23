import React from 'react';

const SetExplanation = props => {
    if (!props.nasa) return <h3>Loading ...</h3>

    return (
        <p>{props.nasa.explanation}</p>
    )
};

export default SetExplanation;