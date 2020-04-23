import React from "react";

const SetImage = props => {
    if(!props.nasa) return <h3>Loading ...</h3>
    return (
        <img src={props.nasa.url} alt=''/>
    )
};

export default SetImage;
