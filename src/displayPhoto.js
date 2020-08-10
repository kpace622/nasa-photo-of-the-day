import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from "styled-components"


const BackgroundColor = styled.div`
  background-color: #5d5c61;

`;

const H1styles = styled.h1`
    padding: 20px;
    color: #557a95;
    margin: 0;
    background-color: #b1a296;
`

const WordStyle = styled.h4`
    color: #557a95;
`

export default function DisplayPhoto() {

    const [imgData, setImgData] = useState({});

    useEffect(() => {
        axios 
            .get(`https://api.nasa.gov/planetary/apod?api_key=vbimrN7Y9hTOMeCEpSFqkevoB1p3yRJv5UgNjz6P`)
            .then(response => {
                setImgData(response.data)
                })
                .catch(err => {
                    console.log(err)
                })
            }, []);

return (
    <BackgroundColor className="container">
        {console.log(imgData)}
        <H1styles>{imgData.title}</H1styles>
        <WordStyle>{imgData.date}</WordStyle>
        <img src={imgData.url} />
        <h3 className="explain">{imgData.explanation}</h3>
        <WordStyle>{imgData.copyright}</WordStyle>
    </BackgroundColor>
    );
}