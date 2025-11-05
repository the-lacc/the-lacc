import { FC } from 'react';
import Image from 'next/image';

import ProjectIcon from '@img/about/project.svg'
import ClockIcon from '@img/about/clock.svg'
import SearchIcon from '@img/about/search.svg'

import Button from '@components/ui/Button/Button';

import styles from './About.module.scss'

const About: FC = () => {
    return (
        <section className={styles.wrapper} id="about">
            <div className="container">
                <div className={styles.about}>
                    <div className={styles.content} data-aos="fade-right">
                        <h2 className={styles.title}>About <span className='highlight'>The LACC</span></h2>
                        <p className={styles.description}>At The LACC, we believe that construction should be structured, transparent, and stress-free for the client. With experience across retail, office, industrial, and mixed-use spaces, we manage every phase — planning, scheduling, permitting, inspections, and delivery.</p>
                        <Button text="Start Project" href="#contact" type='dark' className={styles.button}/>
                    </div>
                    <div className={styles.image} data-aos="zoom-in">
                        <Image src="/img/about/photo.jpg" blurDataURL='/img/about/photo.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                    </div>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.icon}>
                            <ProjectIcon />
                        </div>
                        <div className={styles.subcontent}>
                            <h3 className={styles.subtitle}>Projects Delivered</h3>
                            <p className={styles.subdesc}>30+ completed commercial build-outs.</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.icon}>
                            <ClockIcon />
                        </div>
                        <div className={styles.subcontent}>
                            <h3 className={styles.subtitle}>On-Time Execution</h3>
                            <p className={styles.subdesc}>Schedules maintained without delays.</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.icon}>
                            <SearchIcon />
                        </div>
                        <div className={styles.subcontent}>
                            <h3 className={styles.subtitle}>Inspection Ready</h3>
                            <p className={styles.subdesc}>First-pass approval standard across sites.</p>
                        </div>
                    </li>
                    {/* <li className={styles.item}>
                        <div className={styles.icon}>
                            <Icon />
                        </div>
                        <div className={styles.subcontent}>
                            <h3 className={styles.subtitle}>Trusted Coordination</h3>
                            <p className={styles.subdesc}>One accountable GC managing all trades.</p>
                        </div>
                    </li> */}
                </ul>
            </div>
        </section>
    )
}

export default About;