import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="px-6 xl:px-24">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
