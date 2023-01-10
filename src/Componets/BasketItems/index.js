import React, { useContext } from "react";
import { MainContext } from "../../App";

function BasketItems({ id, name, desc, price, count }) {
  // handleClickToAddBasket(id,name,desc,price);
  const [basket,setBasket] = useContext(MainContext);
  function removeItemFromBasket(id) {
    setBasket(basket.filter(item=>item.id !== id))
  }
  function handleItemCount(id,bool){
    setBasket(basket.map(item=>{
        const data = item
        bool ? item.id === id && data.count++ : item.count > 1 && item.id === id && data.count--
        return data
    }))
  }


  return (
    <div style={{ margin: "20px", border: "1px solid black" }}>
      <h3>Name: {name}</h3>
      <p>decription: {desc}</p>
      <p>Price : {price}</p>
      <div style={{ display: "flex" }}>
        <button onClick={()=>{handleItemCount(id,true)}}>+</button>
        <p>@ {count} @</p>
        <button onClick={()=>{handleItemCount(id,false)}}>-</button>
      </div>
      <button
        onClick={() => {
            removeItemFromBasket(id)
        }}
      >
        {" "}
        Remove from Basket
      </button>
    </div>
  );
}

export default BasketItems;
