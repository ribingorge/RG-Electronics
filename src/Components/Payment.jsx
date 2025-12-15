import React, { useContext, useState } from "react";
import { Mycontext } from "./Context";
import { useNavigate } from "react-router-dom";

function Payment() {
  const { totalPrice, setCart } = useContext(Mycontext);
  const navigate = useNavigate();

  const [paymentType, setPaymentType] = useState("creditcard");
  const [cn, setCn] = useState("");
  const [cno, setCno] = useState("");
  const [exd, setExd] = useState("");
  const [cvv, setCvv] = useState("");
  const [phno, setPhno] = useState("");

  const finalAmount = totalPrice + totalPrice * 0.1;

  const handlePayment = (e) => {
    e.preventDefault();

    if (paymentType !== "upi") {
      if (cvv.length !== 3 || new Date(exd) <= new Date()) {
        alert("Invalid CVV or Expiry Date");
        return;
      }
    }

    alert(`Payment Successful ₹${finalAmount}`);

    setCart([]);
    navigate("/Userdash");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Payment</h2>

        <form onSubmit={handlePayment}>
          <select
            style={styles.input}
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="creditcard">Credit Card</option>
            <option value="debitcard">Debit Card</option>
            <option value="upi">UPI</option>
          </select>

          {paymentType !== "upi" && (
            <>
              <input
                style={styles.input}
                placeholder="Card Holder Name"
                value={cn}
                onChange={(e) => setCn(e.target.value)}
                required
              />
              <input
                style={styles.input}
                placeholder="Card Number"
                value={cno}
                onChange={(e) => setCno(e.target.value)}
                required
              />
              <input
                style={styles.input}
                type="month"
                value={exd}
                onChange={(e) => setExd(e.target.value)}
                required
              />
              <input
                style={styles.input}
                placeholder="CVV"
                maxLength="3"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </>
          )}

          {paymentType === "upi" && (
            <input
              style={styles.input}
              placeholder="UPI / Phone Number"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
              required
            />
          )}

          <button style={styles.button}>
            Pay ₹{finalAmount}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#111",
  },
  card: {
    width: "380px",
    padding: "25px",
    backgroundColor: "#fff",
    borderRadius: "12px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "black",
    color: "white",
    border: "none",
  },
};
