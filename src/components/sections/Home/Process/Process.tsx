import { FC } from 'react'

import Button from '@components/ui/Button/Button'

import styles from './Process.module.scss'

const Process: FC = () => {
    return (
        <section className={styles.wrapper} id="process">
            <div className="container">
                <div className={styles.row} data-aos="fade-right">
                    <h2 className={styles.title}>Our <span className='highlight'>Process</span></h2>
                    <Button text="Start Project" href="#contact" type='dark' className={styles.button}/>
                </div>
                <ul className={styles.list} data-aos="zoom-in">
                    <li className={styles.item}>
                        <div className={styles.number}>
                            <p className={styles.text}>1</p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.subtitle}>Scope & Planning</h3>
                            <p className={styles.description}>We define project requirements, site conditions, and schedule expectations.</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.number}>
                            <p className={styles.text}>2</p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.subtitle}>Budget & Coordination</h3>
                            <p className={styles.description}>We align costs, trades, permits, and logistical needs.</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.number}>
                            <p className={styles.text}>3</p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.subtitle}>Build & Manage</h3>
                            <p className={styles.description}>We coordinate field crews and inspections with clean, safe execution.</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.number}>
                            <p className={styles.text}>4</p>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.subtitle}>Close-Out & Handover</h3>
                            <p className={styles.description}>Final walk-through, documentation, and turnover ready for use.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Process;