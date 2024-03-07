const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/home',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/register',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000',
      changeOrigin: true
    })
  );
};