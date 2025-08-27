const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")
const { publishCluster, findClusters } = require("./bonjour")

let win

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  })

  const devUrl = "http://localhost:3000"
  const prodUrl = `file://${path.join(__dirname, "../../renderer/out/index.html")}`
  const startUrl = process.env.NODE_ENV === "development" ? devUrl : prodUrl
  win.loadURL(startUrl)
}

app.whenReady().then(createWindow)

ipcMain.handle("publish-cluster", () => {
  publishCluster()
})

ipcMain.handle("find-clusters", () => {
  return new Promise(resolve => {
    const clusters = []
    findClusters(service => {
      clusters.push({
        name: service.name,
        host: service.referer.address,
        port: service.port
      })
      resolve(clusters)
    })
  })
})
