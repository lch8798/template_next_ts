import type { AppProps } from "next/app";
import React from "react";

import wrapper from "@modules/index";

// Styles
import "../styles/normalize.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
