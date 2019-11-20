import React, {useState, useEffect} from 'react';
import NasaPhoto from "./photo";
import axios from 'axios'

export default function DisplayPhoto() {

const [nasaData, setNasaData] = useState();

    useEffect(() => {
    axios 
        .get('https://api.nasa.gov/planetary/apod?api_key=vbimrN7Y9hTOMeCEpSFqkevoB1p3yRJv5UgNjz6P')
        .then(response => {
            console.log(response)
            setNasaData(response.data.hdurl)
        })
    }, [])

return (
    <div className="container">
        {nasaData.map(url => {
          return <NasaPhoto imgUrl={url} />
        })}
      </div>
    );
}