import { FC } from 'react'

import Button from '@components/ui/Button/Button'

import styles from './Process.module.scss'

const Process: FC = () => {
    return (
        <section className={styles.wrapper} id="process">
            <div className="container">
                <div className={styles.row} data-aos="fade-right">
                    <h2 className={styles.title}>Process <br /> <span className='highlight'>Lorem</span> Ipsum Sectors</h2>
                    <Button text="Start Project" href="#contact" type='dark' className={styles.button}/>
                </div>
                <ul className={styles.list} data-aos="zoom-in">
                    <li className={styles.item}>
                        <div className={styles.number}>
                            <p className={styles.text}>1</p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.subtitle}>Lorem ipsum</h3>
                            <p className={styles.description}>lorem ipsum etc btc lorem ipsum etc btc lorem ipsum etc btc lorem ipsum etc btc lorem ipsum</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.number}>
                            <p className={styles.text}>2</p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.subtitle}>Lorem ipsum</h3>
                            <p className={styles.description}>lorem ipsum etc btc lorem ipsum etc btc lorem ipsum etc btc lorem ipsum etc btc lorem ipsum</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.number}>
                            <p className={styles.text}>3</p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.subtitle}>Lorem ipsum</h3>
                            <p className={styles.description}>lorem ipsum etc btc lorem ipsum etc btc lorem ipsum etc btc lorem ipsum etc btc lorem ipsum</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.number}>
                            <p className={styles.text}>4</p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.subtitle}>Lorem ipsum</h3>
                            <p className={styles.description}>lorem ipsum etc btc lorem ipsum etc btc lorem ipsum etc btc lorem ipsum etc btc lorem ipsum</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Process;