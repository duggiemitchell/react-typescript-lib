const { FuseBox, WebIndexPlugin } = require('fuse-box')
const path = require('path')

const client = FuseBox.init({
    target: 'browser',
    homeDir: 'src',
    output: 'dist/$name.js',
    plugins: [
        WebIndexPlugin({
            template: './src/index.html'
        })
    ]
})

client
    .bundle('bundle')
    .watch('src/**')
    .instructions(`>index.tsx`)
    .hmr()

client.dev()

client.run()
