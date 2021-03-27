import React from 'react';
import Card from '../componentes/Card';

class Producto extends React.Component{
    state={

        productos:[]
    }
    
    
    
    async componentDidMount(){
        await this.fetchProductos()
    }

    fetchProductos = async () => {
        
        let res = await fetch('https://api.mercadolibre.com/sites/MCO/search?q='+ this.props.producto)
        let data = await res.json()
        var productos = data.results
        this.setState({
            productos
        })
        
    }


    render(){
        return(
            <div >
                
                
                {
                    
                    this.state.productos.map((prod) => {

                        

                        return(

                            <Card
                                id = {prod.id}
                                producto = {prod.title}
                                valor = {prod.price}
                                cantidad = {prod.available_quantity}
                                imagen = {prod.thumbnail}
                                key = {prod.id}
                            
                            />
                        )
                            
                        
                        
                    })
                }

            </div>

        )
    }
}

export default Producto;