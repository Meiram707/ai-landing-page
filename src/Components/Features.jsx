const Features = () => {
  return (
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
  )
}

export default Features