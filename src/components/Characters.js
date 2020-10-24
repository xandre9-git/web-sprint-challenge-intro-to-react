import React, { useState, useEffect } from 'react';
import axios from "axios";
import App from '../App';
import Character from "./Character"



const Characters = () => {

const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get('https://swapi.py4e.com/api/people/')
        .then(res => {
          setData(res.data.results)
  
        }).catch(err => {
          console.log('The data did not return successively.', err)
        })
  
    }, []);
  
    console.log(data)

  
    const iterate = data.map(e => {
        console.log(e.name)
        console.log(e.mass)
        return e;
    })

    console.log(iterate)
  
  return (
    <div>
      {data.map(e => {
          return <Character key={e} name={e.name} mass={e.mass} />
      })}  
    </div>
  );
};

export default Characters;