import { api } from '@/utils/index';
import { Hello } from '@/types/index';

/**
 * 테스트용 Hello World
 */
export async function getHello(): Promise<Hello> {
    const URL = '/api/hello/hello';

    try {
        const result = await api.get(URL);
        const payload: Hello = result.data;
        return payload;
    } catch (e) {
        throw e;
    }
}
