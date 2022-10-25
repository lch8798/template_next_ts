import React, { useState } from "react";
import Link from "next/link";
import { Layout } from "@components/index";

// hooks
import useCounter from "@hooks/useCounter";

// utils
import { hello } from "@api/index";
import { time } from "@utils/index";

export default function App(): JSX.Element {
  const counter = useCounter();

  const [loading, setLoading] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState<string>(null);

  async function fetchHello(): Promise<void> {
    try {
      setLoading(true);

      // temp delay
      await time.sleep(1000);

      const result = await hello.getHello();
      setFetchedData(result.text);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div>
        <h1>Template</h1>
      </div>

      {/* Counter - Hooks, Redux, Modules */}
      <div>
        <h3>Counter</h3>
        <p>{counter.state.value}</p>
        <button onClick={counter.increment}>+</button>
        <button onClick={counter.decrement}>-</button>
      </div>

      {/* Fetch - Render By Component State */}
      <div>
        <h3>Fetch</h3>
        {loading && <p>Loading...</p>}
        {!loading &&
          (fetchedData === null ? <p>데이터 없음.</p> : <p>{fetchedData}</p>)}

        <button onClick={fetchHello} disabled={loading}>
          Test Fetch
        </button>
      </div>

      {/* Dynamic Routes - Next.js Built-In Router */}
      <div>
        <h3>Dynamic Routes</h3>
        <Link href={"/dynamic/[id]/[comment]"} as={"/dynamic/chan/hello world"}>
          <a>/dynamic/chan/hello world</a>
        </Link>
      </div>
    </Layout>
  );
}
