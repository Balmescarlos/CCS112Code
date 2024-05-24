import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
