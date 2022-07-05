// import "./Sidebar.css"
// // import item from "../data/Sidebar/json"
// import { useState } from "react"


//  function Sidebar() {
//      const [open, setOpen] = useState(false)
//     return(


//     <div className="main">
//         <div className="Sidebar">
//             {/* { item.map((item, index) => <SidebarItem key={index} {...item} />)} */}

//         <div className={open ? "SidebarItem open" : "SidebarItem"}>
//             <div className="Sidebar-title">
//                 <span>
//                     Fees Management 
//                 </span>
//                 <i class="bi bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
//             </div>

//             <div className="sidebar-content">
//                 hello
//             </div>
//         </div>
//         </div>
//     </div>
//     )
// }
// export default Sidebar;


import SidebarItem from "./SidebarItem"
import items from "./data/Sidebar.json"
import logo from './logo.jpeg'
// import { Route } from "react-browser-router"

export default function Sidebar() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop:'20px',
        padding:'15px',
        color:'white',
      
      }} >
        {/* <img src={logo}
          style={{ height: "50px", width: "50px", borderRadius: "60px" , marginRight:'10px', marginTop:'-4%' }}
          alt="..."
        /> */}
        <h4>
          <span>ITEG</span>
          <span > MANAGEMENT</span>
        </h4>
      </div>
      <div className="sidebar">
        {items.map((item, index) => <SidebarItem key={index} item={item} />)}
      </div>
    </>
  )
}









