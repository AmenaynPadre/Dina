import React, {useState} from 'react';
import Image from "next/image";
import style from "../styles/Menu.module.scss"

const Item = ({
    data
}) => {
    const [state, setState] = useState(false)
    return (
        <>
            <div  className={style.main} onClick={() => {
                setState(!state)
            }}>
                <div className={`${style.title} ${state && style.bg}`}>
                    <h2>{data.name}</h2>
                </div>

            </div>
            <div className={`${style.menu} ${state && style.open}`}>
                {
                    data.list.map((item,index) => {
                        return (
                            <div className={style.a} key={index}>
                                <div className={style.menuItem}>
                                    <Image src={item.img} alt={item.desc} className={style.img} width={60} height={60}/>
                                    <div>
                                        <p>{item.itemName}</p>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                                <span>{item.price}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}


export default Item
