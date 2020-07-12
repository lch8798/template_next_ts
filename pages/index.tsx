import React, { useState } from 'react';

import Link from 'next/link';

import { hello } from '@/api/index';
import { time } from '@/utils/index';

export default function App(): JSX.Element {
    const [fetchedData, setFetchedData] = useState('');

    async function testFetch(): Promise<void> {
        setFetchedData('loading...');
        await time.sleep(1000);

        const result: hello.Hello = await hello.getHello();
        setFetchedData(result.data);
    }

    return (
        <p>
            <button onClick={testFetch}>Test Fetch</button>
            <div>
                <p>{fetchedData}</p>
            </div>
            <div>
                <p>Dynamic Routes</p>
                <Link
                    href="/[dynamic]/[id]/[comment]"
                    as="/dynamic/chan/hello world"
                >
                    <a>/dynamic/chan/hello world</a>
                </Link>
            </div>
        </p>
    );
}
