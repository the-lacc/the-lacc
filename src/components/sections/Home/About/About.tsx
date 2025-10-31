import { FC } from 'react';
import Image from 'next/image';

import Icon from '@img/about/icon.svg'

import Button from '@components/ui/Button/Button';

import styles from './About.module.scss'

const About: FC = () => {
    return (
        <section className={styles.wrapper} id="about">
            <div className="container">
                <div className={styles.about}>
                    <div className={styles.content} data-aos="fade-right">
                        <h2 className={styles.title}>Construction <span className='highlight'>Lorem</span> Ipsum Sectors</h2>
                        <p className={styles.description}>Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc</p>
                        <Button text="Start Project" href="#contact" type='dark' className={styles.button}/>
                    </div>
                    <div className={styles.image} data-aos="zoom-in">
                        <Image src="/img/about/photo.jpg" blurDataURL='/img/about/photo.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                    </div>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.icon}>
                            <Icon />
                        </div>
                        <div className={styles.subcontent}>
                            <h3 className={styles.subtitle}>10M+</h3>
                            <p className={styles.subdesc}>lorem ipsum</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.icon}>
                            <Icon />
                        </div>
                        <div className={styles.subcontent}>
                            <h3 className={styles.subtitle}>10M+</h3>
                            <p className={styles.subdesc}>lorem ipsum</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.icon}>
                            <Icon />
                        </div>
                        <div className={styles.subcontent}>
                            <h3 className={styles.subtitle}>10M+</h3>
                            <p className={styles.subdesc}>lorem ipsum</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.icon}>
                            <Icon />
                        </div>
                        <div className={styles.subcontent}>
                            <h3 className={styles.subtitle}>10M+</h3>
                            <p className={styles.subdesc}>lorem ipsum</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;