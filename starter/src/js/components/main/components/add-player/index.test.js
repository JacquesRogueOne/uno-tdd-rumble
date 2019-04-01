import React from "react";
import { mount } from "enzyme";

import AddPlayer from ".";

const clickButton = jest.fn();

const wrap = () => mount(<AddPlayer clickButton={() => 0} />);

test("should clear input when the button is clicked", () => {
    const wrapper = wrap();
    wrapper.state().name = "Hola";
    expect(wrapper.state().name).toEqual("Hola");
    wrapper.find('button').simulate('click');
    expect(wrapper.state().name).toEqual("");
})

test("tot", () => {
    clickButton.mockClear();
    const wrapper = wrap();
    expect(clickButton).toHaveBeenCalledTimes(0);
    wrapper.find('button').simulate('click');
    expect(clickButton).toHaveBeenCalledTimes(1);
})
