import style from "@/styles/Contact.module.scss";
import Image from "next/image";
import {Poppins, Lora} from "next/font/google";
import nkar from "@/public/images/about-10.jpg";
import Button from "@/components/button";
import Head from "next/head";

const lora = Lora({weight: "400", subsets: ["latin"],style:"italic"})
const poppins = Poppins({weight: "700", subsets: ["latin"]})

const contactItems = [
    {
        icon:"/images/icons8-location-50.png",
        name:"name",
        info:"40 Park Ave, Brooklyn, New York 70250"
    },
    {
        icon:"/images/icons8-phone-50.png",
        name:"phone",
        info:"1-800-111-2222"
    },
    {
        icon:"/images/icons8-email-50.png",
        name:"email",
        info:"contact@example.com"
    },
]

const Contact = () =>{
    return(
        <>
        <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>
        <meta name="description" content="Contact us"/>
        <meta name="keywords" content="Dina, restuarant"/>
        </Head>
        <main>
            <section className={style.hero}>
                <h2 style={poppins.style}>contact</h2>
                <p>We love to hear from you</p>
            </section>
            <section className={style.contact}>
                <div className={style.contactBox}>
                    <Image src={nkar} alt="nkar" quality={100} width={400} height={200}/>
                    <div className={style.contactInfo}>
                        {contactItems.map((item,index) =>{
                            return(
                                <div key={index}>
                                    <Image src={item.icon} width={30} height={30} alt={item.name}/>
                                    <div className={style.info}>
                                        <p style={poppins.style}>{item.name}</p>
                                        <p>{item.info}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={style.form}>
                    <h2 style={poppins.style}>get in touch</h2>
                    <p>You have a piece of advice or a suggestion that you would like to share with us? Feel free to contact us.</p>
                    <div className={style.inputs}>
                        <div className={style.name}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name"/>
                        </div>
                        <div className={style.email}>
                            <label htmlFor="email"> Email</label>
                            <input type="email" id="email"/>
                        </div>
                        <div className={style.subject}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject"/>
                        </div>
                        <div className={style.message}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message"></textarea>
                        </div>
                    </div>
                </div>
                <div className={style.btn}>
                    <Button text="send message" />
                </div>
            </section>
            <section className={style.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6057020503613!2d-73.9832642234345!3d40.74870093536709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259072292fed9%3A0xbdbed41222878e99!2zNDAgUGFyayBBdmUsIE5ldyBZb3JrLCBOWSAxMDAxNiwg0KHQqNCQ!5e0!3m2!1sru!2sam!4v1689716702225!5m2!1sru!2sam" width="600" height="450"  loading="lazy" ></iframe>            
            </section>
        </main>
        </>
    )
}

export default Contact