import React, { useState } from 'react'
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaBars
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/user",
            name: "User",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Analytic",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />

        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />

        }, {
            path: "/productList",
            name: "Product List",
            icon: <FaThList />

        }
    ]
    return (
        <div className='container'>
            <div className='sidebar' style={{ width: isOpen ? "250px" : "50px" }}>
                {/* <NavLink style={{ color: "white" }} to={"/dashboard"}> */}
                    <div className='top_section'>
                        <h1 className='logo' style={{ display: isOpen ? "block" : "none" }}>Tomato</h1>
                        <div className='bars' style={{ marginLeft: isOpen ? "50px" : "0" }}>
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                {/* </NavLink> */}

                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div className='link_text' style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                        </NavLink>

                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar