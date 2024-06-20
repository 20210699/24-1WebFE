// ProductRow.js
import React from 'react';

function ProductRow({ item, deleteItem }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.userId}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>
        <button onClick={() => deleteItem(item)}>Delete</button>
      </td>
    </tr>
  );
}

export default ProductRow;
