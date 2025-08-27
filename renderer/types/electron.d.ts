export {}

declare global {
  interface Window {
    electron: {
      publishCluster: () => Promise<void>
      findClusters: () => Promise<{ name: string; host: string; port: number }[]>
    }
  }
}
