import React from "react"

function Navbar(){
    return <div style={{backgroundColor:'teal',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 100px'}}>
        <h1 style={{textAlign:'left'}}>Flashy Meals</h1>
       <div>
        <a style={{margin:'20px',color:'white'}}>Home</a>
        <a style={{margin:'20px', color:'white'}}>Order</a>
        <a style={{margin:'20px',color:'white'}}>Contact Us</a>

       </div>
    </div>
}

export default Navbar