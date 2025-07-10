import { useState, useEffect } from "react";
import { getTestimonials } from "../services/api";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getTestimonials().then((data) => {
      setTestimonials(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  if (loading) {
    return (
      <section
        id="testimonials"
        className="py-20 px-6 text-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
      >
        <h3 className="text-3xl font-bold mb-10">Testimonials</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Loading testimonials...
        </p>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      className="py-20 px-6 max-w-3xl mx-auto bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <h3 className="text-3xl font-bold mb-10 text-center">Testimonials</h3>
      <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 p-8 shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border border-cyan-500"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
              "{testimonials[index].quote}"
            </p>
            <h4 className="text-lg font-semibold">
              {testimonials[index].name}
            </h4>
            <p className="text-cyan-500">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
