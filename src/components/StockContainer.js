import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, handleStockChange, filtered, filter}) {

  const filteredStocks = filtered.map(stock => 
    <Stock stock = {stock} key = {stock.name} handleStockChange = {handleStockChange}/>
  )

  const allStocks = stockList.map(stock => 
    <Stock stock = {stock} key = {stock.name} handleStockChange = {handleStockChange}/>
  )

  return (
    <div>
      <h2>Stocks</h2>
      {filter == '' ? allStocks : filteredStocks }
    </div>
  );
}

export default StockContainer;
