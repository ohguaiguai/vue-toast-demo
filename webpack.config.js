/**
 * Created by admin on 17/11/14.
 */
var path = require('path');
module.exports = {
    entry: './src/lib/index.js',
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'vue-toast-demo.js',
        libraryTarget: 'umd', // 指定打包文件的格式
        library: 'VueToastDemo' //
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    // 处理vue中的其他部分
                    loaders: {
                        scss: 'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [

    ]
}