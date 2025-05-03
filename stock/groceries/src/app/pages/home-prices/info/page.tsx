// app/components/GroceryPriceSection.tsx
'use client'

import { useState } from 'react';
import "./style.css";


const categories = ['All', 'Food', 'Fruits', 'Vegetables', 'Dairy', 'Drinks', 'Snacks']

const items = [
  { id: 1, name: 'Yam', category: 'Food', oldPrice: 1100, newPrice: 1200, image: 'https://t4.ftcdn.net/jpg/05/01/07/69/360_F_501076938_OPQUaEtpFjK9YCVzi8S9WBTfvvxTwJSp.jpg' },
  { id: 2, name: 'Apple', category: 'Fruits', oldPrice: 310, newPrice: 300, image: '/images/https://aprilvines.com/public/uploads/media/by9XbYwGrajWTBAJTR2HwmYqmChb6tTjpcKwg8WP.jpg' },
  { id: 3, name: 'Tomato', category: 'Vegetables', oldPrice: 390, newPrice: 400, image: 'https://nairametrics.com/wp-content/uploads/2019/12/Tomatoes-new.png' },
  { id: 4, name: 'Milk', category: 'Dairy', oldPrice: 790, newPrice: 800, image: 'https://dairynutrition.ca/sites/dairynutrition/files/image_file_browser/dn_article/2023-03/shutterstock_4305538_1182x788px.jpg' },
  { id: 5, name: 'Chips', category: 'Snacks', oldPrice: 505, newPrice: 500, image: '/images/chips.jpg' },
  { id: 6, name: 'Carrot', category: 'Vegetables', oldPrice: 240, newPrice: 250, image: '/images/carrot.jpg' },
  { id: 7, name: 'Orange Juice', category: 'Drinks', oldPrice: 940, newPrice: 1000, image: '/images/orange_juice.jpg' },
]

function getMonthYear() {
  const now = new Date()
  return now.toLocaleString('default', { month: 'long', year: 'numeric' })
}

export default function GroceryPriceSection() {
  const [selected, setSelected] = useState('All')
  const filtered = selected === 'All' ? items : items.filter(i => i.category === selected)

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-1">Grocery Price Updates</h2>
      <p className="text-gray-600 mb-6">{getMonthYear()}</p>

      <div className="flex gap-2 flex-wrap mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selected === cat ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(item => {
          const change = item.newPrice - item.oldPrice
          const percent = ((change / item.oldPrice) * 100).toFixed(1)
          const isPositive = change >= 0

          return (
            <div key={item.id} className="rounded-xl shadow-md p-4 bg-white">
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>

              <div className="mt-3 text-sm">
                <div>Old Price: <span className="line-through text-gray-500">₦{item.oldPrice}</span></div>
                <div>New Price: <span className="font-bold text-black">₦{item.newPrice}</span></div>
                <div className={`text-sm mt-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {isPositive ? '+' : ''}{percent}%
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
