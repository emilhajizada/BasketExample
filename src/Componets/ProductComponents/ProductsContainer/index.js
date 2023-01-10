import React  from "react";
import Card from "../Card";
import data from "../../../mocData/db.json";

function ProductsContainer() {
  
  return (
    <div>
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          desc={item.desc}
          price={item.price}
          
        />
      ))}
    </div>
  );
}

export default ProductsContainer;
