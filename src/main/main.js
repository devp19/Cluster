const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  const devUrl = "http://localhost:3000";
  const prodUrl = `file://${path.join(__dirname, "../../renderer/out/index.html")}`;
  const startUrl = process.env.NODE_ENV === "development" ? devUrl : prodUrl;

  win.loadURL(startUrl);
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
