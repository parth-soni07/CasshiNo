import React from "react";

function Table() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Example Stock 1</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>Example Stock 2</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
