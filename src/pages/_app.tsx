import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/navbar";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <div className="pt-10"> 
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
