const Path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);


module.exports = {

    entry: {
        app: `./dev/main.js`
    },

    output: {
        path: Path.resolve(__dirname, `build/`),
        filename: `main.js`
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`
                }
            },
            {
                test: /\.css$/,
                use: [`style-loader`, `css-loader`]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./dev/index.html"
        })
    ]

};