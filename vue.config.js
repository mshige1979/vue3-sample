module.exports = {
  devServer: {
    port: 5000,
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/scss/_prepends.scss";`,
      },
    },
  },
};
