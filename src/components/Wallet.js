import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/balance";

export class Wallet extends Component {
  constructor() {
    super();
    this.state = { amount: 0 };
  }

  render() {
    return (
      <div>
        <h3 className="balance">Balance:{this.props.balance}</h3>
        <input
          className="input-amount"
          onChange={event => {
            this.setState({ amount: parseInt(event.target.value) });
          }}
        />
        <button
          className="btn-deposit"
          onClick={() => this.props.deposit(this.state.amount)}
        >
          deposit
        </button>
        <button
          className="btn-withdraw"
          onClick={() => this.props.withdraw(this.state.amount)}
        >
          withdraw
        </button>
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state };
  },
  { deposit, withdraw }
)(Wallet);
