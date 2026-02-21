import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, Zap, Clock, Lock, Star } from 'lucide-react'; // npm install lucide-react

function App() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      title: "PREMIUM EXECUTOR",
      price: "$29.99",
      oldPrice: "$49.99",
      badge: "Best Seller",
      features: ["Undetectable", "Fast injection", "Lua support", "Auto-update"],
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "VERIFIED ACCOUNT",
      price: "$14.99",
      oldPrice: null,
      badge: "Limited",
      features: ["10k+ Robux", "Aged", "No ban history", "Instant delivery"],
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "MYSTERY BOX",
      price: "$19.99",
      oldPrice: "$39.99",
      badge: "Popular",
      features: ["Random high-value items", "75% chance rare", "1-click open", "Secure"],
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="text-3xl font-orbitron font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
            whileHover={{ scale: 1.08 }}
          >
            INFINITY
          </motion.div>

          <div className="flex items-center gap-8">
            <a href="#products" className="hover:text-cyan-400 transition-colors">Products</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-full font-medium flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <ShoppingCart size={18} /> Cart
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Everything You Need
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Powerful executors • Verified accounts • Premium tools<br />
            <span className="text-cyan-400 font-semibold">Instant • Secure • Undetectable</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(34,211,238,0.5)" }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-cyan-500/30"
          >
            Browse Products →
          </motion.button>
        </motion.div>
      </section>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-800/50"
      >
        {[
          { icon: ShieldCheck, text: "100% Undetectable" },
          { icon: Zap, text: "Instant Delivery" },
          { icon: Clock, text: "24/7 Support" },
          { icon: Lock, text: "Secure Payments" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <item.icon size={36} className="text-cyan-400 mb-3" />
            <p className="font-medium">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Products */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-orbitron font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400"
          >
            Featured Products
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((prod, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.04, y: -10 }}
                onHoverStart={() => setHoveredProduct(index)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="relative bg-gray-900/70 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl shadow-black/40 group"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prod.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="p-8">
                  {prod.badge && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {prod.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-bold mb-4">{prod.title}</h3>

                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl font-black text-white">{prod.price}</span>
                    {prod.oldPrice && (
                      <span className="text-xl text-gray-500 line-through">{prod.oldPrice}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {prod.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <Star size={16} className="text-cyan-400" /> {f}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r ${prod.color} shadow-lg shadow-black/40 group-hover:shadow-cyan-500/30 transition-shadow`}
                  >
                    Buy Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Infinity — All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
