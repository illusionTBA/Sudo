import { fastify } from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { fileURLToPath } from 'url';
import Server from 'bare-server-node';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;

const app = fastify();

app.register(fastifyStatic, {
    root: path.join(__dirname, 'static')
}).get('/', (req, res) => {
    res.sendFile('index.html')
}).listen(PORT, () => {
    console.log('site is served at localhost:' + PORT);
});


