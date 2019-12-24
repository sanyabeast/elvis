const ElectronSpawner = require("./src/Utils/ElectronSpawner").ElectronSpawner
const electron_spawner = new ElectronSpawner()
const WebpackDevServer = require("webpack-dev-server")
const webpack_config = require("./webpack.config.js")
const webpack = require("webpack")
// const server = new WebpackDevServer(webpack(webpack_config), webpack_config.devServer);

// server.listen("8000", 'localhost', function (err) {
//         if (err) {
//                 console.log(err);
//         }
//         console.log('WebpackDevServer listening at localhost:', "8000");
// });

let electron_process = electron_spawner.spawn("https://localhost:8000")
