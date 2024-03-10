import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

interface PluginsOptions {
  HTMLPath: string,
  isDev: boolean
}

export function buildPlugins(options: PluginsOptions): webpack.WebpackPluginInstance[] {
  const {HTMLPath, isDev} = options;

  return [
    new HTMLWebpackPlugin({
      template: HTMLPath
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    })
  ]
}
