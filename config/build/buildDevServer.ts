import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

interface DevServerOptions {
  port: number
}

export function buildDevServer(options: DevServerOptions): DevServerConfiguration {
  const {port} = options;

  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
