import React from 'react';
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import style from "../styles/Header.module.scss"
import Image from "next/image";
import logo from "../public/images/logo-dina-white.png"
import Link from "next/link";
import {Poppins} from "next/font/google";

const poppins = Poppins({variable: "--font", subsets: ["latin"], weight: "400"})


const Header = () => {
    const router = useRouter()
    const [active,setActive] = useState(false)
    const [sticky, setSticky] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 75 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    const links = [
        {
            text:"home",
            link:"/",
            key:1
        },
        {
            text:"menu",
            link:"/menu",
            key:2
        },
        {
            text:"about us",
            link:"/about",
            key:3
        },
        {
            text:"reservation",
            link:"/reservation",
            key:4
        },
        {
            text:"gallery",
            link:"/gallery",
            key:5
        },
        {
            text:"blog",
            link:"/blog",
            key:6
        },
        {
            text:"contact",
            link:"/contact",
            key:7
        },
    ]


    return (
        <header className={style.header} style={poppins.style}>
            <div>
                <div className={style.address}>
                    <p>40 Park Ave, Brooklyn</p>
                    <p>New York 70250</p>
                </div>
                <div>
                    <Link href={"/"}>
                        <Image src={logo} width={100} height={30} alt={"alo"} priority={true}/>
                    </Link>
                </div>
                <div className={style.reserv}>
                    <p>Book Now</p>
                    <p>+1-222-333-444</p>
                </div>
                <div className={style.burgerMenu}>
                    <p>MENU</p>
                    <div
                        onClick={() => setActive(!active)}
                        className={`${active ? `${style.line}` : ""}`}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <nav className={`${style.menu} ${active ? `${style.isActive}` : ""} ${sticky}`} >
                <ul>
                    {
                        links.map((item,index) =>{
                            return (
                                <li key={index} className={router.pathname == item.link ? style.linkActive : ""}>
                                    <Link href={item.link} onClick={()=>{setActive(false)}}>
                                        {item.text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;