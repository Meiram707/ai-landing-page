import { useState, useEffect } from "react";
import { getPricingPlans } from "../services/api";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Pricing = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPricingPlans().then((data) => {
      setPricingPlans(data);
      setLoading(false);
    });
  }, []);

  return (
    <section
      id="pricing"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h3
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Pricing
      </motion.h3>

      {loading ? (
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl animate-pulse h-40"
            />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`
                border
                ${
                  plan.isHighlighted
                    ? "border-cyan-500"
                    : "border-gray-300 dark:border-gray-800"
                }
                bg-white dark:bg-gray-900
                p-6
                rounded-xl
                text-center
                shadow
                hover:border-cyan-500
                hover:bg-gray-50 dark:hover:bg-gray-800
                hover:shadow-2xl
                hover:ring
                hover:ring-cyan-500
                hover:ring-opacity-30
                transition-all
                duration-300
                ease-in-out
              `}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4
                className={`text-xl font-semibold ${
                  plan.isHighlighted ? "text-cyan-400" : ""
                }`}
              >
                {plan.name}
              </h4>
              <p className="text-3xl my-4">{plan.price}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {plan.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-500 transition-all duration-300 ease-in-out shadow hover:shadow-lg"
              >
                {plan.button}
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Pricing;
