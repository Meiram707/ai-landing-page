// Mock data for development stage
const featuresData = [
  {
    id: 1,
    title: "AI Suggestions",
    description:
      "Real-time smart suggestions while you work — writing, coding, planning, and more.",
  },
  {
    id: 2,
    title: "Task Automation",
    description: "Automate repetitive tasks and focus on what matters most.",
  },
  {
    id: 3,
    title: "Seamless Sync",
    description: "Connect your favorite tools and platforms with one click.",
  },
  {
    id: 4,
    title: "Advanced Analytics",
    description: "Gain insights into your workflows to optimize productivity.",
  },
  {
    id: 5,
    title: "Custom Workflows",
    description: "Tailor automations to suit your unique needs.",
  },
];

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: "$0",
    description: "Basic features for individuals",
    button: "Start Free",
    isHighlighted: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "$19/mo",
    description: "Advanced tools for professionals",
    button: "Go Pro",
    isHighlighted: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    description: "Tailored plans for teams",
    button: "Contact Us",
    isHighlighted: false,
  },
];

const faqData = [
  {
    id: 1,
    question: "What is NeuroSpark?",
    answer:
      "NeuroSpark is an AI-powered productivity platform that helps you automate tasks, plan better, and work smarter.",
  },
  {
    id: 2,
    question: "Is there a free plan?",
    answer:
      "Yes! We offer a Starter plan that’s completely free to help you get started.",
  },
  {
    id: 3,
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your plan at any time without penalty.",
  },
  {
    id: 4,
    question: "How secure is my data?",
    answer:
      "We use industry-standard encryption and security practices to keep your data safe.",
  },
];

const testimonialData = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Product Manager",
    quote:
      "NeuroSpark transformed how my team collaborates. The automation is a game-changer.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Software Engineer",
    quote:
      "I love the AI suggestions. It's like having a co-pilot for all my planning.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Entrepreneur",
    quote: "It’s so easy to connect all my tools. NeuroSpark just works.",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const brandData = [
  {
    id: 1,
    name: "Google",
    logoLight: "brands/google.svg",
    logoDark: "brands/google.svg",
  },
  {
    id: 2,
    name: "Apple",
    logoLight: "brands/apple-black.svg",
    logoDark: "brands/apple-white.svg",
  },
  {
    id: 3,
    name: "Meta",
    logoLight: "brands/meta-black.png",
    logoDark: "brands/meta-white.png",
  },
  {
    id: 4,
    name: "Amazon",
    logoLight: "brands/amazon-black.svg",
    logoDark: "brands/amazon-white.svg",
  },
  {
    id: 5,
    name: "Microsoft",
    logoLight: "brands/microsoft.svg",
    logoDark: "brands/microsoft.svg",
  },
  {
    id: 6,
    name: "Samsung",
    logoLight: "brands/samsung.svg",
    logoDark: "brands/samsung.svg",
  },
  {
    id: 7,
    name: "Neuralink",
    logoLight: "brands/neuralink-black.svg",
    logoDark: "brands/neuralink-white.svg",
  },
  {
    id: 8,
    name: "DeepMind",
    logoLight: "brands/deepmind-black.svg",
    logoDark: "brands/deepmind-white.svg",
  },
  {
    id: 9,
    name: "OpenAI",
    logoLight: "brands/openai-black.svg",
    logoDark: "brands/openai-white.svg",
  },
  {
    id: 10,
    name: "NVIDIA",
    logoLight: "brands/nvidia.svg",
    logoDark: "brands/nvidia.svg",
  },
  {
    id: 11,
    name: "GoogleCloud",
    logoLight: "brands/googlecloud.svg",
    logoDark: "brands/googlecloud.svg",
  },
  {
    id: 12,
    name: "Intel",
    logoLight: "brands/intel.svg",
    logoDark: "brands/intel.svg",
  },
];

/*
const BASE_URL = "https://your-real-api.com";
const API_KEY = "your-api-key";

async function fetchAPI(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    headers: {
      "Authorization": `Bearer ${API_KEY}`
    }
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
*/

/*
export async function getFeatures() {
  return await fetchAPI("features");
}

export async function getPricingPlans() {
  return await fetchAPI("pricing");
}
*/

// Local development mock fetchers
export async function getFeatures() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(featuresData), 1000)
  );
}

export async function getPricingPlans() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(pricingPlans), 1000)
  );
}

export async function getFAQs() {
  return new Promise((resolve) => setTimeout(() => resolve(faqData), 1000));
}

export async function getTestimonials() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(testimonialData), 1000)
  );
}

export async function getBrands() {
  return new Promise((resolve) => setTimeout(() => resolve(brandData), 1000));
}
