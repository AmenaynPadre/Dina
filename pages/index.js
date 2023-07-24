import React from 'react'
import cls from "../styles/Home.module.scss"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation, Autoplay } from 'swiper';
import {Poppins, Lora} from "next/font/google";
import Image from "next/image";
import aboutImage from "../public/images/about-7.jpg";
import wine from "../public/images/about-8.jpg";
import firstParImg from "../public/images/taste-food.png";
import Item from "@/components/menuItems";
import Head from 'next/head';
import Button from "@/components/button";

const lora = Lora({weight: "400", subsets: ["latin"],style:"italic"})
const poppins = Poppins({weight: "600", subsets: ["latin"]})

const heroSlider = [
  {
    image: "/images/slider-1.jpg",
    text: "You should come and taste for yourself"
  },
  {
    image: "/images/slider-2.jpg",
    text: "Discover and experience fine selection of international tastes"
  },
  {
    image: "/images/slider-3.jpg",
    text: "Traditional dishes with local products of highest quality"
  }
]

const homeContent = [
    {
        image:"/images/groceries.png",
        title:"fresh food",
        text:"Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula."
    },
    {
        image:"/images/food.png",
        title:"chef's specials",
        text:"Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula."
    },
    {
        image:"/images/glass.png",
        title:"good wine",
        text:"Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula."
    }
]

export const menuItems = [
    {
        name:"starters",
        list:[
            {
                itemName: "tomato bruschetta",
                img:"/images/double-tomato-bruschetta.jpg",
                desc:"Tomatoes / Olive Oil / Cheese",
                price:"$4.00",
            },
            {
                itemName: "avocado & mango salsa",
                img:"/images/avocado-tomato.jpg",
                desc:"Avocado / Mango / Tomatoes",
                price:"$5.00",
            },
            {
                itemName: "marinated grilled shrimp",
                img:"/images/marinated-grilled-shrimp.jpg",
                desc:"Fresh Shrimp / Oive Oil / Tomato Sauce",
                price:"$7.00",
            },
            {
                itemName: "baked potato skins",
                img:"/images/baked-potato.jpg",
                desc:"Potatoes / Oil / Garlic",
                price:"$9.00",
            },
        ]
    },
    {
        name: "main courses",
        list:[
            {
                itemName: "braised pork chops",
                img:"/images/pork-chops.jpg",
                desc:"4 bone-in pork chops, olive oil, garlic, onion",
                price:"$21.00",
            },
            {
                itemName: "prime rib",
                img:"/images/prime-rib.jpg",
                desc:"Rib, rosemary, black pepper, red wine",
                price:"$20.00",
            },
            {
                itemName: "cocount fried chicken",
                img:"/images/coconut-curry.jpg",
                desc:"8 chicken pieces, coconut milk, oil",
                price:"$19.00",
            },
            {
                itemName: "sriracha beef skewers",
                img:"/images/sriracha-beef.jpg",
                desc:"Beef, garlic, sesame oil, vinegar",
                price:"$12.00",
            },
            {
                itemName: "chicken with garlic & tomatoes",
                img:"/images/roast-chicken.jpg",
                desc:"Chicken, cherry tomatoes, olive oil, dry white wine",
                price:"$12.00",
            },
        ]
    },
    {
        name: "soupes",
        list:[
            {
                itemName: "terrific turkey chili",
                img:"/images/terrific-turkey.jpg",
                desc:"Turkey, oregano, tomato paste, peppers",
                price:"$8.00",
            },
            {
                itemName: "italian sausage tortellini",
                img:"/images/italian-sausage.jpg",
                desc:"Cheese tortellini, sausage, garlic, carrots, zucchini",
                price:"$9.00",
            },
            {
                itemName: "cream of asparagus soup",
                img:"/images/cream-asparagus.jpg",
                desc:"Asparagus, potato, celery, onion, pepper",
                price:"$10.00",
            },
            {
                itemName: "italian sausage soup",
                img:"/images/italian-sausage-soup.jpg",
                desc:"Italian sausage, garlic, carrots, zucchini",
                price:"$9.00",
            },
            {
                itemName: "creamy chicken & wild rice soup",
                img:"/images/creamy-chicken.jpg",
                desc:"Cooked chicken, salt, butter, heavy cream",
                price:"$12.00",
            },
            {
                itemName: "ham and potato soup",
                img:"/images/delicious-ham.jpg",
                desc:"Potatoes, ham, celery, onion, milk",
                price:"$10.00",
            },
        ]
    },
    {
        name: "desserts",
        list:[
            {
                itemName: "summer berry and coconut tart",
                img:"/images/summer-berry.jpg",
                desc:"Raspberries, blackberries, blueberries, graham cracker crumbs",
                price:"$12.00",
            },
            {
                itemName: "pumpkin cookies cream cheese",
                img:"/images/pumpkin-cookies.jpg",
                desc:"Pumpkin, sugar, butter, eggs",
                price:"$10.00",
            },
            {
                itemName: "double chocolate cupcakes",
                img:"/images/chocolate-cupcakes.jpg",
                desc:"Chocolate, eggs, vanilla, milk",
                price:"$7.00",
            },
        ]
    }
]

const Index = () => {


  return (
    <>
    <Head>
        <title>Dina</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="Narek Simonyan"/>
        <meta charset="UTF-8"/>
        <meta name="description" content="Best restuarant in Brooklyn"/>
        <meta name="keywords" content="Dina, restuarant"/>
    </Head>
      <main>
        <section>
            <Swiper
                slidesPerView={1}
                modules={[EffectFade, Navigation, Autoplay]}
                navigation={{
                    enabled: true,
                }}
                effect='fade'
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                className={cls.heroSlider}
            >
                {
                    heroSlider.map((item, index) => {
                        return (
                            <SwiperSlide className={cls.heroSlidesWrapper} key={index}>
                                <div className={cls.heroSlides} style={{backgroundImage: `url(${item.image})`}}>
                                    <h2 style={poppins.style}>WELCOME</h2>
                                    <p style={lora.style}>{item.text}</p>
                                    <Button text={"book a table"} variant={true}/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>

        <section className={cls.homeContent1}>
            <div>
                {
                    homeContent.map((item,index) =>{
                        return (
                            <div key={index}>
                                <Image src={item.image} width={50} height={50} alt="afa"/>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>

        <section className={cls.about}>
            <div>
                <p>HISTORY</p>
                <h2 style={poppins.style}>about us</h2>
                <p className={cls.italic} style={lora.style}>Welcome to Dina, a modern restaurant with a focus on premium food tastes
                </p>
                <p className={cls.text} style={lora.style}>We invite you to celebrate our restaurant's delicious recipes whether you are here for a business lunch or dinner. Discover new tastes and inspired recipes from all over the world.
                </p>
                <Button text={"find more"} variant={false}/>
            </div>
            <div>
                <Image src={aboutImage} width={1000} height={1000} alt="asfg" className={cls.img}/>
            </div>
        </section>

        <section className={cls.firstPar}>
            <Image src={firstParImg} width={500} height={500} alt="afsgd"/>
        </section>

        <section className={cls.ourMenu}>
            <div className={cls.menuInfo}>
                <p>DISCOVER</p>
                <h2>OUR MENU</h2>
                <p>Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dinning experience.
                </p>
            </div>
            <div className={cls.menuItems}>
                {
                    menuItems.map((item,index) => {
                        return (
                            <Item data={item} key={index}/>
                        )
                    })
                }
            </div>

            <Button text={"view menu"} variant={false}/>
        </section>


          <section className={cls.secondPar}>
              <p className={cls.reserve}>reserve a tabele</p>
              <h2 style={poppins.style}>open hours</h2>
              <div className={cls.days}>
                  <p>Monday - Friday: 10 AM - 11 PM</p>
                  <p>Saturday - Sunday: 9 AM - 1 PM</p>
              </div>
              <Button text="book now" variant={true}/>
          </section>

          <section className={cls.homeWine}>
              <div className={cls.wineImg}>
                <Image src={wine} alt={"wine"} width={1000} height={10}/>
              </div>
              <div className={cls.wineText}>
                  <span>experince</span>
                  <h2>wine</h2>
                  <p className={cls.wineText1}>A unique dinner works best with wine pairing</p>
                  <p>You can choose from a variety of styles, light and easy drinking, fresh and aromatic white wines or you could try intense and elegant red wines. Creative cuisine involves sophisticated wines.</p>
                  <p>Vestibulum eleifend gravida neque a bibendum. Vivamus viverra velit non cursus elementum. Donec sit amet posuere ipsum. Mauris rutrum sagittis sapien text link. In vitae ipsum eleifend, auctor turpis in, vestibulum dui. Ut vestibulum, lorem id eleifend mollis, urna augue imperdiet ante, vitae aliquam turpis mauris eget nisi. Sed vel purus id velit molestie.</p>
              </div>
          </section>

          <section className={cls.homeWidjet}>
            <span>visit us</span>
              <h2 style={poppins.style}>GOOD FOOD AND DRINKS</h2>
              <p>Donec suscipit lobortis ornare. Aenean vel varius odio.</p>
              <p>Cras ligula odio, congue vel adipiscing non, congue vitae neque.</p>
          </section>
      </main></>
  )
}

export default Index