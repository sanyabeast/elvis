const electron = require('electron')
const proc = require('child_process')

class ElectronSpawner {
        constructor () {}
        spawn ( entry_point_url ) {
                console.dir(electron)
                let child = proc.spawn(electron, [`electron.js`])
                return child
        }
}
module.exports.ElectronSpawner = ElectronSpawner