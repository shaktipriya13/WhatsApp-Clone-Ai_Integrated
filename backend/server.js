import 'dotenv/config.js';
import  http  from 'http';
import  app  from './app.js';

const PORT = process.env.PORT || 3010;
// jo || iske bad ha whi use hoga to send requests in actuality

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

