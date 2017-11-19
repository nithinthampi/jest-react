import { SET_BALANCE, DEPOSIT, WITHDRAW } from "./constants";

export const setBalance = balance => {
  return { type: SET_BALANCE, data: balance };
};

export const deposit = depositAmount => {
  return { type: DEPOSIT, data: depositAmount };
};

export const withdraw = withdrawAmount => {
  return { type: WITHDRAW, data: withdrawAmount };
};
