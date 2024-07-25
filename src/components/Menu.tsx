
import { Link } from 'react-router-dom'
import './Menu.css'
import { useNavigate } from 'react-router-dom'
import React  from 'react';

export default function Menu(){
    const router = useNavigate()
    return (
        <header className={"menu-bar"}>
            <Link to='/'>
                <img src={'./logo/2.png'} alt="Logo" width={70} height={70}/>
            </Link>
            <div className={"menu-navigation"}>
                {/** 
                <Link href='/docs'>
                    <p>DOCS</p>
                </Link>
                
                <Link href='/blog'>
                    <p>BLOG</p>
                </Link>
                **/}
                <Link to='/product'>
                    <p>PRODUCT</p>
                </Link>
                <Link to='/roadmap'>
                    <p>ROADMAP</p>
                </Link>
                <Link to='/contact'>
                    <p>CONTACT</p>
                </Link>
            </div>
            <button className={"menu-buttonStyle"} onClick={() => router('/')}>
                <p>APP</p>
                <img src={'./fleche.png'} alt="Arrow" width={18} height={18}/>
            </button>
        </header>
    )
}