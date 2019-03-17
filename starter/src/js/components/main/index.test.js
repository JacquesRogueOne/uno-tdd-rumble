import React from "react";
import { shallow } from "enzyme";

import Main from ".";

const wrap = () => shallow(<Main />);

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
