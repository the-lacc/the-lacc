import { FC, useState } from 'react';

import Image from 'next/image';

import styles from './Contact.module.scss'
import Swal from 'sweetalert2';
import sendMessage from '@helpers/sendMessage';

const Contact: FC = () => {
    const [nameValue, setNameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [phoneValue, setPhoneValue] = useState<string>('');
    const [descValue, setDescValue] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (localStorage.getItem('isApplicationSent')) {
            Swal.fire("Application is submitted already.")
        } else {
            if(nameValue && emailValue && phoneValue && descValue) {
                sendMessage(`🙍 Name: ${nameValue}\n✉️ E-Mail: ${emailValue}\n📞 Phone: ${phoneValue}\n💬 Description: ${descValue}`)
                Swal.fire({
                    title: "Sent!",
                    text: "We have received your request and will respond to you as soon as possible!",
                    icon: "success"
                });
                localStorage.setItem('isApplicationSent', 'true')
            } else {
                return false;
            }
        }
    }

    return (
        <section className={styles.wrapper} id="contact">
            <div className="container">
                <div className={styles.column} data-aos="fade-down">
                    <h2 className={styles.title}>Start your <span className='highlight'>project</span></h2>
                    <p className={styles.description}>Share your project details — we’ll outline scope, budget, and schedule.</p>
                </div>
                <div className={styles.row} data-aos="fade-right">
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' className={styles.input} onInput={(e: any) => setNameValue(e.target.value)} required />
                        <input type="email" placeholder='E-Mail' className={styles.input} onInput={(e: any) => setEmailValue(e.target.value)} required />
                        <input type="phone" placeholder='Phone' className={styles.input} onInput={(e: any) => setPhoneValue(e.target.value)} required />
                        <textarea placeholder="Description" className={styles.textarea} onInput={(e: any) => setDescValue(e.target.value)} required></textarea>
                        <button type="submit" className={styles.button} aria-label='Submit'>Start your project</button>
                    </form>
                    <div className={styles.image} data-aos="zoom-in">
                        <Image src="/img/contact/image.jpg" blurDataURL='/img/contact/image.jpg' placeholder='blur' layout='fill' alt="Remodeling" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;