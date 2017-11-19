import rootReducer from "./index";

describe("CombineReducer", () => {
  const balance = 0;
  it("Combines all the reducers", () => {
    const expectedResponse = { balance, bitcoin: {} };
    expect(rootReducer({}, {})).toEqual(expectedResponse);
  });
});
