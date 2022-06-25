const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const webpack = require('webpack');
const fs = require('fs');
const name = pkg.name;
let plugins = [];

module.exports = (env = {}, argv) => {
  if (env.production) {
    plugins = [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compressor: { warnings: false },
      }),
      new webpack.BannerPlugin(`${name} - ${pkg.version}`),
    ];
  } else {
    const index = 'index.html';
    const indexDev = '_' + index;
    plugins.push(
      new HtmlWebpackPlugin({
        template: fs.existsSync(indexDev) ? indexDev : index,
      }),
    );
  }

  return {
    entry: './src',
    mode: argv.mode || 'none',
    output: {
      filename: `./dist/${name}.min.js`,
      library: name,
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /src/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    externals: { grapesjs: 'grapesjs' },
    plugins: plugins,
  };
};
