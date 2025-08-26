'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Cluster</h1>
        <p className="mt-2 text-gray-500">Turn all your laptops into one computer</p>
      </div>

      <div className="flex gap-6">
        <Link href="/start">
          <Button size="lg" className="px-8 py-6 text-lg">Start Cluster</Button>
        </Link>
        <Link href="/join">
          <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">Join Cluster</Button>
        </Link>
      </div>
    </main>
  )
}
