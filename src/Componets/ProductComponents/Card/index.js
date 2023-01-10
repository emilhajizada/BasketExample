import React, { useContext } from 'react'
import { MainContext } from '../../../App';

function Card({id,name,desc,price}) {
  const [basket, setBasket] = useContext(MainContext);
  function handleClickToAddBasket(id, name, desc, price) {
    const newItem = {
      id,
      name,
      desc,
      price,
      count: 1,
    };
    basket.find(item=>item.id === id) === undefined && setBasket([...basket, newItem])
    console.log("basket:",basket);
  }
  return (
    <div>
        <h3>Name: {name}</h3>
        <p>decription: {desc}</p>
        <p>Price : {price}</p>
        <button onClick={() => {
            handleClickToAddBasket(id,name,desc,price);
          }}> Add to Basket</button>
    </div>
  )
}

export default Card