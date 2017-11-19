import React from "react";
import { Loot } from "./Loot";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Loot", () => {
  const fetchBitcoinMock = jest.fn();
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: fetchBitcoinMock };
  let loot = shallow(<Loot {...props} />);
  it("renders correctly", () => {
    expect(loot).toMatchSnapshot();
  });

  describe("When the component mounts", () => {
    beforeEach(() => {
      loot = mount(<Loot {...props} />);
    });

    it("It dispatches the fetchBitcoin method", () => {
      expect(fetchBitcoinMock).toHaveBeenCalled();
    });
  });

  describe("When the component mounts completely", () => {
    beforeEach(() => {
      let props = {
        balance: 10,
        bitcoin: { bpi: { USD: { rate: "1,000" } } },
        fetchBitcoin: fetchBitcoinMock
      };
      loot = shallow(<Loot {...props} />);
    });

    it("renders the bitcoin amount", () => {
      expect(loot.find("h2").text()).toEqual("Loot Balance: 0.01");
    });
  });
});
