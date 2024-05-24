import React from 'react';

const ProductList = () => {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="product1.jpg" className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Description of product 1.</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* More product cards go here */}
      </div>
    </div>
  );
}

export default ProductList;
