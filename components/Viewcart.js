import React from 'react';

function Viewcart({ cart, removeFromCart }) {
  if (!Array.isArray(cart)) {
    throw new Error('The `cart` prop must be an array');
  }

  return (
    <div className="container">
      <h2>My Cart</h2>
      <ul className="list-group">
        {cart.map((item, index) => {
          if (!item.hasOwnProperty('id') || !item.hasOwnProperty('name') || !item.hasOwnProperty('price')) {
            throw new Error(`The item at index ${index} is missing required properties`);
          }

          return (
            <li className="list-group-item" key={item.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: ${item.price}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Viewcart;