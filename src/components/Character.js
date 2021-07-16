// Write your Character component here
import React, { useState } from 'react';
import axios from 'axios'

import styled from 'styled-components'

const StyledCharacter = styled.div`
    background-color:;
    position:center;
    padding:10px;
    margin-bottom:10px;
    

    
    
    button{
        margin-left:10%;
    }
    
    
`

const StyledDetails = styled.div`
    color:red;
    background-color:black;
    padding: 10px
    display:flex;
    

`




export default function Character({info}){
    
    const [detailsOpen, setDetailsOpen] = useState(false)

    // const = id => {
    //   setDetailsOpen(id)
    // }
    
    // const  = () =>{
    //   setDetailsOpen(null)
    // }  
    
    
    
    return(
        
    <StyledCharacter>
            {info.name}
            <button onClick={() => setDetailsOpen(!detailsOpen)}>
                Details
            </button>
        
        
            {detailsOpen && (
            <StyledDetails info={info}  >
            
            <p>Height: {info.height}</p>
            <p>Weight: {info.mass}</p>
            <p>DOB: {info.birth_year}</p>
            <p>Gender: {info.gender}</p>
            <p>Eye Color: {info.eye_color} </p>
        
        </StyledDetails>)}
    </StyledCharacter>
        
    )
}