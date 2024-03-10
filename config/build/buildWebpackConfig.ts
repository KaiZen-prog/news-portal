import {BuildOptions} from './types/config';
import webpack from 'webpack';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildPlugins} from './buildPlugins';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode, isDev, port} = options;

  return {
    mode: mode,
    entry: paths.entry,

    module: {
      rules: buildLoaders({isDev: isDev}),
    },

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },

    plugins: buildPlugins({HTMLPath: paths.html, isDev: isDev}),
    resolve: buildResolvers({srcPath: paths.src}),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer({port: port}) : undefined,
  }
}
