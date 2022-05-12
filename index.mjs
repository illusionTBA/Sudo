import http from 'http';
import nodeStatic from 'node-static'
import Server from 'bare-server-node';

const PORT = 8080;
const bare = new Server('/bare/', '');
const server = http.createServer();
const serve = new nodeStatic.Server('static/');

server.on('request', (req, res) => {
  if (bare.route_request(req, res)) return true;
  serve.serve(req, res);
})
server.on('upgrade', (req, socket, head) => {
  if(bare.route_upgrade(req, socket, head)) return;
  socket.end();
});
server.listen(PORT)
