import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartView.css'

export const CartView = () => {

    const { cart, vaciarCarrito, totalCompra, removerDelCarrito } = useContext(CartContext)


    // return si no hay elementos
    if (cart.length === 0) {
        return (
                <div className="container my-5">
                    <h2>Tu carrito está vacío</h2>
                    <Link to="/">Volver</Link>
                </div>
        )
    }

    // return de la vista normal
    return (
        <div className="principal">
            <h2 style={{marginBottom:".1cm", marginTop:".4cm"}}>Tu compra</h2>
            <hr/>

            {
                cart.map( (el) => (
                    <>
                        <div key={el.id} className="principal-producto">
                            <div className="principal-producto-aux">
                                <h3 style={{margin:"0"}}>{el.nombre}</h3>
                                <p style={{marginBottom:"0"}}>Precio: ${el.precio}</p>
                                <p style={{marginBottom:"0"}}>Cantidad: {el.cantidad}</p>
                            </div>
                            <button 
                                className="btn btn-danger"
                                onClick={() => removerDelCarrito(el.id)}
                                style={
                                    {marginLeft:"0%"}
                                }
                            >
                                <BsFillTrashFill/>
                            </button>
                        </div>
                        <hr/>
                    </>
                ))
            }

            <h4 style={{margin:"5px"}}>Total: ${totalCompra()}</h4>

            <button onClick={vaciarCarrito} className="btn btn-danger space">Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-success space">Terminar mi compra</Link>
        </div>
    )
}