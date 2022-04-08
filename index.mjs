import { fastify } from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;

const app = fastify();

async function startApp() {
    try {
        // Serve static files from the "public" directory.
        app.register(fastifyStatic, {
            root: path.join(__dirname, 'static')
        });

        // Define "/" route.
        app.get('/', {}, (request, reply) => {
            return reply.sendFile('index.html')
        });




        await app.listen(PORT);
        console.log('site is served at localhost://' + PORT);
    } catch (e) {
        console.error(e);
    }
}

startApp();