import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDev } = options;

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.(sa|sc|c)ss$/i,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
  };

  return [typeScriptLoader, cssLoader];
}
