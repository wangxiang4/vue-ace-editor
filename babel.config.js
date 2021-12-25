module.exports = {
  "presets": [
    [
      "@babel/preset-env", {
        "targets": {
          "browsers": [
            'Chrome >= 46',
            'Firefox >= 45',
            'Safari >= 10',
            'Edge >= 13',
            'iOS >= 10',
            'ie >= 8',
            'Electron >= 0.36'
          ]
        }
      }
    ]
  ]
}
