const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
  publishCluster: () => ipcRenderer.invoke("publish-cluster"),
  findClusters: () => ipcRenderer.invoke("find-clusters")
})
