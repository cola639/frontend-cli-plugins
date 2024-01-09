const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require('terser-webpack-plugin')
const WebpackBar = require('webpackbar')                      // webpack 进度条
const WorkBoxPlugin = require('workbox-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    open: false,
    port: 8989,
    https: false
      // 代理baseUrl即 process.env.REACT_APP_API_URL
      // '/dev-api': {
      //   target: 'http://localhost:3000',
      //   pathRewrite: {
      //     '^/dev-api': ''
      //   },
      //   changeOrigin: true,
      //   secure: false
      // },
      // '/other-api': {
      //   target: 'https://apis.map.qq.com',
      //   pathRewrite: {
      //     '^/other-api': ''
      //   },
      //   changeOrigin: true,
      //   secure: false
      // }
  },
  
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    plugins: [
      // development || production plugins
      new WebpackBar({ profile: true }),
      ...(isProd ? [new BundleAnalyzerPlugin(), new CompressionWebpackPlugin()] : [])
    ],
    configure: webpackConfig => {
      const workBoxPluginIndex = webpackConfig.plugins.findIndex(
        plugin => plugin instanceof WorkBoxPlugin.InjectManifest
      )
      if (workBoxPluginIndex !== -1) {
        const plugin = webpackConfig.plugins[workBoxPluginIndex]
        plugin.config.maximumFileSizeToCacheInBytes = 50 * 1024 * 1024
      }

      if (isProd) {
        
        // Drop console
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true
              }
            }
          })
        ]

        // Cache group
        webpackConfig.optimization.splitChunks = {
          chunks: 'all',
          automaticNameDelimiter: '~',
          cacheGroups: {
            vendors: {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              priority: -20
            },
            mui: {
              name: 'mui',
              test: /[\\/]node_modules[\\/]@mui[\\/]/,
              priority: 20
            },
            echarts: {
              name: 'echarts',
              test: /[\\/]node_modules[\\/]echarts[\\/]/,
              priority: -10
            }
          }
        }
      }
      return webpackConfig
    },
  },

  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: true,
        },
      ],
    ],
  },
  plugins: [],
}
