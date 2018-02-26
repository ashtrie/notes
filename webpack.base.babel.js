import path from 'path';

const baseConfig = {
    context: path.resolve(__dirname, 'client'),
    entry: ['./index.js'],
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    watchOptions: {
        poll: true,
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
                    plugins: [
                        'transform-class-properties',
                        'transform-decorators-legacy',
                        'transform-object-rest-spread',
                    ],
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.json'],
    },
};

export default baseConfig;