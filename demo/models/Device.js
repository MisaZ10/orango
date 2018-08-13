const arango = require('../../arango')

let schema = arango.Schema({
  user: String,
  token: String,
  provider: String, // firebase, onesignal
  platform: { type: String, valid: ['android', 'ios', 'browser'] },
  os: String, // mac, windows, linux
  browser: String,
  device: String // safari, chrome, MAC id on device etc
}, {
  strict: true,
  indexes: [{
      type: 'hash',
      fields: ['user']
    }
  ]
})

module.exports = arango.model('Device', schema)
