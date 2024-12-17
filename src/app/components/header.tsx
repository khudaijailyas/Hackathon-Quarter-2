
"Use Client"
import React from 'react'
import Link from "next/link"


export default function Header(){
    return(
        <>
        <div className="MainHeader">
            <div className="UpperHeader">
                <img src="jordan.png" alt="nikeshoes" className="h-[24px] w-[24px] m-[10px]" />
                <ul className="flex gap-3 m-[5px]">
                    <Link href={"/Shoes"}><li>Find a Store</li> </Link>
                    <div className="border-l border-[#333] h-5 max-lg:hidden"></div>
                    <Link href={"/Help"}><li>Help</li></Link>
                    <div className="border-l border-[#333] h-5 max-lg:hidden"></div>
                    <Link href={"/JoinUs"}><li>Join Us</li></Link>       
                     <div className="border-l border-[#333] h-5 max-lg:hidden"></div>
                    <Link href={"/Login"}><li>Sign In</li></Link>
                </ul>
            </div>
            <div className="LowerHeader">
                <Link href={"/New"}>
                <img src="NikeLogo.png" alt=""  className="ml-[10px]"/>
                </Link>
                <ul className="flex gap-8 text-xl text-justify font-bold m-4 ">
                    <li>New & Featured</li>
                    <Link href={"/Cart"}><li>Men</li></Link>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sale</li>
                    <Link href={"/ProductDetails"}><li>SNKRS</li></Link>
                </ul>
                <div className="flex m-3">
                    <img src="search.png" alt="" className="h-[40px] w-[180px]"/>
                    <img src="heart.png" alt="" className="h-[36px] w-[36px]" />
                    <img src="bag.png" alt="" className="h-[36px] w-[36px]" />
                </div>
            </div>

        </div>

        
        
        </>



    )
}