import React, {useState} from "react";

const StockRow = ({ stockName, price, onBuy }) => {
  const [quantity, setQuantity] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    onBuy(quantity);
    setQuantity(0); // Reset the quantity after submission
  };
  return (
    <tr>
      <td>{stockName}</td>
      <td>${price}</td>
      <td>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            placeholder="Quantity"
          />
          <button type="submit">Buy</button>
        </form>
      </td>
    </tr>
  );
};

export default StockRow;