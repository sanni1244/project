'use client'

import { motion } from 'framer-motion'
import "./style.css";


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
  }),
}

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 md:px-20 lg:px-32 text-center space-y-16">
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="h1">
          🥑 Welcome to <span style={{ color: 'rgb(34, 88, 52)' }}>Eco</span>Gracer
        </h1>

        <p className="p">
          Your trusted source for fresh Nigerian groceries, delivered to your door. We bridge the gap between farm and home.
        </p>
        <h1>skdf j</h1>
        <p>ksahfjldl</p>
      </motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 text-left">
          {[
            { icon: '🛒', title: 'Fast Delivery', desc: 'Next-day delivery across major cities.' },
            { icon: '🌾', title: 'Local Produce', desc: 'Fresh from Nigerian farms.' },
            { icon: '💸', title: 'Affordable Prices', desc: 'Market-competitive and fair.' },
            { icon: '📦', title: 'Bulk Orders', desc: 'Wholesale options available.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-green-50 p-6 rounded-2xl shadow transform transition duration-1000"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="p text-xl font-semibold">{item.title}</p>
              <p className="mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-green-100 to-green-200 rounded-xl p-8"
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-bold text-green-800">📈 Nigerian Food Market (2024)</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Last year saw a 15% growth in online grocery sales, driven by urban demand and digital access. More consumers now trust
          local brands and value freshness over imports.
        </p>
        <motion.div
          className="mt-8 flex justify-center"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/market-stats.png"
            alt="Nigerian Market Stats"
            className="rounded-lg w-full max-w-xl shadow-md"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
