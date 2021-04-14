import React from "react";

function ListItem(props) {
  // console.log(props);
  const item = props.item;
  console.log("id: ", item.id, "title: ", item.title);
  return (
    <li
      key={item.id}
      value={item.title}
      className="list-item"
      onClick={() => props.click(item.title)}
    >
      <div>{item.title}</div>
      <div>{item.amount}</div>
    </li>
  );
}

export default ListItem;
