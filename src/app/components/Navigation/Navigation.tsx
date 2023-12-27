import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <header>
            <div className={styles.navigationContainer}>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="/">
                                <span className={styles.navLink}>Home</span>
                            </Link>
                        </li>
                        <li className={`${styles.navItem} ${styles.profileNav}`}>
                            <Link href="/pages/profile">
                                <span className={styles.navLink}>Profile</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;
