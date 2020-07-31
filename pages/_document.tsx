import Document, { Html, Head, Main, NextScript } from 'next/document';

const DEFAULT_TITLE = 'Next Template';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/static/reset.min.css"
                    />
                    <title>{DEFAULT_TITLE}</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
