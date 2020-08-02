import React, { useState } from 'react';
import Link from 'next/link';
import { Layout } from '@/components/index';
import { Button } from 'antd';

// hooks
import useCounter from '@/hooks/useCounter';

// utils
import { Hello } from '@/types/index';
import { hello } from '@/api/index';
import { time } from '@/utils/index';

export default function App(): JSX.Element {
    const [fetchedData, setFetchedData] = useState(null);

    const counter = useCounter();

    async function testFetch(): Promise<void> {
        setFetchedData('loading...');

        // temp delay
        await time.sleep(1000);

        const result: Hello = await hello.getHello();
        setFetchedData(result.data);
    }

    return (
        <Layout>
            <div>
                <h1>Example</h1>
            </div>

            {/* Counter - Hooks, Redux, Modules */}
            <div>
                <h3>Counter</h3>
                <p>{counter.state.number}</p>
                <Button type="primary" onClick={counter.increment}>
                    +
                </Button>
                <Button type="primary" onClick={counter.decrement}>
                    -
                </Button>
            </div>

            {/* Fetch - Render By Component State */}
            <div>
                <h3>Fetch</h3>
                {fetchedData === null && <p>데이터 없음.</p>}
                {fetchedData !== null && <p>{fetchedData}</p>}
                <Button type="primary" onClick={testFetch}>
                    Test Fetch
                </Button>
            </div>

            {/* Dynamic Routes - Next.js Built-In Router */}
            <div>
                <h3>Dynamic Routes</h3>
                <Link
                    href="/[dynamic]/[id]/[comment]"
                    as="/dynamic/chan/hello world"
                >
                    <a>/dynamic/chan/hello world</a>
                </Link>
            </div>
        </Layout>
    );
}
