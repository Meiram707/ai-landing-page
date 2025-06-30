import React from "react";
const App = () => {

  return (
     
     <div className="min-h-screen bg-gray-950 text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400 text-3xl font-bold text-blue-600">NeuroSpark</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-cyan-400">Features</a>
          <a href="#pricing" className="hover:text-cyan-400">Pricing</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </header>    
      <section className="text-center py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Smarter Work with AI</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          NeuroSpark is your intelligent assistant that boosts productivity with real-time suggestions, automation, and seamless integration.
        </p>
        <button className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-400 transition">
          Get Started Free
        </button>
      </section>

      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-semibold mb-2">AI Suggestions</h4>
            <p className="text-gray-400">Real-time smart suggestions while you work — writing, coding, planning, and more.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-semibold mb-2">Task Automation</h4>
            <p className="text-gray-400">Automate repetitive tasks and focus on what matters most.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-semibold mb-2">Seamless Sync</h4>
            <p className="text-gray-400">Connect your favorite tools and platforms with one click.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gray-900">
        <h3 className="text-3xl font-bold mb-10 text-center">Pricing</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="border border-gray-800 p-6 rounded-xl text-center">
            <h4 className="text-xl font-semibold">Starter</h4>
            <p className="text-3xl my-4">$0</p>
            <p className="text-gray-400 mb-4">Basic features for individuals</p>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-500">Start Free</button>
          </div>
          <div className="border border-cyan-500 p-6 rounded-xl text-center shadow-xl">
            <h4 className="text-xl font-semibold text-cyan-400">Pro</h4>
            <p className="text-3xl my-4">$19/mo</p>
            <p className="text-gray-400 mb-4">Advanced tools for professionals</p>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-500">Go Pro</button>
          </div>
          <div className="border border-gray-800 p-6 rounded-xl text-center">
            <h4 className="text-xl font-semibold">Enterprise</h4>
            <p className="text-3xl my-4">Custom</p>
            <p className="text-gray-400 mb-4">Tailored plans for teams</p>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-500">Contact Us</button>
          </div>
        </div>
      </section>

      <footer id="contact" className="p-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © 2025 NeuroSpark. Built by a React Developer from Astana.
      </footer>
    </div>
  );
}


export default App
