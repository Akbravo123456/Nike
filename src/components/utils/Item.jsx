import { StarIcon,ShoppingBagIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}

) => {
  return (
    <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
      ifExists ? "justify-items-start" : "justify-items-center"
    } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
      <div className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}>
        <h1 className=''>{title}</h1>
        <p className=''>{text}</p>
        <div className=''>
          <div className=''><h1>{price}</h1></div>
          <div className=''><StarIcon className='icon-style text-slate-900'/><h1>{rating}</h1></div>
          <h1></h1>
        </div>
        <div className=''>
          <button type='button' className=''><ShoppingBagIcon className='icon-style text-slate-900'/></button>
          <button type='button' className=''>{btn}</button>
        </div>
      </div>
      <div className=''>
        <img src={img} alt="img/item-img" className=''/>
      </div>
    </div>
  )
}

export default Item
