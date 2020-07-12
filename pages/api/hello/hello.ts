import { hello } from '@/api/index';

export default function (req, res) {
    const resData: hello.Hello = {
        data: 'hello world!',
    };

    res.json(resData);
}
