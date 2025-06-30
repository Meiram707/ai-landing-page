const Pricing = () => {
  return (
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
  )
}

export default Pricing 