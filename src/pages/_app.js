import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/font.css";
import "@/styles/globals.css";
import { HostnameProvider } from "@/Components/Provider/HostnameProvider";
import PageTransitionProvider from "@/Components/Provider/PageTransitionProvider";

export default function App({ Component, pageProps }) {
  return (
    <HostnameProvider>
      <PageTransitionProvider>
        <Component {...pageProps} />
      </PageTransitionProvider>
    </HostnameProvider>
  );
}
