import React from 'react';
import axios from 'axios';
import './Beers.css';
import { Link } from "react-router-dom";
import Header from './Header';



function Beers() {
    const [beers, setBeers] = React.useState([]);

    //Get all the beers using hooks
    React.useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
          setBeers(response.data)
          console.log(response.data);
        })
    }, []);

    return (
        <ul>
            <Header/>
            {beers.map((beer) => {
                return (
                    <li className='li-beers' key={beer._id}>
                        <img className='li-image' src={beer.image_url}/> 
                        <div className='li-info'>
                            <h2>Name: {beer.name}</h2>
                            <p>Created By: {beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}>
                                <h2>Details</h2>
                                </Link>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
  
}
export default Beers;