const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use("/", createProxyMiddleware({
    target: "https://google.com",
    changeOrigin: true,
    secure: false
}));

app.listen(8080, () => {
    console.log("HTTPS Proxy Running on port 8080");
});
