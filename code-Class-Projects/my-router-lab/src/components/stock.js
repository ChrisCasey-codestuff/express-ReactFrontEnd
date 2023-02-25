function Stock (props) {
  return(
    <div>
    <p>{props.stockData.symbol}</p>
    <p>{props.stockData.stockPrice}</p>
    <p>{props.stockData.numberOfShares}</p>
    <p>{props.stockData.marketCapitalization}</p>
    </div>
  )
}
export default Stock