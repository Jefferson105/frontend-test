require('dotenv').config();

const Dotenv = require('dotenv-webpack');
const path = require('path');
const withProgressBar = require('next-progressbar');

module.exports = withProgressBar({
    target: 'serverless',
    compress: true,
    webpack: (config) => {
        if (typeof config.output != 'undefined')
            config.output.globalObject = 'this';

        config.plugins.push(
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        );

        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    }
});
