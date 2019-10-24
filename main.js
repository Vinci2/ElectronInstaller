const {app, BrowserWindow, ipcMain, dialog} = require('electron')

let win;

const options = process.argv;
console.log('OPTIONS PASSED: ', process.argv);



app.on('ready', createWindow)
app.on('window-all-closed', function () {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    if(win === null) {
        createWindow();
    }
})

ipcMain.on('openDialog', function() {
    dialog.showOpenDialog(win, {
        properties: ['openDirectory']
    }).then(result => {
        if(result.filePaths[0]) {
            win.webContents.send('selectedPath', result.filePaths[0]);
        }
        
    })
})

ipcMain.on('closeApp', function () {
    win.close()
} )


function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#fff',
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadFile(`dist/electro-janusz/index.html`)
    win.webContents.on('did-finish-load', () => {
        win.webContents.send('passed-params', options.slice(2))
      })
    win.on('closed', function() {
        win = null;
    })
}