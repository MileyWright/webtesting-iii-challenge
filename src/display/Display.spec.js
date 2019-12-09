import React from 'react';
import Display from '../display/Display';
import {render} from '@testing-library/react';

test('Defaults to unlocked and open', () => {
    const wrapper = render(<Display />);
    const unlocked = wrapper.getByText(/unlocked/i);
    const open = wrapper.getByText(/open/i);

    expect(unlocked.textContent).toMatch('Unlocked');
    expect(open.textContent).toMatch('Open');
})

test('Displays if gate is closed and locked', () =>{
    const {getByText} = render(<Display locked={true} closed={true} />)
    const locked = getByText(/locked/i);
    const closed = getByText(/closed/i);

    expect(locked.textContent).toMatch('Locked');
    expect(closed.textContent).toMatch('Closed');
})

test('Displays Closed if the closed prop is true', () => {
    const {getByText} = render(<Display closed={true} />)
    const closed = getByText(/closed/i);

    expect(closed.textContent).toMatch('Closed');
})

test('Displays Open if closed prop is false', () => {
    const {getByText} = render(<Display closed={false} />);
    const open = getByText(/open/i);

    expect(open.textContent).toMatch('Open');
})