import React, { useContext } from "react";
import { MainContext } from "../../../App";
import BasketItems from "../../BasketItems";
import BasketOrder from "../../BasketOrder";

function BasketContainer() {
  const [basket] = useContext(MainContext);
  const sumOfBasketItems = basket.reduce((accumulator, object) => {
    return accumulator + (object.price * object.count);
  }, 0);
  return (
    <div>
      {basket.map((item) => (
        <BasketItems
          key={item.id}
          id={item.id}
          name={item.name}
          desc={item.desc}
          price={item.price}
          count={item.count}
        />
      ))}
      <BasketOrder total={sumOfBasketItems}/>
    </div>
  );
}

export default BasketContainer;
