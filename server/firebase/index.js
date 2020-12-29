var admin = require('firebase-admin');

var serviceAccount = require('../config/firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ecommerce-antdesign.firebaseio.com'
});

module.exports = admin;
