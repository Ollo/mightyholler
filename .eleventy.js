module.exports = function (config) {

  config.setDynamicPermalinks(false)

  config.addWatchTarget('./app/scss/')

  return {
    dir: {
      input: 'app',
      output: 'dist',
      includes: '_includes',
      data: "_data",
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'png', 'jpg', 'jpeg', 'ico', 'svg'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
