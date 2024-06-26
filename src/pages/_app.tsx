import Footer from "@/components/Footer";
import NavBarContainer from "@/components/NavBarContainer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import paperTexture from "public/paper-texture.jpg";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ErrorBoundary from "@/components/ErrorBoundry";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      scriptProps={{
        async: false, // optional, default to false,
        defer: false, // optional, default to false
        appendTo: "head", // optional, default to "head", can be "head" or "body",
        nonce: undefined,
      }}>
      <Head>
        <title>Integrity Tech</title>
        <meta
          name="description"
          content="Website for software company Integrity Tech"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          backgroundImage: `url(${paperTexture.src})`,
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          minHeight: "100vh",
        }}>
        <div
          style={{
            backgroundColor: "rgb(255, 255, 255, 0.5)",
            minHeight: "100vh",
          }}>
          <NavBarContainer />
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
          <Footer />
        </div>
      </main>
    </GoogleReCaptchaProvider>
  );
}
