import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Head>
          <title>Integrity Tech</title>
          <meta
            name="description"
            content="Website for software company Integrity Tech"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="icon_trimmed_transparent_blue.png"
          />
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
