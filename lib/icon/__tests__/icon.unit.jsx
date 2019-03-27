import renderer from "react-test-renderer";
import React from "react";
import Icon from "../icon";
import {mount} from 'enzyme';
describe("icon", () => {
  it("render successfully", () => {
    const json = renderer.create(<Icon className="alipay" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it("onclick", () => {
    let n = 1
    const fn = () => {
      n = 2
    }
    const component = mount(<Icon name='alipay' onClick={fn}></Icon>)
    component.find('svg').simulate('click')
    expect(n).toEqual(2)
  });

  it("onclick second way", () => {
    const fn = jest.fn()
    const component = mount(<Icon name='alipay' onClick={fn}></Icon>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  });
});
