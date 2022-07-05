import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Onlinepay.css';
function Onlinepay() {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    function getData(val) {
        setData(val.target.value)
        setPrint(false)
        console.warn(val.target.value)
    }
    const redirectNext =()=>{
        navigate("/online_next" , {state:{data:data}})
    }
    return (
        <>
                   <button className="backbut" onClick={() => navigate(-1)} >Back</button>
            <div className="bigbox" >
                <div>
                    <div>
                        <h5 id="a"> PAY FEES </h5>
                        <div className="box2">
                            <div className="box3">
                                <div>
                                <center>
                                    <h7 className="h7">Fees Type  </h7>
                                    <h7 className="h7">Course</h7>
                                    <h7 className="h7">Total Balance  </h7>
                                    <h7 className="h7"> Current Application</h7>
                              </center>
                                </div>
                            </div>
                            <div className="data" >
                                <h8 className="tution"> Tution Fees</h8>
                                <h8 className="BCA">BCA</h8>
                                <h8 className="money">31500</h8>
                                <input type="number" className="input" onChange={getData} />
                                <div className="totald">
                                    <h9 className="total">Total Payable =</h9>
                                    {
                                            <h9 className="totalrep">{data}</h9>
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="onlinepaybut" onClick={redirectNext}>PAY NOW</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )}
export default Onlinepay;