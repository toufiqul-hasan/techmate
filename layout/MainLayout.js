import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
