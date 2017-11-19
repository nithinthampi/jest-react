import * as constants from "../actions/constants";
import balanceReducer from "./balance";

describe("reducers", () => {
  describe("When the app initializes", () => {
    const balance = 20;

    it("sets the balance correctly", () => {
      expect(
        balanceReducer(undefined, {
          type: constants.SET_BALANCE,
          data: balance
        })
      ).toEqual(balance);
    });

    it("Sets the balance correctly when re initializing", () => {
      expect(balanceReducer(undefined, {})).toEqual(balance);
    });
  });

  it("withdraws the amount correctly", () => {
    const initialBalance = 10;
    const withdrawAmount = 10;
    expect(
      balanceReducer(initialBalance, {
        type: constants.WITHDRAW,
        data: withdrawAmount
      })
    ).toEqual(initialBalance - withdrawAmount);
  });

  it("Deposits the amount correctly", () => {
    const initalBalance = 10;
    const depositAmount = 20;

    expect(
      balanceReducer(10, { type: constants.DEPOSIT, data: depositAmount })
    ).toEqual(initalBalance + depositAmount);
  });
});
