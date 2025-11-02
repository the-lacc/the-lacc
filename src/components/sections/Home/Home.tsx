import { FC } from 'react'

import styles from './Home.module.scss'
import Offer from './Offer/Offer'
import Companies from './Companies/Companies'
import About from './About/About'
import Services from './Services/Services'
import Process from './Process/Process'
import Contact from './Contact/Contact'

const Home: FC = () => {
    return (
        <>
            <Offer />
            <Companies />
            <About />
            <Services />
            <Process />
            <Contact />
        </>
    )
}

export default Home