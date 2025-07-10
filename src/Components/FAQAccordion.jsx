import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { getFAQs } from "../services/api";

const FAQAccordion = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    getFAQs().then((data) => {
      setFaqs(data);
      setLoading(false);
    });
  }, []);

  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 px-6 max-w-3xl mx-auto text-gray-900 dark:text-white"
    >
      <h3 className="text-3xl font-bold mb-10 text-center">FAQs</h3>
      {loading ? (
        <div className="text-center text-gray-400 dark:text-gray-500">
          Loading FAQs...
        </div>
      ) : (
        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 overflow-hidden"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <span>{item.question}</span>
                <span>{activeId === item.id ? "-" : "+"}</span>
              </button>
              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 pb-4 mt-4 text-gray-600 dark:text-gray-400"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FAQAccordion;
