module.exports = function (config) {

  config.setDynamicPermalinks(false)

  config.addWatchTarget('./app/scss/')
  config.addWatchTarget('./app/assets/index.js')

  return {
    dir: {
      input: 'app',
      output: 'dist',
      includes: '_includes',
      data: "_data",
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'png', 'jpg', 'jpeg', 'gif', 'ico', 'svg', 'js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
