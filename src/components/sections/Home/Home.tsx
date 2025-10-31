import { FC } from 'react'

import styles from './Home.module.scss'
import Offer from './Offer/Offer'
import Companies from './Companies/Companies'

const Home: FC = () => {
    return (
        <>
            <Offer />
            <Companies />
        </>
    )
}

export default Home