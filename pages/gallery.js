import style from "@/styles/Gallery.module.scss"
import {Poppins, Lora} from "next/font/google";
import Image from "next/image";
import Head from "next/head";

const lora = Lora({weight: "400", subsets: ["latin"],style:"italic"})
const poppins = Poppins({weight: "700", subsets: ["latin"]})

const galleryItems = [
    {
        name:"chocolate muffins",
        img:"/images/gallery-9.jpg"
    },
    {
        name:"meat cooking",
        img:"/images/gallery-8.jpg"
    },
    {
        name:"sweet dessert",
        img:"/images/gallery-7.jpg"
    },
    {
        name:"chef's plate",
        img:"/images/gallery-6.jpg"
    },
    {
        name:"friday evening",
        img:"/images/gallery-5.jpg"
    },
    {
        name:"pasta porcess",
        img:"/images/gallery-4.jpg"
    },
    {
        name:"into the kitchen",
        img:"/images/gallery-3.jpg"
    },
    {
        name:"pirvate dinning",
        img:"/images/gallery-2.jpg"
    },
    {
        name:"inside room 1",
        img:"/images/gallery-12.jpg"
    },
    {
        name:"outside",
        img:"/images/gallery-11.jpg"
    },
    {
        name:"dishes course",
        img:"/images/gallery-10.jpg"
    },
    {
        name:"morning breakfast",
        img:"/images/gallery-1.jpg"
    },
]

const Gallery = () =>{
    return(
        <>
        <Head>
        <title>Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>
        <meta name="description" content="Gallery Dina"/>
        <meta name="keywords" content="Dina, restuarant"/>
        </Head>
        <main className={style.main}>
            <section className={style.hero}>
                <h2 style={poppins.style}>gallery</h2>
                <p>Vivamus auctor condimentum sem et gravida. Maecenas id enim</p>
            </section>
            <section className={style.gallery}>
                {galleryItems.map((item,index) =>{
                    return(
                        <div className={style.item} key={index}>
                            <Image className={style.bg} quality={100} src={item.img} alt={item.name} width={500} height={100}/>
                            <p style={poppins.style}>{item.name}</p>
                            <Image className={style.icon} src={"/images/icons8-search.svg"} width={40} height={40} alt="search"/>
                        </div>
                    )
                })}
            </section>
        </main>
        </>
    )
}

export default Gallery