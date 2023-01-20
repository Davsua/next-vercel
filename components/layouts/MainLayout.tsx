import Head from "next/head";
import React from "react";
import { FC } from "react";
import NavBar from "../NavBar";
import styles from "./MainLayout.module.css";

type Props = {
  children?: React.ReactNode
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>David home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="david, next.js, app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
