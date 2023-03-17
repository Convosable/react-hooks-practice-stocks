import React from "react";
import Stock from "./Stock";

function PortfolioContainer({handleStockChange, portfolioList}) {

  const portStocks = portfolioList.map(stock => 
    <Stock handleStockChange = {handleStockChange} stock = {stock} key = {stock.name}/>
    )

  return (
    <div>
      <h2>My Portfolio</h2>
      {portStocks}
    </div>
  );
}

export default PortfolioContainer;
