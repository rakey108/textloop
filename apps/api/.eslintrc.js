module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:node/recommended',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off', // Allow ES modules
    // You can add or override rules here for Node/Express
  },
}; 