import React, { useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import { Link, NavLink } from 'react-router-dom'
import { headerLinks } from '../../data/headerData'
import "./style.css"
import { CloseOutlined, SearchOutlined } from '@mui/icons-material';

function Header() {
    const [page, setPage] = useState("الرئيسية");
    const [openForm, setOpenForm] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [sticky, setSticky] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    })
    return (
        <header className={sticky ? 'sticky' : ""}>
            <NavLink className="logo" to={"#"}>
                <img src={require("../../assets/logo/image-001-PhotoRoom.png-PhotoRoom.png")} alt="" />
            </NavLink>
                <nav className={openNav ? "active" : ""}>
                    <ul>
                        {
                            headerLinks.map((item, index) => {
                                return <Slide direction={"right"} delay={openNav ? 100 * index : 0}><li>
                                    <a href={item.path} onClick={() => { setPage(item.label); setOpenNav(false) }} className={item.label === page ? 'active' : ""}>{item.label}</a>
                                </li></Slide>
                            })
                        }
                    </ul>
                    <div className={openForm ? "openForm active" : "openForm"}>
                        <form action="#" id='search'>
                            <CloseOutlined onClick={() => setOpenForm(false)} />
                            <input type="search" name="" id="" autoFocus="true" autoComplete={true} />
                            <button className='btn'>
                                <SearchOutlined style={{ color: "white" }} />
                            </button>
                        </form>
                    </div>

                </nav>

            <div class={openNav ? "hamburger-menu menu-open" : "hamburger-menu"} id="menu" onClick={() => setOpenNav(!openNav)}>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>

            <Slide direction='down'>
                <div className="btns">
                    <span onClick={() => setOpenForm(true)}>
                        <SearchOutlined style={{ color: "white" }} />
                    </span>
                    {/* <button className='btn btn-success'>
                        <span> تسجيل الدخول </span>
                    </button>
                    <button className='btn btn-success'>
                        <span> الاشتراك </span>
                    </button> */}
                </div>
            </Slide>
        </header>
    )
}

export default Header
