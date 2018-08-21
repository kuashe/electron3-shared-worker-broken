// Modules to control application life and create native browser window
const {app, BrowserWindow, protocol} = require('electron')
const path = require('path')

protocol.registerStandardSchemes(['atom'])

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
const windows = []

function createWindow () 
{
  // Create the browser window.
  const window = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  window.loadFile('index.html')

  window.toggleDevTools()
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  window.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    window = null
  })

  windows.push( window )
}


function registerFileRequest( request , callback )
{
  
    const url = request.url.substr(7)
    callback({path :path.normalize(`${__dirname}/${url}`)})
}

function registerFileFailure(error)
{
  if (error) console.error('Failed to register protocol')
}

app.on('ready', () => {
  
  protocol.registerFileProtocol('atom', registerFileRequest , registerFileFailure )
  
  createWindow()
  
  
  //Causes flickering with electron 3.X
  setTimeout(() => {
      
    createWindow()

  }, 1500 )
})

app.on('window-all-closed', function () {
    app.quit()
})

