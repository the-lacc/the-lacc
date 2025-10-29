import { FC, MouseEvent } from 'react'

import styles from "./Footer.module.scss";
import anchorClick from '@helpers/anchorClick';
import getAppWorkYears from '@helpers/getAppWorkYears';
import { usePathname } from 'next/navigation';

const Footer: FC = () => {
    const pathname = usePathname();

    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        anchorClick(e);
    }

    return (
        <footer className={styles.wrapper} id="contacts">
            <div className="container">
                <h1>Footer</h1>
            </div>
        </footer>
    );
};

export default Footer;