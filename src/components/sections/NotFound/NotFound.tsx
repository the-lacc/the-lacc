import { FC } from "react";

import Image from "next/image";

import styles from "./NotFound.module.scss";
import Link from "next/link";

const NotFound: FC = () => {
    return (
        <div className={styles.wrapper} data-aos="fade-down">
            <p className={styles.description}>This page does not exists!</p>
            <Link href="/">
                <button type="button" className={`${styles.button} themeButton`} aria-label="Back">
                    Back
                </button>
            </Link>
        </div>
    );
};

export default NotFound;