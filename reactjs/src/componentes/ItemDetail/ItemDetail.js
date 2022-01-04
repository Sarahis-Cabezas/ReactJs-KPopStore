import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useCounter } from '../../hooks/useCounter'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({item}) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const {counter, increment, decrement} = useCounter(0, item.stock, 0)

    const navigate = useNavigate()
    
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        
        counter > 0 && agregarAlCarrito({
                            id: item.id,
                            precio: item.precio,
                            nombre: item.nombre,
                            cantidad: counter
                        })
    }

    return (
        <div className="detail">
            <img src={item.img} alt={item.nombre} style={{margin:"0"}}/>
            <h3 style={{marginBottom:"0", marginTop:"0.3cm"}}>{item.nombre}</h3>
            <p style={{marginBottom:"0"}}>Precio: ${item.precio}</p>
            <p >{item.desc}</p>

            {
                !isInCart(item.id)
                    ?   <ItemCount 
                            increment={increment}
                            decrement={decrement} 
                            onAdd={handleAgregar} 
                            counter={counter}
                            min={0}
                            max={item.stock}
                        />
                    :   <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>
            }
            
            <button className="btn btn-primary" onClick={handleVolver} >Volver</button>
        </div>
    )
}