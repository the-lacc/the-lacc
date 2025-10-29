import { FC } from 'react';
import Image from 'next/image';

import LogoIcon from '@img/logo.svg'

import anchorClick from '@helpers/anchorClick';
import styles from './Logo.module.scss';

const Logo: FC = () => {
    return (
        <a href="#offer" className={styles.wrapper} onClick={anchorClick} data-aos="zoom-in">
            <div className={styles.icon}>
                <LogoIcon />
            </div>
            {/* <div className={styles.icon}>
                <Image src="/img/logo.png" blurDataURL='/img/logo.png' alt="Logo" placeholder='blur' layout='fill' />
            </div> */}
            {/* <p className={styles.title}>EuroLume Pathways</p> */}
        </a>
    );
}

export default Logo;