exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat(["emotion",
      ["import", {
        "libraryName": "antd",
        "style": true,
      }],
      "react-loadable/babel"
    ])
  }
}