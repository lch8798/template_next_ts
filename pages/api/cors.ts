import Cors from 'cors';
import { middleware } from '@/utils/index';

// Initialize the cors middleware
const cors: Function = middleware.initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS'],
    })
);

export default async function handler(req, res) {
    await cors(req, res);

    res.json({ message: 'Hello Everyone!' });
}
