import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import "./Accounts.css";
function Accounts() {
  const [show, setShow] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [formvalues, setFormValues] = useState({
    sno: "",
    title: "",
    selectedLanding: "",
    amount: 0,
    onSubmit: true,
  });

  const [upadetedArray, setUpdatedArray] = useState([]);

  const [onSubmit, setOnsubmit] = useState(false);

  //pop-up modal close
  const handleClose = () => {
    setFormValues({ sno: "", title: "", selectedLanding: "", amount: 0 });
    // alert("Modal close")
    setShow(false);
  };

  //popUp modal Show
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
  };
  const handleSubmit = () => {
    if (formvalues.selectedLanding === "") {
      alert("Please Select Landing in properly");
    } else if (formvalues.selectedLanding === "income") {
      setOnsubmit(true);
      setIncome(income + Number(formvalues.amount));
      setBalance(balance + Number(formvalues.amount));
      upadetedArray.push(formvalues);
      setUpdatedArray([...upadetedArray]);
      setFormValues({ sno: "", title: "", selectedLanding: "", amount: 0 });
    } else {
      setOnsubmit(true);
      setExpense(expense + Number(formvalues.amount));
      setBalance(balance - Number(formvalues.amount));
      upadetedArray.push(formvalues);
      setUpdatedArray([...upadetedArray]);
      setFormValues({ sno: "", title: "", selectedLanding: "", amount: 0 });
    }
  };

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-12 text-center py-5 bal">Balance : {balance}</div>
      </div>
      <div className="container text-center">
        <div className="d-flex justify-content-around">
          <div className=" tot">Income : {income}</div>
          <div className="exp">Expense : {expense}</div>
        </div>
      </div>

      <div className="row">
        <div className="text-center py-5">
          <button
            className="btn btn-outline-secondary "
            onClick={handleShow}
            size="sm"
          >
            Add
          </button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>EXPENSE TRACKER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-evenly">
                SNO:{" "}
                <input
                  type="number"
                  className="textboxs"
                  name="sno"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mt-5 d-flex justify-content-evenly">
                Title:{" "}
                <input
                  type="text"
                  className="textboxs"
                  name="title"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <div className="mt-5 d-flex justify-content-evenly">
                <div>
                  Landing:{"  "}
                  </div>
                  <div>
                    <select
                      className=" textboxs"
                      name="selectedLanding"
                      onChange={handleChange}
                    >
                      <option value="Choose">Choose</option>
                      <option value="expense">Expense</option>
                      <option value="income">Income</option>
                    </select>{" "}
                  </div>
                </div>
              </div>
              <div className="mt-5 d-flex justify-content-evenly">
                <label>
                  Amount:{" "}
                  </label>
                  <input
                    type="number"
                    className="textboxs"
                    onChange={handleChange}
                    value={formvalues.amount}
                    name="amount"
                  />
           
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="btn btn-success" onClick={handleSubmit}>
                Add Amount
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <div>
            {" "}
            <div className="d-flex justify-content-between outp">
              <div className="text-center ">S.NO</div>
              <div className="text-center">Title</div>
              <div className="text-center">Landing</div>
              <div className="text-center"> Amount</div>
            </div>
            {upadetedArray.map((upadetedArray) => (
              <div className="d-flex justify-content-between outp1">
              <div className="text-center  ">{upadetedArray.sno}</div>
              <div  className="text-center">{upadetedArray.title}</div>
              <div  className="text-center ">{upadetedArray.selectedLanding}</div>
              <div  className="text-center">{upadetedArray.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
