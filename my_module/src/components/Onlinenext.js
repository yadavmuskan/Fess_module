
import React from "react";
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Onlinenext.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Onlinenext = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
        <div id="paydiv">
            <div className="box">
                <div>
                    <p className="type1">FEES TYPE</p>
                    <p className="type">FEES</p>
                </div>
            </div>
            <div className="Fee">
                <p >Tution Fee 
                </p>
                <p className="fe">{location.state.data}</p>
            </div>
            <h6 className="howpay">How much you want to pay?</h6>
            <p className="Fees">
                {location.state.data}
            </p>    
            <button className="button1" onClick={() => navigate("/process")}>PAYMENT</button> 
            <div>
                {/* <button className="button1" onClick={() => navigate("/process")}>PAYMENT</button> */}

            </div>

            <button className="button2" onClick={() => navigate(-1)} >Back</button>
        </div>
        {/* <button className="button2" onClick={() => navigate(-1)} >Back</button> */}
        </>
        
    );
}
export default Onlinenext;
