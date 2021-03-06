import React from 'react';

import List from './List';
import InputField from './InputField';

function GroceryList(props) {
    // console.log(props)
    return (
        <div className="groceryList">
            <span></span>
            <div className="content">
            <h1>Boodschappenlijst</h1>
            <InputField click={props.addClick} />
            <List list={props.list} click={props.itemClick} />
            </div>
        </div>
    )
}

export default GroceryList

