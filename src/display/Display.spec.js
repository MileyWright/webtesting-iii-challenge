import React from 'react';
import Display from '../display/Display';
import * as rtl from 'react-testing-library';

test('Defaults to unlocked and open', () => {
    const wrapper = rtl.render(<Display />);
    const unlocked = wrapper.getByText(/unlocked/i);
    const open = wrapper.getByText(/open/i);

    expect(unlocked.textContent).toMatch('Unlocked');
    expect(open.textContent).toMatch('Open');
})