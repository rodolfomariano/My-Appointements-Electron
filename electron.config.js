const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    minWidth: 1200,
    minHeight: 680,
    // transparent: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.loadURL(`http://localhost:3000`)
})