const Hero = () => {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
        Smarter Work with AI
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        NeuroSpark is your intelligent assistant that boosts productivity with
        real-time suggestions, automation, and seamless integration.
      </p>
      <button className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-400 transition">
        Get Started Free
      </button>
    </section>
  );
};

export default Hero;
