import React, { useContext } from 'react'
import Header from './Header'
import Examplecarousel from './Examplecarousel'
import { Mycontext } from './Context'
import Footer from './Footer'

function Main() {
  const { product, setProduct } = useContext(Mycontext)

  return (
    <div>
      <Header />
      <Examplecarousel />
     
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "63px", gap: "15px", marginTop: "20px" }}>
        {
          product.map((pdt) =>
            <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", marginLeft: "10px", textAlign: 'center', backgroundColor: "khaki", width: "300px" }} key={pdt.id} >
              {pdt.productname} <br />
              <img src={pdt.image} alt="" style={{ width: "300px", height: "220px",objectFit: "cover",marginLeft: "-4%" }} /><br></br>
              <b> {pdt.category}  </b> <br />
              {pdt.price} <br/>
              {pdt.Quantity} <br />
            </div>


          )
        }

      </div>
       <Footer />
    </div>
  )
}


export default Main
