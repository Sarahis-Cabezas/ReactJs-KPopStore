import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {

    return (
        <div style={{
            flex:1,
            flexDirection:"row",
            marginBottom:"2%",
            marginLeft:"2%",
            marginRight:"2%",
            marginTop: "0cm",
            textAlign: "center",
            flexWrap: "wrap",
            padding: "0.2cm",
            border: "solid",
            borderColor: "lightblue",
            backgroundColor: "lightblue",
            borderRadius: "2%",
            height: "100%",
            maxWidth: "220px",
        }}>
            <img src={item.img} alt={item.nombre}/>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>{item.desc}</p>
            <p>Categoría: {item.cat}</p>
            
            <Link to={`/detail/${item.id}`} style={{
                textDecoration:"none",
                backgroundColor: 'blue',
                color: 'white',
                padding:"3px",
                borderRadius:"5%"
                }}>
                    Ver más</Link>
        </div>
    )
}