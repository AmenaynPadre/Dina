import style from "@/styles/Reservation.module.scss"
import Button from "@/components/button";
import {Poppins, Lora} from "next/font/google";
import Head from "next/head";

const lora = Lora({weight: "400", subsets: ["latin"],style:"italic"})
const poppins = Poppins({weight: "700", subsets: ["latin"]})


const Reservation = () =>{
    return(
        <>
        <Head>
        <title>Reservation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>
        <meta name="description" content="Reserv your table"/>
        <meta name="keywords" content="Dina, restuarant"/>
        </Head>
        
        <main className={style.main}>
            <section className={style.hero}>
                <h2 style={poppins.style}>book your table</h2>
                <p>We accept reservation. Call us or complete the form below</p>
            </section>
            <section className={style.form}>
                <h2>make a reservation</h2>
                <p>You may make a reservation any time online or by calling (000) 111 2222 during our opening hours:</p>
                <div className={style.formInfo}>
                    <div className={style.inputs}>
                        <div>
                            <label htmlFor="name">Name*</label>
                            <input id="name" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email*</label>
                            <input id="email" type="email"/>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone*</label>
                            <input id="phone" type="tel"/>
                        </div>
                        <div>
                            <label htmlFor="date">Date*</label>
                            <input id="date" type="date"/>
                        </div>
                        <div>
                            <label htmlFor="time">Time*</label>
                            <input id="time" type="time"/>
                        </div>
                        <div>
                            <label htmlFor="seats">Seats*</label>
                            <input id="seats" type="text"/>
                        </div>
                    </div>
                    <div className={style.textarea}>
                        <label htmlFor="text">Special Requests</label>
                        <textarea id="text"></textarea>
                    </div>
                    <Button text={"book now"} variant={false}/>
                </div>
            </section>
        </main>
        </>
    )
}

export default Reservation