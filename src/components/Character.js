// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import App from "../App"
import ChangeBackground from "./ChangeBackground"
import RevertBackground from "./RevertBackground"
import revertBackground from "./RevertBackground";


const Character = (props) => {

     const Button = styled.button`
        width: 350px;
        height: 48px;
        background-color: #B6571D;
        color: #ffffff;
        font-size: 24px;
        border: 1px solid black;        
    `
    //gender
    //name


    return (
        <div><Button onMouseOver={ChangeBackground} onMouseLeave={revertBackground} >{props.name} {props.mass} kg</Button><p></p></div>


    )
}

export default Character;






// import React, { useState, useEffect } from "react";
// import axios from "axios"
// import Body from "./Body.js"
// import styled from "styled-components"

// const Header = () => {

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios
//             .get('https://api.nasa.gov/planetary/apod?api_key=iYQxxWxjt2VdhqdIAsPBtpPDEpUnFRKPLdpZr9ig&date=2020-10-23')
//             .then(response => {
//                 setData(response.data);
//             })
//             .catch(err => {  // err function in case promise is unfulfilled
//                 console.log('The data was not returned.', err)
//             })

//     }, []);

//     console.log(data)

//     const H1 = styled.h1`
//         color: pink;
//     `;

//     return (

//         <div>
//             <H1>Nasa's Astronomy Picture of the Day</H1>
//             <Body url={data.url} title={data.title} explanation={data.explanation} />
//         </div>
//     )
// }

// export default Header;