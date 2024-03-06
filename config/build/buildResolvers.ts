import webpack from 'webpack';

interface ResolversOptions {
  srcPath: string
}

export function buildResolvers(options: ResolversOptions): webpack.ResolveOptions {
  const {srcPath} = options;

  return {
    extensions: ['.tsx', '.ts', '.js'],

    //Для абсолютных импортов
    preferAbsolute: true,
    modules: [srcPath, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
