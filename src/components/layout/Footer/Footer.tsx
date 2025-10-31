import { FC, MouseEvent } from 'react'

import styles from "./Footer.module.scss";
import anchorClick from '@helpers/anchorClick';
import getAppWorkYears from '@helpers/getAppWorkYears';
import { usePathname } from 'next/navigation';
import Logo from '@components/ui/Logo/Logo';
import Button from '@components/ui/Button/Button';

import InstagramIcon from '@img/footer/instagram.svg';
import FacebookIcon from '@img/footer/facebook.svg';
import TelegramIcon from '@img/footer/telegram.svg';

const Footer: FC = () => {
    const pathname = usePathname();

    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        anchorClick(e);
    }

    return (
        <footer className={styles.wrapper} id="contacts">
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.left} data-aos="fade-right">
                        <Logo iconClassName={styles.logo} />
                        {window.screen.width > 768 && <p className={styles.copyright}>© {getAppWorkYears(2025)} The LACC Inc. <br/>All rights reserved.</p>}
                    </div>
                    <div className={styles.menu} data-aos="fade-down">
                        <h3 className={styles.title}>Menu</h3>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <a href="#offer" className={styles.link} onClick={anchorHandleClick}>
                                    Home
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="#about" className={styles.link} onClick={anchorHandleClick}>
                                    About
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="#services" className={styles.link} onClick={anchorHandleClick}>
                                    Services
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="#process" className={styles.link} onClick={anchorHandleClick}>
                                    Process
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="#contact" className={styles.link} onClick={anchorHandleClick}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contacts} data-aos="fade-down">
                        <h3 className={styles.title}>Contacts</h3>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <a href="tel:+8225445254" className={styles.phone} onClick={anchorHandleClick}>
                                    +822 544 5254
                                </a>
                            </li>
                            <li className={styles.item}>
                                <a href="mailto:info@laac.com" className={styles.email} onClick={anchorHandleClick}>
                                    info@laac.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.right} data-aos="fade-left">
                        <Button text="Start Project" href="#contact" className={styles.button}/>
                        <div className={styles.socials}>
                            <a href="https://instagram.com" className={styles.social} target='_blank'>
                                <InstagramIcon />
                            </a>
                            <a href="https://facebook.com" className={styles.social} target='_blank'>
                                <FacebookIcon />
                            </a>
                            <a href="https://telegram.com" className={styles.social} target='_blank'>
                                <TelegramIcon />
                            </a>
                        </div>
                    </div>
                    {window.screen.width <= 768 && <p className={styles.copyright}>© {getAppWorkYears(2025)} The LACC Inc. <br/>All rights reserved.</p>}
                </div>
            </div>
        </footer>
    );
};

export default Footer;