import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint error consectetur modi odio obcaecati tempore dignissimos assumenda, eum reiciendis dolores magni autem at debitis voluptas. Rem ipsa deleniti autem dignissimos.
        </p>
      </main>
    </>
  );
}

export default Home;