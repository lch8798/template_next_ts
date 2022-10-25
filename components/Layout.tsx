import Head from "next/head";
import { Nav } from "./index";

const DEFAULT_TITLE = "Next Template";

export default function Layout({ title = DEFAULT_TITLE, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      {children}
    </>
  );
}
