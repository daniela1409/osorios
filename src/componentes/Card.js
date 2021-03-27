import React from 'react'
import '../assets/css/Card.css'
import { Link } from 'react-router-dom'

class Card extends React.Component{

    /*
    state = {
        
        id : "",
        producto : "",
        valor : "",
        cantida : "",
        imagen : ""
    }*/
    

    render(){
        
        

        //console.log (this.state)

        const {id, producto, valor, cantidad, imagen} = this.props; 

       
        
        return(

            <div className="card container-fluid w-75 col-12 my-4" id="card">
                
                <div className = "card-body w-100 row" id="body">

                    <div className = "col-4">
                        <img src={imagen}/>
                    </div>
                    <div className = "col-8 row w-100">
                        <h6 >{id}</h6>
                        <h4>{producto}</h4>
                        <div className = "col-8 ">
                            <h6 >Valor: {valor}</h6>
                            <h6>Cantidad: {cantidad}</h6>
                        </div>
                        <Link to={{pathname:`/Producto/Detalle/${id}`, state:[{id: id, producto: producto, valor: valor, cantidad: cantidad, imagen: imagen}]}} >
                            ir
                        </Link>
                        
                    </div>
                   
                </div>
            </div>
            
        )
    }
}

export default Card