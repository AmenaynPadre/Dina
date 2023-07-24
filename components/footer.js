import style from "../styles/Footer.module.scss";


const Footer = () =>{
    return (
        <footer className={style.footer}>
            <div className={style.footerInfo}>
                <div>
                    <h3>address:</h3>
                    <p>Dina Restaurant</p>
                    <p>40 Park Ave, Brooklyn, New York 70250</p>
                </div>
                <div>
                    <h3>RESERVATION:</h3>
                    <p>000-111-222</p>
                    <p>contact@dina.com</p>
                </div>
                <div>
                    <h3>OPEN HOURS:</h3>
                    <p>Monday - Friday: 10 AM - 11 PM</p>
                    <p>Saturday - Sunday: 9 AM - 1 PM</p>
                </div>
            </div>

            <p>
                COPYRIGHT © 2021, DINA . DESIGNED BY MATCHTHEMES.COM
            </p>
        </footer>
    )
}

export default Footer