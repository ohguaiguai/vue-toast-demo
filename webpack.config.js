/**
 * Created by admin on 17/11/14.
 */
var path = require('path');
module.exports = {
    entry: './src/lib/index.js',
    output: {
        path: path.join(__dirname,'./dist'),// 必须是绝对路径
        filename: 'vue-mobile-toast.js',
        libraryTarget: 'umd', // 指定打包文件的格式
        library: 'VueMobileToast' // 指定打包的库的名称
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
                        scss: 'style-loader!css-loader!stylus-loader'// 从右向左
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