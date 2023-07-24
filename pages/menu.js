import style from "@/styles/Menupage.module.scss"
import {Poppins, Lora} from "next/font/google";
import {menuItems} from "@/pages/index";
import Image from "next/image";
import Head from "next/head";

const lora = Lora({weight: "400", subsets: ["latin"],style:"italic"})
const poppins = Poppins({weight: "600", subsets: ["latin"]})

const Menu = () =>{
    return(
        <>
        <Head>
        <title>Menu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>
        <meta name="description" content="Menu Dina restuarant"/>
        <meta name="keywords" content="Dina, restuarant"/>
        </Head>
        <main>
            <section className={style.hero}>
                <h2 style={poppins.style}>Menu</h2>
                <p>Enjoy one of our delicious plates</p>
            </section>

            <section className={style.menu}>
                {menuItems.map((item,index) =>{
                    return(
                        <div className={style.menuBlock} key={index}>
                            <h3>{item.name}</h3>
                            <div className={style.menuItem}>
                                {item.list.map((el,index)=> {
                                    return(
                                        <div className={style.item} key={index}>
                                            <div className={style.itemInfo}>
                                                <Image src={el.img} width={70} height={70} alt={el.desc}/>
                                                <div>
                                                    <p>{el.itemName}</p>
                                                    <p>{el.desc}</p>
                                                </div>
                                            </div>
                                            <span>{el.price}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </section>
        </main>
        </>
    )
}

export default Menu