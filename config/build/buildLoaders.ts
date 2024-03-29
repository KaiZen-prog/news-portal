import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface LoadersOptions {
  isDev: boolean
}

export function buildLoaders(options: LoadersOptions): webpack.RuleSetRule[] {
  const {isDev} = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const imageLoader = {
    test: /\.(png|jpe?g|gif|webp)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        "plugins": [
          [
            "i18next-extract",
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            }
          ],
        ]
      }
    }
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      },

      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [
    svgLoader,
    imageLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}
