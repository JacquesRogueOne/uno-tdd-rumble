import React from "react";
import { shallow } from "enzyme";

import Main from ".";

const wrap = () => shallow(<Main />);

test("", () => {
    const wrapper = wrap();
    expect(wrapper.find('AddPlayer')).toHaveLength(1);
})
