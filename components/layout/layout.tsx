import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { Showcase } from "@/components/ui";
import styles from "@/styles/Layout.module.css";

import { Header, Footer } from "../layout";

export interface LayoutProps {
  title?: string;
  description?: string;
}

export const Layout: FC<LayoutProps> = ({ title, description, children }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />

      {router.pathname === "/" && <Showcase />}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest dj and other musical events",
};
