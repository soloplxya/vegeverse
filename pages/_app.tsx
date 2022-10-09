import "../styles/globals.css";
import "../styles/burger.css";
import type { AppProps } from "next/app";
import Chakra from "../components/chakra";
import { Sidebar } from "../components/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Sidebar />
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
