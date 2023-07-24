import {Poppins, Lora} from "next/font/google";
import style from "@/styles/Blog.module.scss";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const lora = Lora({weight: "400", subsets: ["latin"],style:"italic"})
const poppins = Poppins({weight: "600", subsets: ["latin"]})

const blogItems = [
    {
        category:"Food",
        title:"next level steak sandwich",
        date:"Novermber 11,2021",
        icon:"/images/team-1.jpg",
        name:"Silvia Just",
        img:"/images/gallery-1.jpg",
        desc:"Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu aliquet luctus. Maecenas vehicula metus nisi, nec finibus justo vulputate eget. Pellentesque porta felis id erat sodales condimentum..."
    },
    {
        category:"Desserts",
        title:"gluten dree muffins",
        date:"Novermber 11,2021",
        icon:"/images/team-1.jpg",
        name:"Silvia Just",
        img:"/images/gallery-9.jpg",
        desc:"Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu aliquet luctus. Maecenas vehicula metus nisi, nec finibus justo vulputate eget. Pellentesque porta felis id erat sodales condimentum..."
    },
    {
        category:"Recipes",
        title:"epic egg salad",
        date:"Novermber 11,2021",
        icon:"/images/team-1.jpg",
        name:"Silvia Just",
        img:"/images/blog-1.jpg",
        desc:"Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu aliquet luctus. Maecenas vehicula metus nisi, nec finibus justo vulputate eget. Pellentesque porta felis id erat sodales condimentum..."
    },
    {
        category:"Desserts",
        title:"Double-choc brownies",
        date:"Novermber 11,2021",
        icon:"/images/team-1.jpg",
        name:"Silvia Just",
        img:"/images/gallery-7.jpg",
        desc:"Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu aliquet luctus. Maecenas vehicula metus nisi, nec finibus justo vulputate eget. Pellentesque porta felis id erat sodales condimentum..."
    },
    {
        category:"Italian Recipes",
        title:"quick grilled pizza",
        date:"Novermber 11,2021",
        icon:"/images/team-1.jpg",
        name:"Silvia Just",
        img:"/images/blog-5.jpg",
        desc:"Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu aliquet luctus. Maecenas vehicula metus nisi, nec finibus justo vulputate eget. Pellentesque porta felis id erat sodales condimentum..."
    },
    {
        category:"Recipes",
        title:"Corn-and-Ham Risotto",
        date:"Novermber 11,2021",
        icon:"/images/team-1.jpg",
        name:"Silvia Just",
        img:"/images/blog-6.jpg",
        desc:"Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu aliquet luctus. Maecenas vehicula metus nisi, nec finibus justo vulputate eget. Pellentesque porta felis id erat sodales condimentum..."
    },
    {
        category:"Italian Recipes",
        title:"Chicken milanse with spaghetti",
        date:"Novermber 11,2021",
        icon:"/images/team-1.jpg",
        name:"Silvia Just",
        img:"/images/blog-7.jpg",
        desc:"Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu aliquet luctus. Maecenas vehicula metus nisi, nec finibus justo vulputate eget. Pellentesque porta felis id erat sodales condimentum..."
    }
]

const Blog = () =>{
    return(
        <>
        <Head>
        <title>Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>
        <meta name="description" content="Blog Dina resturant"/>
        <meta name="keywords" content="Dina, restuarant, about us"/>
        </Head>
        <main className={style.main}>
            <section className={style.hero}>
                <h2 style={poppins.style}>Blog</h2>
                <p>View the latest articles</p>
            </section>
            <section className={style.blog}>
                {blogItems.map((item,index) =>{
                    return(
                        <div key={index} className={style.blogItem}>
                            <h5 style={lora.style}>{item.category}</h5>
                            <p className={style.title} style={poppins.style}>{item.title}</p>
                            <div>
                                <p>{item.date}</p>
                                <Image src={item.icon} width={25} height={25} alt={item.name}/>
                                <Link href={""}>{item.name}</Link>
                            </div>
                            <Image src={item.img} width={500} height={500} alt={item.title}/>
                            <p className={style.desc}>{item.desc}</p>
                            <Button text="read more"/>
                        </div>
                    )
                })}
            </section>
        </main>
        </>
    )
}

export default Blog