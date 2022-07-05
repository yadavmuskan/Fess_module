
import "./Sidebar.css"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
// import { useNavigate } from "react-router-dom"


export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)
    // let navigate = useNavigate();



    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>
                    <i style={{ color: 'white' }} className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    {open && item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <NavLink to={item.path} className="sidebar-item plain">
                {item.icon && <i className={item.icon}></i>}
                {item.title}
            </NavLink>
        )
    }
}