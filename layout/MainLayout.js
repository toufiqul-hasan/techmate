import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Techmate</title>
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
