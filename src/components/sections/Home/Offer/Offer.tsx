import { FC, MouseEvent } from 'react'
import styles from './Offer.module.scss'
import Logo from '@components/ui/Logo/Logo'
import anchorClick from '@helpers/anchorClick'
import Button from '@components/ui/Button/Button'

const Offer: FC = () => {
    const anchorHandleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        anchorClick(e);
    }

    return (
        <section className={styles.wrapper} id="offer">
            <div className="container">
                <div className={styles.offer} data-aos="fade-down">
                    <h1 className={styles.title}>Commercial <span className='highlight'>Renovation</span> & Build-Out</h1>
                    <p className={styles.description}>Professional renovations and build-outs for retail, office, and industrial spaces. Coordinated trades, clean execution, and on-time delivery with one accountable GC.</p>
                    <Button text="Start Project" href="#contact" className={styles.button}/>
                </div>
            </div>
        </section>
    )
}

export default Offer