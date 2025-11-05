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
                    <h2 className={styles.title}>Our <span className='highlight'>Services</span></h2>
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
                                <h4 className={styles.category}>Interior</h4>
                                <p className={styles.date}>Jul 18, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Tenant Improvements</h3>
                            <p className={styles.desc}>Build-outs, reconfigurations, and finish upgrades for occupied or new spaces.</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/2.jpg" blurDataURL='/img/service/2.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Exterior</h4>
                                <p className={styles.date}>Sep 03, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Exterior & Facades</h3>
                            <p className={styles.desc}>Storefront updates, entries, paint, panels, canopies, and signage work.</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/3.jpg" blurDataURL='/img/service/3.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Carpentry</h4>
                                <p className={styles.date}>May 11, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Interiors & Framing</h3>
                            <p className={styles.desc}>Metal studs, drywall, ceilings, doors/hardware, and interior finish systems.</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/3.jpg" blurDataURL='/img/service/3.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Systems</h4>
                                <p className={styles.date}>Aug 29, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>MEP Coordination</h3>
                            <p className={styles.desc}>Scheduling and integrating electrical, HVAC, and plumbing work with inspections.</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/1.jpg" blurDataURL='/img/service/1.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Planning</h4>
                                <p className={styles.date}>Jun 07, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Design-Build & CM</h3>
                            <p className={styles.desc}>Budgeting, VE options, schedule control, and risk-managed delivery.</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/2.jpg" blurDataURL='/img/service/2.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Service</h4>
                                <p className={styles.date}>Oct 14, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Service & Small Works</h3>
                            <p className={styles.desc}>Punch lists, repairs, maintenance, and quick-response field work.</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <div className={styles.image}>
                                <Image src="/img/services/2.jpg" blurDataURL='/img/service/2.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.category}>Site</h4>
                                <p className={styles.date}>Apr 25, 2025</p>
                            </div>
                            <h3 className={styles.subtitle}>Concrete & Site Repairs</h3>
                            <p className={styles.desc}>Selective slab work, leveling, patching, and ADA compliance corrections.</p>
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