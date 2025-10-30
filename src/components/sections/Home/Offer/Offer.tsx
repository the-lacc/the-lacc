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
                <div className={styles.offer}>
                    <h1 className={styles.title}>Lorem Ipsum Ipsum <span className='highlight'>Etc</span> Btc</h1>
                    <p className={styles.description}>Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc Lorem Ipsum Ipsum Etc Btc</p>
                    <Button text="Start Project" href="#contact" className={styles.button}/>
                </div>
            </div>
        </section>
    )
}

export default Offer