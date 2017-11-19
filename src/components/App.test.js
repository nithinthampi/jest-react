import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);
  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("Initializes the state proprtly", () => {
    expect(app.state()).toEqual({});
  });

  it("Creates a Wallet component", () => {
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });
});
