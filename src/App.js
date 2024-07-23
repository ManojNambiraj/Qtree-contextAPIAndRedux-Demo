import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { accountAction } from "./state/actionCreators";
import Context from "./Context";

function App() {
  const [amount, setAmount] = useState(0)
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { dispatchDeposite, dispatchWithdraw } = bindActionCreators(
    accountAction,
    dispatch
  );

  return (
    <div className="App">
      <h2>{account}</h2>
      <input type="text" onChange={(e) => {setAmount(e.target.value)}} />
      <button onClick={() => dispatchDeposite(parseInt(amount))}>Deposite</button>
      <button onClick={() => dispatchWithdraw(parseInt(amount))}>Withdraw</button>
    </div>

  );
}

export default App;
