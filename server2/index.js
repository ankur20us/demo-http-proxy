const
  http = require('http'),
  httpProxy = require('http-proxy');

const port = 4567;
const proxy = httpProxy.createProxyServer({});
proxy.on('proxyReq', proxyReq => proxyReq.setHeader('X-Special-Proxy-Header', 'foobar'));

const baseUrlOfParentServer = "http://localhost";
const portOfParentServer = 3000;
const fullUrlOfParentServer = baseUrlOfParentServer + ":" + portOfParentServer;

const server = http.createServer((req, res) => {
  proxy.web(req, res, {
    target: fullUrlOfParentServer
  });
});

console.log("I AM PRXOY SERVER, AND LISTENING ON ", port)
server.listen(port);
