import React from 'react';
import "./m2.css";

const M1 = () => {
    var arr=["Android","Blackberry","iPhone","Windows Phone"]
  return (
    <div className='m1'>
      <h2>Mobile Operating System</h2>
     {
         arr.map((e)=>(
             <li>{e}</li>
         ))
     }
       
    </div>
  )
}

export default M1
