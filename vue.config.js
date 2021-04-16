const postCssPlugins = require('@mozaic-ds/css-dev-tools/postcssPluginConfig')
const scssSyntax = require('postcss-scss')

// Remove stylelint plugin to use it as a webpack plugin due to an incompatibility
// between postcss stylelint plugin and vue-loader.
// See https://github.com/vuejs/vue-loader/issues/627#issuecomment-277753794
const removeStylelintPlugin = pluginsList => {
  for (const [index, plugin] of pluginsList.entries()) {
    if (['stylelint'].includes(plugin.postcssPlugin)) {
      pluginsList.splice(index, 1)
    }
  }
  return pluginsList
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('postcss-scss')
      .test(/\.scss$/)
      .use('vue-style-loader')
      .loader('postcss-loader')
      .tap(options => {
        options = {
          syntax: scssSyntax,
          plugins: removeStylelintPlugin(postCssPlugins)
        }
        return options
      })
  }
}
