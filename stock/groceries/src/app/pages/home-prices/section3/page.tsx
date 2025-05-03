'use client'

import { motion } from 'framer-motion'
import './style.css'

const crazyFacts = [
  {
    title: '🍌 40% Post-Harvest Loss',
    desc: 'Over 40% of Nigeria’s farm produce is lost before consumption due to poor storage, infrastructure, and logistics.',
  },
  {
    title: '💸 Imports Dependencies',
    desc: 'Despite agricultural capacity, Nigeria spent ₦1.9 trillion on food imports in 2023, weakening local production incentives.',
  },
  {
    title: '🍚 Rural Malnutritions',
    desc: 'Around 12 million Nigerians face food insecurity, particularly in rural regions with limited access to affordable nutrition.',
  },
  {
    title: '🚫 Smallholder Neglect',
    desc: '80% of food is grown by smallholder farmers who lack access to modern tools, credit, and distribution networks.',
  },
]

export default function FoodSystemExplosion() {
  return (
    <section className="relative z-10 bg-black text-white py-32 overflow-hidden">
      <div className="absolute -top-20 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle,_#4ade80,_transparent_70%)] animate-pulse" />

      <div className="relative z-20 px-6 max-w-6xl mx-auto text-center space-y-14">
        <motion.h2
          className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-300 via-yellow-400 to-red-500 bg-clip-text text-transparent drop-shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          🚨 The Nigerian Food System is Glitching
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {crazyFacts.map((fact, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-300 drop-shadow">{fact.title}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed text-lg">{fact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
