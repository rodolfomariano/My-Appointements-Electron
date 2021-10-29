const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 720,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.loadURL(`http://localhost:3000`)
})