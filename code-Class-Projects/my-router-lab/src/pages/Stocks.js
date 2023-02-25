import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Stock from "../components/stock"

function Stocks () {
    // Our api key from coinapi.io
    const apiKey = "8fbf4bf9dfd624c270732442735a23ff";
    // Grabbing the Currency symbol from the URL Param
    //const { symbol } = useParams();
    // Using the other two variables to create our URL
    const url = 'https://financialmodelingprep.com/api/v3/enterprise-values/AAPL?limit=40&apikey=' + apiKey;

    // State to hold the coin data
    const [stocks, setStocks] = useState([]);

    // Our function to fetch coin data
    const getStocks = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setStocks(data);
    }



    // useEffect to run getCoin when component mounts
    useEffect(() => {
      getStocks();
      console.log(stocks)
    }, []);

  return (
    <div>
      <ul>
        {stocks.forEach(stock => {
          <Stock stockData={stock}/>
        })}

      </ul>
    </div>
  )
}
export default Stocks;