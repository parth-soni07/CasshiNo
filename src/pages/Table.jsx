import React, { useState, setState, useEffect } from "react";
import TradingPlatformABI from "../contractAbi/TradingPlatform.json";
import TradeTokenABI from "../contractAbi/TradeToken.json";
import StockRow from "../components/StockRow";
const ethers = require("ethers");

const Table = ({stocks}) => {
  const [bidAmount, setBidAmount] = useState([]);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();


  async function getTradingPlatform() {
    const tradingcontractAddress = "0x3D42AD7A3AEFDf99038Cd61053913CFCA4944b95";
    const tradingcontractAbi = TradingPlatformABI.abi;
    const tradingPlatform = new ethers.Contract(
      tradingcontractAddress,
      tradingcontractAbi,
      signer
    );
  }
  async function getToken() {
    const tokenContractAddress = "0xed27012c24FDa47A661De241c4030ecB9D18a76d";
    const tokenContractAbi = TradeTokenABI.abi;
    const token = new ethers.Contract(
      tokenContractAddress,
      tokenContractAbi,
      signer
    );
  }
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <StockRow
              key={index}
              stockName={stock.name}
              price={stock.price}
              onBuy={() => handleBuy(stock)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
const handleBuy = (stock) => {
  console.log(`Buying ${stock.name} at $${stock.price}`);
  // Add your buy logic here
};
export default Table;
