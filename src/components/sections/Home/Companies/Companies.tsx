import { FC } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from "swiper/modules";

import Image from 'next/image';

import styles from './Companies.module.scss'

const Companies: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                speed={3000}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    500: {
                        slidesPerView: 2
                    },
                    700: {
                        slidesPerView: 3
                    },
                    900: {
                        slidesPerView: 4
                    }
                }}
                allowTouchMove={false}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.image}>
                            <Image src="/img/companies/fedex.png" blurDataURL='/img/companies/fedex.png' placeholder='blur' layout='fill' alt="FedEx" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.image}>
                            <Image src="/img/companies/fedex.png" blurDataURL='/img/companies/fedex.png' placeholder='blur' layout='fill' alt="FedEx" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.image}>
                            <Image src="/img/companies/fedex.png" blurDataURL='/img/companies/fedex.png' placeholder='blur' layout='fill' alt="FedEx" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.image}>
                            <Image src="/img/companies/fedex.png" blurDataURL='/img/companies/fedex.png' placeholder='blur' layout='fill' alt="FedEx" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div className={styles.image}>
                            <Image src="/img/companies/fedex.png" blurDataURL='/img/companies/fedex.png' placeholder='blur' layout='fill' alt="FedEx" />
                        </div>
                    </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Companies;