import { FC } from 'react'

import styles from './Home.module.scss'
import Offer from './Offer/Offer'
import Companies from './Companies/Companies'
import About from './About/About'

const Home: FC = () => {
    return (
        <>
            <Offer />
            <Companies />
            <About />
        </>
    )
}

export default Home