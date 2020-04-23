import React from "react";

const SetTitle = props => {
    if (!props.nasa) return <h3>Loading...</h3>
    return (
        <div>
            <h1>{props.nasa.title}</h1>
        </div>
    );
};

export default SetTitle;