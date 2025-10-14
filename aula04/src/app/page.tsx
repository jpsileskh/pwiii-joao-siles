'use client'

import { useState } from 'react'

export default function Page() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Contador
        </h1>
        
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-8">
          <p className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {count}
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            −
          </button>
          
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Reset
          </button>
          
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}