import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Price() {
  const apiKey = "29914340-E34E-4CB4-B4A7-68D0E70AB922" 
  const params = useParams()
  const symbol = params.symbol
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

  const [coin, setCoin] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getCoin = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setCoin(data)
      } catch (e) {
        console.error(e)
        setError('An error occurred while fetching the data. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    getCoin()
  }, [url])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-xl">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500 text-xl mb-4">{error}</p>
        <Link to="/currencies" className="text-primary hover:underline">
          Back to Currencies
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        {coin.asset_id_base}/{coin.asset_id_quote}
      </h1>
      <p className="text-5xl font-bold mb-8">$ {parseFloat(coin.rate).toFixed(2)}</p>
      <p className="text-muted-foreground mb-4">
        Last updated: {new Date(coin.time).toLocaleString()}
      </p>
      <Link to="/currencies" className="text-primary hover:underline">
        Back to Currencies
      </Link>
    </div>
  )
}