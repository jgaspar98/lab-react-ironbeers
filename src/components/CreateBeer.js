import React from 'react';

function CreateBeer() {
    const nameRef = React.useRef();
    const taglineRef = React.useRef();
    const descriptionRef = React.useRef();
    const first_brewedRef = React.useRef();
    const brewer_tipsRef = React.useRef();
    const attebuation_levelRef = React.useRef();
    const contributed_byRef = React.useRef();

    const handleFromSubmit = (event) => {
        event.preventDefault();

        let name = nameRef.current.value;
        let tagline = taglineRef.current.value;
        let description = descriptionRef.current.value;
        let first_brewed = first_brewedRef.current.value;
        let brewer_tips = brewer_tipsRef.current.value;
        let attebuation_level = attebuation_levelRef.current.value;
        let contributed_by = attebuation_levelRef.current.value;


        let newBeer = { name, tagline, description, first_brewed, brewer_tips, attebuation_level, contributed_by}
        
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then((response) => {
            
        })

    }

    return (
        <from onSubmit={handleFromSubmit}>
            <label>Name</label>
            <input type='text' ref={nameRef}/>
            <label>TagLine</label>
            <input type='text' ref={taglineRef}/>
            <label>Description</label>
            <input type='text' ref={descriptionRef}/>
            <label>First_brewed</label>
            <input type='text' ref={first_brewedRef}/>
            <label>brewer_tips</label>
            <input type='text' ref={brewer_tipsRef}/>
            <label>Attebuation_level</label>
            <input type='number' ref={attebuation_levelRef}/>
            <label>Contribution</label>
            <input type='text' ref={contributed_byRef} />
            <button type="submit">Create</button>
        </from>   
    )
}

export default CreateBeer