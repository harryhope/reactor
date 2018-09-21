module.exports = {
  extends: [
    'eslint-config-standard',
    'eslint-config-standard-react'
  ],
  parser: 'babel-eslint',
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  rules: {
    'react/prop-types': 0
  }
}
