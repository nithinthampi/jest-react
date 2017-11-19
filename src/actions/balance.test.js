import * as actions from "./balance";
import * as constants from "./constants";

describe("action", () => {
  it("creates balance action", () => {
    const balance = 0;
    const expectedResponse = { type: constants.SET_BALANCE, data: balance };
    expect(actions.setBalance(balance)).toEqual(expectedResponse);
  });

  it("creates deposit action", () => {
    const deposit = 10;
    const expectedResponse = { type: constants.DEPOSIT, data: deposit };
    expect(actions.deposit(deposit)).toEqual(expectedResponse);
  });

  it("creates withdraw action", () => {
    const withdraw = 10;
    const expectedResponse = { type: constants.WITHDRAW, data: withdraw };
    expect(actions.withdraw(withdraw)).toEqual(expectedResponse);
  });
});
