import React from 'react';
import '../assets/css/Producto.css';
import { useParams } from 'react-router';
import Producto from './Producto';

import '../assets/css/Producto.css';

function Productos() {
   
    const {userInput} = useParams();

    return(

        <div>
            <div id="barra" className="container w-100">
                <button>Regresar a la busqueda</button>
            </div>
            <div id="producto" className="container-fluid d-flex justify-content-center row w-100">
                
                <div className="col-12">
                    <h1>PRODUCTOS</h1>
                </div>
                <div className="col-12 w-100">
                    <Producto
                    producto = {userInput}
                    />
                </div>
            </div>
        </div>
    )
    
}
export default Productos;