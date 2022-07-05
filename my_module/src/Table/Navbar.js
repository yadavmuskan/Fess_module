import "./Tab.css";
// import myImageLogo from "./logo.jpeg"
import User from "./User.png"
import down from "./down-filled-triangular-arrow (1).png"
function Navbar() {
  return (

    <>

      <div className="main-nav">
        {/* 1st logo part  */}

       {/* 2nd menu part  */}
       

        <ul>

          <li style={{ fontSize: '1.7em', fontFamily: 'sans-serif', marginTop: '3vh', marginLeft: '130vh', }} className="menu-link" >
            {/* eslint-disable-next-line */}
            <a href="#">Ragistration</a>

          </li>
          <li style={{ fontSize: '1.7em', fontFamily: 'sans-serif', marginLeft: '144vh', marginTop: '-3.6vh' }} className="menu-link">
            {/* eslint-disable-next-line */}
            <a href="#">Login</a>
          </li>




        </ul>

        <div style={{ marginTop: "-12.5vh", marginLeft: '150vh', padding: '50px' }} >
          <img src={User} style={{ height: "40px", width: "40px", borderRadius: "25px", border: '2px solid white' }}
            alt="..."
          />
        </div>


        <div style={{ marginTop: "-78px", marginLeft: '163vh' , }} >
          <img src={down} style={{ height: "12px", width: "12px" }}
            alt="..."
          />
        </div>


      </div>
    </>
  );
}
export default Navbar;