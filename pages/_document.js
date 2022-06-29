import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="coffee">
        <Head></Head>
        <body className="px-6 xl:px-24 py-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
