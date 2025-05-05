'use client'

import { motion } from 'framer-motion'
import "./style.css"
import Image from 'next/image'
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Tooltip, Legend)

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
  }),
}
const stats = [
  {
    label: "Agri-Budget Share",
    value: 1.32,
    suffix: "%",
    note: "Percentage of the 2024 national budget allocated to agriculture."
  },
  {
    label: "Food Inflation Rate",
    value: 39.93,
    suffix: "%",
    note: "Year-on-year food inflation as of recent years."
  },
  {
    label: "Cassava production",
    value: 59,
    suffix: "M Tons",
    note: "Nigeria are  the largest producers of Cassava in the world."
  },
  {
    label: "Flood-Damaged Farmland (2024)",
    value: 1.6,
    suffix: "M Hect.",
    note: "Crops destroyed by floods, exacerbating food shortages and inflation."
  },
];


const chartData = {
  labels: ['Beans', 'Rice', 'Beef', 'Bread', 'Eggs(12pcs)'],
  datasets: [
    {
      label: 'Oct 2023 Price (₦)',
      data: [790, 820, 2950, 760, 1110],
      backgroundColor: '#48b16b',
      borderRadius: 1,
      barPercentage: 0.9,
    },
    {
      label: 'Oct 2024 Price (₦)',
      data: [2800, 1940, 5850, 1550, 2670],
      backgroundColor: '#af3737',
      borderRadius: 1,
      barPercentage: 0.9,
    },
  ],
}


const piedata = {
  labels: ['Food', 'Other Expenses'],
  datasets: [
    {
      label: 'Household Spending (%)',
      data: [56.65, 43.35],
      backgroundColor: ['#48b16b', '#af3737'],
      borderWidth: 1,
    },
  ],
}

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section className="bg-white py-16  text-center space-y-16">
      <div className='px-6 sm:px-10 md:px-20 lg:px-32'>
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className=''
        >
          <h1 className="h1 text-[#3b3b3b]">
            🥑 Welcome to <span style={{ color: '#48b16b' }}>Eco</span>Gracer
          </h1>
          <p className="p">
            Your trusted source for fresh Nigerian groceries, delivered to your door. We bridge the gap between farm and home.
          </p>
          <br /><br />
        </motion.div>

        {/* Features */}
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
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="p text-xl font-semibold">{item.title}</p>
                <p className="mt-2 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>




      </div>
      <div className="relative isolate overflow-hidden bg-[#48b16b] py-24 px-6 md:px-12">
        <div className="absolute inset-0 -z-10">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full fill-[#ffffff] scale-x-110"
            preserveAspectRatio="none"
          >
            <path d="M0,160 C360,260 1080,60 1440,160 L1440,320 L0,320 Z"></path>
          </svg>
        </div>





        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
          <div className="p-5 overflow-hidden rounded-xl shadow-xl flex justify-center items-center">
            <Image
              src={"/images/photo/tomatoes.jpg"}
              width={400}
              height={400}
              alt="Tomatoes"
              className="rounded-xl"
            />
          </div>



          <div className="text-gray-800 space-y-10">
            <h2 className="text-3xl md:text-4xl text-white h1 text-white text-red-300 ">What We’ve Rescued</h2>
            <p className="text-lg leading-relaxed p">
              First-of-the-season artichokes are typically “too big” for traditional grocery stores... but for us, the more we can rescue, the merrier.
              This means our grower gets a fair return on the harvest, and you get jumbo-sized ‘chokes for half their usual price.
            </p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto"
      >
        {/* Pie Chart */}
        <div className="bg-white p-10 rounded-xl shadow-lg h-95 flex flex-col justify-center items-center max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-indigo-700 h3"> Household Spending (2024)</h3>
          <p className="text-sm text-gray-600 p">Nigerian's spent over 56% of their household income on food in 2024.</p>
          <div style={{ width: '250px', height: '250px' }}>
            <Pie data={piedata} />
          </div>
        </div>
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-95">
          <h2 className="text-lg font-semibold h3 mb-2">
            📊 Food inflation (2023 vs 2024)
          </h2>
          <p className="text-sm text-gray-600 p">Big spike in food prices across the country over the past year</p>
          <Bar data={chartData} />
        </div>
      </motion.div>





      <section className="bg-[#0f172a] py-10 text-white">
          <h2 className="h1 text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-lime-300 inline-block text-transparent bg-clip-text">
            Nigeria Food Metrics 2024
          </h2>
        <div ref={ref} className="flex flex-wrap justify-center gap-6 md:grid md:grid-cols-3 lg:grid-cols-4  px-6 mt-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card group"
            >
              <div className="text-4xl font-bold tracking-wide text-green-300 group-hover:text-white transition-colors duration-300 h2">
                {inView ? <CountUp end={stat.value} duration={2} decimals={stat.value % 1 !== 0 ? 1 : 0} suffix={stat.suffix} /> : "0"}
              </div>
              <div className="text-lg font-semibold mt-2 h4">{stat.label}</div>
              <p className="text-gray-400 text-sm mt-1 p">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>





      {/* other things */}

      <main className="bg-[#dbe6c1] relative overflow-hidden py-16">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[#fbf6ef] rounded-t-[100%]"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full max-w-sm">
            <Image
              src="/artichokes.png"
              alt="Artichokes"
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What We’ve Rescued
            </h2>
            <p className="text-gray-700 leading-relaxed">
              First-of-the season artichokes are typically “too big”d for traditional grocery
              stores but for us, the more we can rescue, the merrier. 
            </p>
          </div>
        </div>
      </main>

    </section>
  )
}
