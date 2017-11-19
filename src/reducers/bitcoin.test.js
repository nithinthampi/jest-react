import { FETCH_BITCOIN } from "../actions/constants";
import bitcoinReducer from "./bitcoin";

describe("bitcoin reducer", () => {
  const bitcoinData = { bpi: "US DOllar bitcoin rate" };
  it("receives sets teh bitcoin data in state", () => {
    expect(
      bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData })
    ).toEqual(bitcoinData);
  });
});
