const Header = () => {
  return (
    <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400 text-3xl font-bold text-blue-600">NeuroSpark</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-cyan-400">Features</a>
          <a href="#pricing" className="hover:text-cyan-400">Pricing</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
    </header>  
  )
}

export default Header