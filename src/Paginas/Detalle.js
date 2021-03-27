import React from 'react';
import { useParams } from 'react-router';


function Detalle(props) {

    const{state} = props.location

    

    const f = state[0]

    console.log(f.id)

    

    return(
        <div >
            <h4>{f.producto}</h4>
        </div>
    )
}

export default Detalle;