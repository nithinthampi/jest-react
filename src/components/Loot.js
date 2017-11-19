import React, { Component } from "react";
import { connect } from "react-redux";
import sinon from "sinon";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  renderBitcoin() {
    const { bitcoin } = this.props;
    if (Object.keys(bitcoin).length === 0) return "";
    return (
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10)
    );
  }

  render() {
    return (
      <div>
        <h2>Loot Balance: {this.renderBitcoin()}</h2>
      </div>
    );
  }
}

export default connect(state => state, { fetchBitcoin })(Loot);
