import React from "react";
import { shallow, mount } from "enzyme";

import Main from ".";

const wrap = () => shallow(<Main />);
const wrapMount = () => mount(<Main />);

test("add player is always displayed", () => {
    const wrapper = wrap();
    expect(wrapper.find('AddPlayer')).toHaveLength(1);
})

test("Should not display player when there is no player", () => {
    const wrapper = wrap();
    expect(wrapper.find('PlayerList')).toHaveLength(0);
})

test("players is empty when application start", () => {
    const wrapper = wrap();
    expect(wrapper.state().players).toEqual([]);
})

test("players ", () => {
    const wrapper = wrap();
    expect(wrapper.state().players).toEqual([]);
})

test("renameMePlease", () => {
    const wrapper = wrapMount();
    /* action */
    wrapper.find('button').simulate('click')
    expect(wrapper.state().players).toEqual([''])
})
