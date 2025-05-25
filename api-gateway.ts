import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = 3000;

// Product Service
app.use('/products', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
  pathRewrite: { '^/products': '' },
}));

// User Service
app.use('/users', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
  pathRewrite: { '^/users': '' },
}));

// Order Service
app.use('/orders', createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrigin: true,
  pathRewrite: { '^/orders': '' },
}));

app.listen(PORT, () => {
  console.log(`API Gateway running at http://localhost:${PORT}`);
});
