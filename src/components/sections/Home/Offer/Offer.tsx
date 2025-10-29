import { FC } from 'react'
import styles from './Offer.module.scss'
import Logo from '@components/ui/Logo/Logo'

const Offer: FC = () => {
    return (
        <section className={styles.wrapper} id="offer">
            <div className="container">
                <Logo />
            </div>
        </section>
    )
}

export default Offer