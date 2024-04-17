const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, args) => {
  return {
    mode: args.mode,
    entry: './src/index.tsx',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html'
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all', // 모든 종류의 청크에 대해 코드 스플릿팅 적용
        minSize: 20000, // 최소 20KB가 넘는 모듈만 분리
        minChunks: 1, // 모듈이 최소 1개의 청크에서 사용될 때 분리
        maxAsyncRequests: 30, // 비동기 요청 청크 최대 수
        maxInitialRequests: 30, // 초기 로딩 청크 최대 수
        automaticNameDelimiter: '~', // 이름 구분자
        cacheGroups: {
          defaultVendors: {
            test: /[\\/\]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true // 이미 분리된 청크 재사용 여부
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript'
              ]
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, '/src')
      }
    },
    devServer: {
      port: 3001,
      hot: true,
      open: false,
      historyApiFallback: true // SPA 라우팅 지원을 위한 설정
    }
  }
}
