const {app, BrowserWindow} = require('electron')

let win;

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

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#fff',
    })

    win.loadFile(`dist/electro-janusz/index.html`)
    win.on('closed', function() {
        win = null;
    })
}