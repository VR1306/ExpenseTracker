// import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
// function Tables() {
//   const [show, setShow] = useState(false);
//   const [income, setIncome] = useState(0);
//   const [expense, setExpense] = useState(0);
//   const [balance, setBalance] = useState(0);
//   const [formvalues, setFormValues] = useState({
//     sno:"",
//     title: "",
//     selectedLanding: "",
//     amount: 0,
//     onSubmit:true
//   });

//   const [upadetedArray,setUpdatedArray] = useState([])
  
// const [onSubmit,setOnsubmit]=useState(false)

//   //pop-up modal close
//   const handleClose = () => {
//     setFormValues({  sno:"", title: "", selectedLanding: "", amount: 0 });
//     // alert("Modal close")
//     setShow(false);
//   };

//   //popUp modal Show
//   const handleShow = () => setShow(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formvalues, [name]: value });
//   };
//   const handleSubmit = () => {
//     if(formvalues.selectedLanding === ''){
//       alert('Please Select Landing in properly')
//     }
//    else if ((formvalues.selectedLanding === "income")) {
//      setOnsubmit(true)
//        setIncome(income + Number(formvalues.amount));
//       setBalance(balance + Number(formvalues.amount))
//       upadetedArray.push(formvalues)
//       setUpdatedArray([...upadetedArray])
//       setFormValues({  sno:"", title: "", selectedLanding: "", amount: 0 });
//     } else {
//       setOnsubmit(true)
//       setExpense(Number(formvalues.amount));
//       setBalance(balance - Number(formvalues.amount));
//       upadetedArray.push(formvalues)
//       setUpdatedArray([...upadetedArray])
//       setFormValues({  sno:"", title: "", selectedLanding: "", amount: 0 });
//     }
//   };

//   return (
//     <div>
//       <div>Income:{income} </div>
//       <div>Expense:{expense} </div>
//       <div>Balance:{balance} </div>

//       <button
//         className="btn btn-outline-secondary "
//         onClick={handleShow}
//         size="sm"
//       >
//         Add
//       </button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>EXPENSE TRACKER</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
      
//         <div for="expensetracker">
//             S.No:{" "}
//             <input
//               type="text"
//               className="textboxs"
//               name="sno"
//               onChange={handleChange}
//             ></input>
//           </div>
//           <div for="expensetracker">
//             Title:{" "}
//             <input
//               type="text"
//               className="textboxs"
//               name="title"
//               onChange={handleChange}
//             ></input>
//           </div>
//           <div for="expensetracker">
//             <label className="mt-5">
//               Landing In
//               <select
//                 className=" textboxs"
//                 name="selectedLanding"
//                 onChange={handleChange}
//               >
//                 <option value="Choose">Choose</option>
//                 <option value="expense">Expense</option>
//                 <option value="income">Income</option>
//               </select>
//             </label>
//           </div>
//           <div className="mt-5">
//             <label>
//               Amount:
//               <input
//                 type="text"
//                 className="textboxs"
//                 onChange={handleChange}
//                 value={formvalues.amount}
//                 name="amount"
//               ></input>
//             </label>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <button onClick={handleSubmit}>submit</button>
//         </Modal.Footer>
//       </Modal>
            
              
//            {/* {onSubmit&& <div><td>{formvalues.sno}</td>
//                 <td>{formvalues.title}</td>
//                 <td>{formvalues.selectedLanding}</td>
//                 <td>{formvalues.amount}</td></div>} */}

//                 {upadetedArray.map(upadetedArray=><div>{upadetedArray.sno}</div>)}
                 
            
          
//     </div>
//   );
// }

// export default Tables;
