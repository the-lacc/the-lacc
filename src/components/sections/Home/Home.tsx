import { FC } from 'react'

import styles from './Home.module.scss'
import Offer from './Offer/Offer'
import Companies from './Companies/Companies'
import About from './About/About'
import Services from './Services/Services'

const Home: FC = () => {
    return (
        <>
            <Offer />
            <Companies />
            <About />
            <Services />
        </>
    )
}

export default Home