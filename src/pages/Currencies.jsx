import { Link } from 'react-router-dom'

export default function Currencies() {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC", icon: "₿" },
    { name: "Litecoin", symbol: "LTC", icon: "Ł" },
    { name: "Ethereum", symbol: "ETH", icon: "Ξ" },
    { name: "Ethereum Classic", symbol: "ETC", icon: "ξ" },
    { name: "Stellar Lumens", symbol: "XLM", icon: "*" },
    { name: "Dash", symbol: "DASH", icon: "Đ" },
    { name: "Ripple", symbol: "XRP", icon: "✕" },
    { name: "Zcash", symbol: "ZEC", icon: "ⓩ" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cryptocurrencies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currencies.map(coin => (
          <Link to={`/price/${coin.symbol}`} key={coin.symbol} className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <span className="text-2xl mr-2">{coin.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{coin.name}</h2>
                <p className="text-sm text-muted-foreground">{coin.symbol}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}