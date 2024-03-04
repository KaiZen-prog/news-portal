import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

interface PluginsOptions {
  HTMLPath: string
}

export function buildPlugins(options: PluginsOptions): webpack.WebpackPluginInstance[] {
  const {HTMLPath} = options;

  return [
    new HTMLWebpackPlugin({
      template: HTMLPath
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}
