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
    <BackgroundColor className="container">
        <H1styles>{title}</H1styles>
        <WordStyle>{date}</WordStyle>
        <img src={imgData} />
        <h3 className="explain">{explanation}</h3>
        <WordStyle>{copyright}</WordStyle>
    </BackgroundColor>
    );
}