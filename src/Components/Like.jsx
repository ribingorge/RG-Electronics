
import React, { useContext } from 'react';
import { Mycontext } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css'
function Like() {
    const { like } = useContext(Mycontext);
    console.log("liked items",like);
    
    return (
       <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}> Liked Products</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>

                {like.length > 0 ? like.map(item => (
                    <div
                        key={item.productname}
                        style={{ width: "300px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 2px 8px black" }}>
                        <img src={item.image} alt={item.productname} style={{ width: '100%', height: '300px', objectFit: 'cover' }}></img>
                        <h4 style={{ marginTop: "10px",marginLeft:"25%" }}>{item.productname}</h4>
                        <p style={{ color: "#555", fontsize: "14px" }}>{item.category}</p>
                        <h3 style={{ color: "#e91e63" }}>${item.price}</h3>
                        <p style={{ fontsize: "14px", color: "#777" }}>Quantity:{item.Quantity}</p>
                    </div>
                )) : (
                    <p style={{ textAlign: "center", color: "#999" }}>No liked items to display</p>
                )}
            </div>
            </div>
  )
}

export default Like
