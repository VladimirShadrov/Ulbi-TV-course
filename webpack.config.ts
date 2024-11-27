import path from 'path';
import webpack from 'webpack';
import { BuildPath } from './src/config/build/types/config';
import { buildWebpackConfig } from './src/config/build/buildWebpackConfig';

const paths: BuildPath = {
  build: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev,
});

export default config;
