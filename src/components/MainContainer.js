import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([])
  const [portfolioList, setPortfolioList] = useState([])
  const [filter, setFilter] = useState('')
  const [isAbcActive, setisAbcActive] = useState(false)
  const [isPriceActive, setisPriceActive] = useState(false)


  const filtered = stockList.filter(stock => stock.type === filter)


  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
    .then(r => r.json())
    .then(stock => {
      setStockList(stock)
    })
  },[])
  
  function handleStockChange(stock) {
    if (portfolioList.includes(stock)){
      const removeStock = portfolioList.filter(s => s.id !== stock.id)
      setPortfolioList(removeStock)
      } else {
      setPortfolioList([...portfolioList, stock])
      }
  }

  function handleFilter (e) {
    setFilter(e.target.value)
  }

  function handleSortByABC() {
    stockList.sort(function(a, b) {
      return a.ticker.localeCompare(b.ticker)
    })
    setisAbcActive(isAbcActive => !isAbcActive)
  }

  function handleSortByPrice() {
    stockList.sort(function(a, b) {
      return a.price-b.price
    })
    setisPriceActive(isPriceActive => !isPriceActive)
  }
 

  return (
    <div>
      <SearchBar isAbcActive = {isAbcActive} isPriceActive = {isPriceActive} handleSortByPrice = {handleSortByPrice} handleSortByABC = {handleSortByABC} handleFilter = {handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer  handleStockChange = {handleStockChange} filtered = {filtered} filter = {filter} stockList = {stockList}/>
        </div>
        <div className="col-4">
          <PortfolioContainer  handleStockChange = {handleStockChange} portfolioList = {portfolioList}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;








