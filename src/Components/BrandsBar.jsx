import { useState, useEffect } from "react";
import { getBrands } from "../services/api";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTheme } from "../context/useTheme";

const BrandsBar = () => {
  const { isDark } = useTheme();
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBrands().then((data) => {
      setBrands(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section
        id="brands"
        className="py-20 px-6 text-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white"
      >
        <h3 className="text-3xl font-bold mb-10">Our Partners</h3>
        <p className="text-gray-500 dark:text-gray-400">Loading brands...</p>
      </section>
    );
  }

  const scrollingBrands = [...brands, ...brands];

  return (
    <section
      id="brands"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <h3 className="text-3xl font-bold mb-10 text-center">Our Partners</h3>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {scrollingBrands.map((brand, idx) => (
            <img
              key={`${brand.id}-${idx}`}
              src={isDark ? brand.logoDark : brand.logoLight}
              alt={brand.name}
              className="h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsBar;
