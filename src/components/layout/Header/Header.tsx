import { FC, RefObject, useEffect, useState, MouseEvent } from 'react';
import Link from 'next/link';

import anchorClick from '@helpers/anchorClick';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';

type Props = {
    isSticky: boolean,
    headerRef: RefObject<HTMLElement>
}

const Header: FC<Props> = ({ isSticky, headerRef }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const pathname = usePathname()

    const toggleMenu = () => {
        //document.body.classList.toggle('lock-scroll');
        setIsOpen(!isOpen);
    }

    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (window.screen.width < 993) toggleMenu();
        anchorClick(e);
    }

    return (
        <header className={`${styles.wrapper} ${isSticky ? styles.sticky : ''}`} id="header" ref={headerRef}>
            <div className="container">
                <nav className={styles.navigation}>
                    <h1>Header</h1>
                </nav>
            </div>
            <div className={styles.line}></div>
        </header>
    );
}

export default Header;