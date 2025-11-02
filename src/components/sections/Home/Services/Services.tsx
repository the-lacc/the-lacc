import { FC } from 'react'
import Image from 'next/image'

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper"; 
import { Autoplay, Navigation } from "swiper/modules";

import Button from '@components/ui/Button/Button'

import PreviousIcon from '@img/services/previous.svg'
import NextIcon from '@img/services/next.svg'

import styles from './Services.module.scss'

const Services: FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className={styles.wrapper} id="services">
            <div className="container">
                <div className={styles.row} data-aos="fade-up">
                    <h2 className={styles.title}>Services <br />Lorem Ipsum <span className='highlight'>Sectors</span></h2>
                    <Button text="Start Project" href="#contact" className={styles.button}/>
                </div>
                <div className={styles.container} data-aos="fade-right">
                    <button type="button" aria-label="Previous" className={styles.previous} onClick={() => swiperRef.current?.slidePrev()}>
                        <div className={styles.icon}>
                            <PreviousIcon />
                        </div>
                    </button>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        className={styles.list}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                autoplay: false
                            },
                            700: {
                                slidesPerView: 2,
                                autoplay: false
                            },
                            1000: {
                                slidesPerView: 3,
                                autoplay: true
                            }
                        }}
                    >
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/1.jpg" blurDataURL='/img/service/1.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Category</h4>
                                <p className={styles.date}>Aug 22, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Lorem Ipsum</h3>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/2.jpg" blurDataURL='/img/service/2.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Category</h4>
                                <p className={styles.date}>Aug 22, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Lorem Ipsum</h3>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/3.jpg" blurDataURL='/img/service/3.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Category</h4>
                                <p className={styles.date}>Aug 22, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Lorem Ipsum</h3>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/3.jpg" blurDataURL='/img/service/3.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Category</h4>
                                <p className={styles.date}>Aug 22, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Lorem Ipsum</h3>
                        </SwiperSlide>
                    </Swiper>
                    <button type="button" aria-label="Next" className={styles.next} onClick={() => swiperRef.current?.slideNext()}>
                        <div className={styles.icon}>
                            <NextIcon />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Services