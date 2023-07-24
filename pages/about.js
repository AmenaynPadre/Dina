import style from "@/styles/About.module.scss"
import {Poppins, Lora} from "next/font/google";
import Image from "next/image";
import Head from "next/head";

const lora = Lora({weight: "400", subsets: ["latin"],style:"italic"})
const poppins = Poppins({weight: "700", subsets: ["latin"]})


const firstSecItems = [
    {
        img:"/images/blog-2.jpg",
        title:"our history",
        desc:"Lorem ipsum dolor sit amet, sea cibo laoreet omnesque ei, usu eu dicit perpetua assueverit. Has ut cibo gubergren, qui et laoreet appareat. Ea usu posse oratio, vel tritani equidem propriae ex. Sit ferri pertinax ei, et eam esse duis. Mea partem debitis interesset ei. Ea eos eirmod disputando, impetus laoreet lucilius no per, ea cum noster rationibus."
    },
    {
        img:"/images/blog-1.jpg",
        title:"what we value",
        desc:"Lorem ipsum dolor sit amet, sea cibo laoreet omnesque ei, usu eu dicit perpetua assueverit. Has ut cibo gubergren, qui et laoreet appareat. Ea usu posse oratio, vel tritani equidem propriae ex. Sit ferri pertinax ei, et eam esse duis. Mea partem debitis interesset ei. Ea eos eirmod disputando, impetus laoreet lucilius no per, ea cum noster rationibus."    }
]

const team = [
    {
        img:"/images/team-1.jpg",
        name:"Silvia Just",
        role:"Owner",
        phone:"000-111-2222",
        email:"silvia@dina.com",
        desc:"Short text description here. Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac."
    },
    {
        img:"/images/team-2.jpg",
        name:"Mike Right",
        role:"Chef",
        phone:"000-111-2222",
        email:"silvia@dina.com",
        desc:"Short text description here. Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac."
    },
    {
        img:"/images/team-3.jpg",
        name:"Anna Robinson",
        role:"Chef",
        phone:"000-111-2222",
        email:"silvia@dina.com",
        desc:"Short text description here. Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac."
    },
    {
        img:"/images/team-4.jpg",
        name:"John Smith",
        role:"Manager",
        phone:"000-111-2222",
        email:"silvia@dina.com",
        desc:"Short text description here. Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac."
    }
]

const About = () =>{
    return(
        <>
        <Head>
        <title>About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>
        <meta name="description" content="About Dina resturant"/>
        <meta name="keywords" content="Dina, restuarant, about us"/>
        </Head>
        <main className={style.main}> 
            <section className={style.hero}>
                <h2 style={poppins.style}>ABOUT US</h2>
                <p>We're passionate about cooking</p>
            </section>
            <section className={style.firstSec}>
                {firstSecItems.map((item,index) =>{
                    return(
                        <div key={index} className={style.item}>
                            <div className={style.img}>
                                <Image src={item.img} alt={item.title} width={300} height={100} quality={100}/>
                            </div>
                            <div className={style.text}>
                                <h3 style={poppins.style}>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
            <section className={style.parSec}>
                <div>
                    <p>10</p>
                    <span>high restuarants</span>
                </div>
                <div>
                    <p>2</p>
                    <span>high restuarants</span>
                </div>
                <div>
                    <p>150</p>
                    <span>high restuarants</span>
                </div>
            </section>
            <section className={style.team}>
                <div className={style.history}>
                    <h2>our history</h2>
                    <p>Delenit commune delectus cu has, labitur recteque in mel. Ad mea equidem similique, qui graeci nusquam suscipiantur in. Eu vidit dicta fuisset vis. Vix integre delicata ad, decore oportere aliquando est ad, vix nostro aliquip omnesque id. Qui te dissentiet dissentiunt, constituto elaboraret vim.</p>
                </div>
                <div className={style.teamInfo}>
                    {team.map((item,index) =>{
                        return(
                            <div key={index}>
                                <Image src={item.img} width={500} height={100} alt={item.name}/>
                                <h3>{item.name}</h3>
                                <small>{item.role}</small>
                                <div>
                                    <p>PHONE:<a href={`tel:${item.phone}`}>{item.phone}</a></p>
                                    <p>EMAIL:<a href={`mailto:${item.email}`}>{item.email}</a></p>
                                </div>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
        </>
    )
}

export default About