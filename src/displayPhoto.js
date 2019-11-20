import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function DisplayPhoto() {

    const [imgData, setImgData] = useState();
    const [date, setDate] = useState();
    const [title, setTitle] = useState();
    const [copyright, setCopyright] = useState();
    const [explanation, setExplanation] = useState();
    
    useEffect(() => {
    axios 
        .get(`https://api.nasa.gov/planetary/apod?api_key=vbimrN7Y9hTOMeCEpSFqkevoB1p3yRJv5UgNjz6P`)
        .then(response => {
            console.log(response)
            setImgData(response.data.url)
            setDate(response.data.date)
            setTitle(response.data.title)
            setCopyright(response.data.copyright)
            setExplanation(response.data.explanation)
        });
    }, []);

return (
    <div className="container">
        <h1>{title}</h1>
        <h4>{date}</h4>
        <img src={imgData} />
        <h3 className="explain">{explanation}</h3>
        <p>{copyright}</p>
    </div>
    );
}