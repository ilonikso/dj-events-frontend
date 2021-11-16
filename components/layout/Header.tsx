import Link from "next/link";

import { Search } from "@/components/ui";

import styles from "@/styles/Header.module.css";

export const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>DJ Events</a>
          </Link>
        </div>

        <Search />

        <nav>
          <ul>
            <li>
              <Link href="/events">
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href="/events/add">
                <a>Add event</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
