'use client'

import { useEffect, useState } from "react"

type Cluster = { name: string; host: string; port: number }

export default function JoinCluster() {
  const [clusters, setClusters] = useState<Cluster[]>([])

  useEffect(() => {
    const fetchClusters = async () => {
      const found = await window.electron.findClusters()
      setClusters(found)
    }
    fetchClusters()
  }, [])

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Join Cluster</h1>
      {clusters.length === 0 ? (
        <p className="text-gray-500">Searching for clusters on your network…</p>
      ) : (
        <ul className="space-y-3">
          {clusters.map((c, i) => (
            <li key={i} className="border rounded p-3">
              <div className="font-bold">{c.name}</div>
              <div className="text-sm text-gray-500">{c.host}:{c.port}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
