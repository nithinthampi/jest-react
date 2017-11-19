//https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import { fetchBitcoin } from "./bitcoin";
import { FETCH_BITCOIN } from "./constants";

const createMockStore = configureMockStore([thunk]);
const mockStore = createMockStore({ bitcoin: {} });
const mockResponse = { body: { bpi: "US Dollar Price" } };
fetchMock.get(
  "https://api.coindesk.com/v1/bpi/currentprice.json",
  mockResponse
);

describe("bitcoin reducer", () => {
  it("dispatches the bitcoin fetch API", () => {
    const expectedActions = [
      { type: FETCH_BITCOIN, bitcoin: mockResponse.body }
    ];
    return mockStore.dispatch(fetchBitcoin()).then(() => {
      expect(mockStore.getActions()).toEqual(expectedActions);
    });
  });
});
