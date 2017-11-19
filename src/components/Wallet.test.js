import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Wallet } from "./Wallet";

configure({ adapter: new Adapter() });

describe("Wallet", () => {
  const balance = 0;
  const deposit = jest.fn();
  const withdraw = jest.fn();
  const props = { balance, deposit, withdraw };
  const wallet = shallow(<Wallet {...props} />);
  it("renders propely", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("Renders the intial balance correctly", () => {
    expect(wallet.find(".balance").text()).toEqual(`Balance:${balance}`);
  });

  describe("when user enters amount", () => {
    beforeEach(() => {
      wallet
        .find(".input-amount")
        .simulate("change", { target: { value: 10 } });
    });

    it("sets the amount in wallte component `state`", () => {
      expect(wallet.state().amount).toEqual(10);
    });

    describe("And user clicks on `deposit` button", () => {
      beforeEach(() => {
        wallet.find(".btn-deposit").simulate("click");
      });
      it("Updates the deposit in balance", () => {
        expect(deposit).toHaveBeenCalledWith(10);
      });
    });

    describe("And the user clicks on `withdraw` button", () => {
      beforeEach(() => {
        wallet.find(".btn-withdraw").simulate("click");
      });

      it("Calls the withdraw methos with right parameters", () => {
        expect(withdraw).toHaveBeenCalledWith(10);
      });
    });
  });
});
