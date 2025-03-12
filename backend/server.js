import 'dotenv/config.js';
import  http  from 'http';
import  app  from './app.js';

const port = process.env.PORT || 3003;
// jo || iske bad ha whi use hoga to send requests in actuality

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);

