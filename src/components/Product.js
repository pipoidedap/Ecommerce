import React, { useContext } from "react";
import SoldContext from "../contexts/SoldContext";

const Product = (props) => {

  const { prod } = props;
  const { soldProducts, updateSoldProducts } = useContext(SoldContext)

  const carToBuy = 'Comprar';
  const carBought = '🛒'
  const shoppingCart = soldProducts.includes(prod.title) ? carBought : carToBuy

  const clickShoppingCart = (e) => {
    e.preventDefault()
    updateSoldProducts(prod.title)
  }

  return (
    <div className="product-card">
      <div className="card-top">
        <h3>{prod.title}</h3>
      </div>
      <div>
				<img src={prod.image} alt={prod.title} className="img" />
				<div className="category-text"><h4>{prod.category}</h4></div>
			</div>
      <div className="card-body">
        <div><p>USD ${prod.price}</p></div>
        <button onClick={clickShoppingCart}>
  				<div>{shoppingCart}</div>
        </button>
      </div>
      <div className="card-bottom"><p>{prod.description}</p></div>
    </div>
  );
};

export default Product;
