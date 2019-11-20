import React from "react";
import { tsPropertySignature } from "@babel/types";

const NasaPhoto = props => {
    return (
        <div className="photo-container">
            <img className="nasa-img" src={props.imgUrl} />
            <h2>Nasa Photo of the Day!</h2>
        </div>
    )
}

export default NasaPhoto