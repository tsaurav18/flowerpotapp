import React from "react";

export default function ImageItem({ list }) {
  return (
    <>
      <li>
        <img src={list.data.image} />
        <h3>{list.data.title}</h3>
        <p>{list.data.price}</p>
      </li>
    </>
  );
}
