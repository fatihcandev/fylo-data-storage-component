const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'components/'),
      constants: path.resolve(__dirname, 'constants/'),
      icons: path.resolve(__dirname, 'icons/'),
      public: path.resolve(__dirname, 'public/'),
      styles: path.resolve(__dirname, 'styles/'),
    }
    return config
  },
}
