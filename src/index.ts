import env  from './config';
import api from './app';

const HOST: string = env.HOST;
const PORT: number = env.PORT;

try {
    api.listen(PORT, () => console.log(msg));
    const msg: string =
        `\nServer listening on ${HOST}:${PORT}/\n`;
} catch (error) {
    console.log('Error: Can not listen on port', PORT);
};