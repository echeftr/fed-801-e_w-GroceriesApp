import React from "react";

import ShoppingCart from "./components/ShoppingCart";
import GroceryList from "./components/GroceryList";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Brood" },
        { id: 2, title: "Boter" },
        { id: 3, title: "Kaas" },
        { id: 4, title: "Kippedijen" },
        { id: 5, title: "Rijst" },
        { id: 6, title: "Broccoli" },
      ],

      shoppingListItems: [
        { id: 1, title: "Cola", amount: 1 },
        { id: 1, title: "Chips", amount: 1 },
      ],
    };

    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.handleClickGroceryAdd = this.handleClickGroceryAdd.bind(this);
    this.handleClickEmptyCart = this.handleClickEmptyCart.bind(this);
    this.handleClickCartItem = this.handleClickCartItem.bind(this);
  }

  handleClickGroceryItem(title) {
    console.log(title);
    if (title !== undefined && title !== null && title.length > 0) {
      this.setState((prevState) => {
        // console.log("item");

        const shoppingListItems = [...prevState.shoppingListItems];

        const shoppingListItem = shoppingListItems.find((item) => {
          return item.title === title;
        });

        // console.log(shoppingListItem);

        if (shoppingListItem !== undefined) {
          shoppingListItem.amount = shoppingListItem.amount + 0.5;
          // Check waarom niet met + 1 lukt???
        } else {
          shoppingListItems.push({
            id: shoppingListItems.length + 1,
            title: title,
            amount: 1,
          });
        }

        return {
          shoppingListItems: shoppingListItems,
        };
      });
    }
  }

  handleClickGroceryAdd(title) {
    // console.log(title);
    if (title !== undefined && title !== null && title.length > 0) {
      this.setState((prevState) => {
        const groceryItems = [...prevState.groceryItems];
        groceryItems.push({
          id: groceryItems.length + 1,
          title: title,
        });
        return {
          groceryItems: groceryItems,
        };
      });
    }
  }

  handleClickEmptyCart() {
    this.setState(() => {
      return {
        shoppingListItems: [],
      };
    });
  }

  handleClickCartItem(title) {
    console.log(title);
  }

  render() {
    return (
      <div className="container">
        <GroceryList
          list={this.state.groceryItems}
          addClick={this.handleClickGroceryAdd}
          itemClick={this.handleClickGroceryItem}
        />
        <ShoppingCart
          list={this.state.shoppingListItems}
          emptyClick={this.handleClickEmptyCart}
          itemClick={this.handleClickCartItem}
        />
      </div>
    );
  }
}

export default Container;
