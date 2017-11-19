import * as constants from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const balanceReducer = (state = 0, action) => {
  const COOKIE_KEY = "balance";
  let balance = state;
  switch (action.type) {
    case constants.SET_BALANCE:
      balance = action.data;
      bake_cookie(COOKIE_KEY, balance);
      break;
    case constants.WITHDRAW:
      balance = state - action.data;
      bake_cookie(COOKIE_KEY, balance);
      break;
    case constants.DEPOSIT:
      balance = state + action.data;
      bake_cookie(COOKIE_KEY, balance);
      break;
    default:
      balance = parseInt(read_cookie(COOKIE_KEY)) || state;
  }
  return balance;
};

export default balanceReducer;
