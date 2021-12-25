module.exports = {
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "env": {
    "node": true
  },
  "rules": {
    "no-plusplus": "off",
    "global-require": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-undefined": "off"
  }
}
