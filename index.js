const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;
const TARGET_SERVER = process.env.TARGET_SERVER || 'https://google.com';

app.use('/', createProxyMiddleware({
    target: TARGET_SERVER,
    changeOrigin: true,
    ws: true
}));

app.listen(PORT, () => {
    console.log(`Proxy rodando na porta ${PORT}`);
});
