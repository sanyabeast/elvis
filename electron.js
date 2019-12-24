const BrowserWindow = electron.remote.BrowserWindow

let win = new BrowserWindow({ width: 400, height: 200 })
win.on('close', function () { win = null })
win.loadURL("localhost:8000")
win.show()