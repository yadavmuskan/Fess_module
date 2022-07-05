// import React from 'react'

// import './Studentinfo.css';

// const Studentinfo = () => {
// //   const myCard={
// //     height: "470px",
// //     width: "700px",
// //     borderRadius: "9px",
// //     // backgroundColor: "yellow"
// //     boxShadow: "0px 0px 10px 8px rgba(84,84,84,0.15)"
// //   }

//   return (
//    <div className="wrapper rounded bg-white">
//   <div className="h3">STUDENT INFORMATION</div>
//   <div className="form">
//     <div className="row">
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>Full Name</label>
//         <input type="text" className="form-control" required />
//       </div>
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>ID</label>
//         <input type="text" className="form-control" required />
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>Branch</label>
//         <input type="Text" className="form-control" required />
//       </div>
//       <div className="h3">FEES INFORMATION</div>
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>Total Fees</label>
//         <input type="email" className="form-control" required />
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>Deposit</label>
//         <input type="email" className="form-control" required />
//       </div>
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>Due</label>
//         <input type="tel" className="form-control" required />
//       </div>
//     </div>
//     <div className="btn btn-primary mt-3">Submit</div>
//   </div>
// </div>

//   )
// }
// export default Studentinfo






// import React, { useEffect, useState } from "react"

// const Studentinfo = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <div className="wrapper rounded bg-white">
//    <div className="h3">STUDENT INFORMATION</div>
//    <div className="form">
//     <div className="row">
//        <div className="col-md-6 mt-md-0 mt-3">
//        <label >Full Name</label> 
//      {users.map(user => (      
//          <input type="text" className="form-control" required key={user.id}>{user.name}</input>
//          ))}  
//         </div>
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>ID</label>
//         <input type="text" className="form-control" required />
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>Branch</label>
//         <input type="Text" className="form-control" required />
//       </div>
//       <div className="h3">FEES INFORMATION</div>
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>Total Fees</label>
//         <input type="email" className="form-control" required />
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>Deposit</label>
//         <input type="email" className="form-control" required />
//       </div>
//       <div className="col-md-6 mt-md-0 mt-3">
//         <label>Due</label>
//         <input type="tel" className="form-control" required />
//       </div>
//     </div>
//     <div className="btn btn-primary mt-3">Submit</div>
//    </div>
//  </div>
//       )}
//     </div>
//   )
// }

// export default Studentinfo






// -----------------------------------------------------------
import React from 'react'
import './Studentinfo.css';
// import From_Button from './From_Button';
import axios from 'axios';
import { Component } from 'react';

export class Studentinfo extends Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/info')
      .then(res => {  
        const persons = res.data.data;
        console.log(persons);
        this.setState({persons:persons});
      })
  }

render(){
  return (
    <>
 
    <div class="containerfromstu">
      <div class="titlefromstu">STUDENT INFORMATION</div>
   
    <div class="contentfromstu">
    {this.state.persons.map(person =>
      <form >
        <div class="user-detailsfromstu">
        
          <div class="input-boxfromstu">
            <span class="detailsfromstu" >Full Name</span>
            <input type="text" placeholder="Enter your name"  value ={person.Name}required/>
          </div>
          <div class="input-boxfromstu">
            <span class="detailsfromstu">ID</span>
            <input type="text" placeholder="Enter your username" value={person.Enrollid} required/>
          </div>
          <div class="input-boxfromstu">
            <span class="detailsfromstu">CLASS </span>
            <input type="text" placeholder="Enter your email" value={person.Class} required/>
          </div>
    
          </div>
          <div class="titlefromstu">FESS INFORMATION</div>
          <div class="user-detailsfromstu">
          <div class="input-boxfromstu">
            <span class="detailsfromstu">TOTAL FESS </span>
            <input type="text" placeholder="Enter your name" value={person.Studentfees.Tfees} required/>
          </div>
          <div class="input-boxfromstu">
            <span class="detailsfromstu">DEPOSIT</span>
            <input type="text" placeholder="Enter your username" value={person.Studentfees.Deposit} required/>
          </div>
          <div class="input-boxfromstu">
            <span class="detailsfromstu">DUE</span>
            <input type="text" placeholder="Enter your email" value={person.Studentfees.Due} required/>
          </div>
          {/* <div class="input-boxfromstu">
            <span class="detailsfromstu">Phone Number</span>
            <input type="text" placeholder="Enter your number" required/>
          </div> */}
          
        
        
        </div>
        <div class="buttonfromstu1">
          
        </div>
     </form>
    )}
    </div>
  </div>
</>
  )
}
}

export default Studentinfo ;
