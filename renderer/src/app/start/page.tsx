'use client'

import { useEffect } from "react"

export default function StartCluster() {
  useEffect(() => {
    window.electron.publishCluster()
  }, [])

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Cluster Started</h1>
      <p className="text-gray-500">This device is now the coordinator</p>
    </main>
  )
}
