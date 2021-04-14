import React from "react";

import List from "./List";

function ShoppingCart(props) {
  // console.log(props)
  return (
    <div className="shoppingCart">
      <span></span>
      <div className="content">
        <h1>Winkelmand</h1>
        <button onClick={props.emptyClick}>Winkelmand legen</button>
        <List list={props.list} click={props.itemClick} />
      </div>
    </div>
  );
}

export default ShoppingCart;
