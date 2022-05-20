import React from 'react'
import './style.css'
import Arr from './data';
import Product from './prodata'
import Append from './Append';

const Button = () => {
    const [selected, setSelected] = React.useState(8);
     if(selected==2) {
        console.log("Iam two")
          Product.sort(function(a,b){
            return a.roll - b.roll;
        })
      }else if(selected==4)
      {
        console.log("Iam four")
       
      }else if(selected == 5){
        console.log("Iam four")
      }

    
  return (
    
      <div className="buttonsBox">
    {Arr.map((el,index) => {
        return ( 
            <button 
            className={selected === index ? "button active" : "button"}
            key={index}
            onClick={() => setSelected(index) 
            }
            >{el.heading}</button>
        )
      })}

{console.log(selected)} 
</div>   
  )
}

export default Button



