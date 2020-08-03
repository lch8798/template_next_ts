import { Hello } from '@/types/index';

export default function (req, res) {
    const resData: Hello = {
        data: 'hello world!',
    };

    res.json(resData);
}
