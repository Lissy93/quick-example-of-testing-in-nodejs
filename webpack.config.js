const path = require('path');
const webpack = require('webpack');
//const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        server: './app.js',
    },
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'bundle.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    //externals: [nodeExternals()],
    module: {
        rules: [
            {
                exclude: /node_modules/
            }
        ]
    }
};