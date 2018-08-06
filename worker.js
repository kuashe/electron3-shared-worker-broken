var increment   = 0
var remoteWindows = []


self.onconnect = onWindowConnect


function onWindowConnect(e)
{
    const port = e.ports[0]

    remoteWindows.push(port)

    setInterval( () => {

            increment++
            port.postMessage( increment )
            
    } , 2000 )

}

