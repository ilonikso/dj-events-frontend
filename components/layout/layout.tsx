import { FC } from "react";
import Head from "next/head";

import styles from "../../styles/Layout.module.css";

export interface LayoutProps {
  title?: string;
  description?: string;
}

const Layout: FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest dj and other musical events",
};

export default Layout;
