import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Crypto Tracker</Link>
        <nav>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/currencies" className="hover:underline">Currencies</Link>
        </nav>
      </div>
    </header>
  )
}