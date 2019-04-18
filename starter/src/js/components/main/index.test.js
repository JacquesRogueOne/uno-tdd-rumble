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

test("add player's name to the list", () => {
    const wrapper = wrapMount();
    wrapper.find('AddPlayer').setState({name: 'dick'});
    wrapper.find('button').simulate('click');
    expect(wrapper.state().players).toEqual(['dick']);
})

test("doesn't add an empty player name", () => {
    const wrapper = wrapMount();
    wrapper.find('button').simulate('click');
    expect(wrapper.state().players).toEqual([]);
})

test('should display player list when it contains at least one player', () => {
  const wrapper = wrapMount();
  wrapper.find('Main').setState({players: ['dick']});
  expect(wrapper.find('PlayerList')).toHaveLength(1);
})

test('should display the player\'s name in the list', () => {
    const wrapper = wrapMount();
    wrapper.find('Main').setState({players: ['wissem']});
    expect(wrapper.find('li').text()).toEqual('wissem');
})
