import React from "react";
import Product from "./Product";

const Inventory = (props) => {

  const { products, loading } = props;

  return (
    <div>
      <div className="header">
        <h5>Productos:</h5>
      </div>
      {loading ?
        <div>Cargando productos...</div>
        :
        <div className="inventory-grid">
          {products.map((prod) => {
            return <Product prod={prod} key={prod.id} />;
          })}
        </div>
      }
    </div>
  );
};

export default Inventory;
