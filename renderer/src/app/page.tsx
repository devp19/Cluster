'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [exitNow, setExitNow] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const [whiteout, setWhiteout] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const t = setTimeout(() => setExitNow(true), 2200)
    const b = setTimeout(() => setShowBar(true), 3000)
    const w = setTimeout(() => setWhiteout(true), 4500)
    return () => {
      clearTimeout(t)
      clearTimeout(b)
      clearTimeout(w)
    }
  }, [])

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center justify-center text-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="leading-none flex items-center gap-1"
      >
        <motion.img
          src="/mesh.png"
          height={40}
          width={40}
          className="pointer-events-none select-none"
          initial={{ opacity: 0, rotate: 0, scale: 1 }}
          animate={
            exitNow
              ? { top: '50%', left: '50%', x: '-50%', y: '-50%', opacity: 1, scale: 1.5 }
              : { left: '50%', x: '-50%', translateX: -110, rotate: 360, opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ position: 'absolute' }}
        />
        <motion.span
          className="text-6xl"
          animate={exitNow ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Cluster
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={exitNow ? { opacity: 0, y: 5 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: exitNow ? 0 : 0.9 }}
        className="mt-3 text-sm text-gray-400 mr-11"
      >
        Turn all your laptops into one computer
      </motion.p>

      {showBar && (
        <div
          className="absolute h-1 bg-gray-200 overflow-hidden"
          style={{ top: 'calc(50% + 40px)', left: '50%', transform: 'translateX(-50%)', width: 150, borderRadius: 2, marginTop: 20 }}
        >
          <motion.div
            className="h-1 bg-black"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      )}

      {whiteout && (
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onAnimationComplete={() => router.replace('/home')}
        />
      )}
    </div>
  )
}
