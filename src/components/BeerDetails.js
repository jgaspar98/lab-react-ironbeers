import React from 'react';
import axios from 'axios';

function BeerDetails({match}) {
    const [beer, setbeer] = React.useState({
        image: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attebuation_level: '',
        description: '',
        contributed_by: ''
    })

    React.useEffect(() => {
        const id = match.params.id;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((response) => {
          setbeer(response.data)
        })
    }, [match.params.id]);

    return (
        <div>
            <img src={beer.image_url}/>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attebuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
    
}

export default BeerDetails