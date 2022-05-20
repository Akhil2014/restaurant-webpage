import React, { useDebugValue } from 'react'
import Product from './prodata'
import './style.css'

const Append = () => {
  return (
    <>
     <div className='append'>
    {Product.map((el) => ( 
           <div className='flex'>
             <div className='underBx'>
             <img src={el.img}alt="" />
             </div>
             <div className='underBx'>
                <p>{el.name}</p>
                <p>{el.menu.join(" ")}</p>
                <p>Cost {el.cost} for One</p>
                <p>{el.method} payment </p>
             </div>
             <div className='underBx'>
                    <h3 className='span'>{el.star}</h3>
                    <p>{el.votes} Votes</p>
                    <p>{el.review} review</p>
             </div>
           </div>
    ))}
     </div>
    </>
  )
}

export default Append