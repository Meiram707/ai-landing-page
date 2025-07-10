import { useState, useEffect } from "react";
import { getFeatures } from "../services/api";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  const cardVariants = {
    rest: {
      scale: 1,
      transition: { duration: 0, ease: "linear" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0, ease: "linear" },
    },
  };

  useEffect(() => {
    getFeatures().then((data) => {
      setFeatures(data);
      setLoading(false);
    });
  }, []);

  return (
    <section
      id="features"
      className="py-20 px-6 max-w-6xl mx-auto bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <h3 className="text-3xl font-bold mb-10 text-center">Features</h3>
      {loading ? (
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl animate-pulse h-40"
            />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-700 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Features;
